// Constants

	// Document Query Selectors
	const mainNav = document.querySelector(".main-nav");
	const root = document.querySelector(':root');
	const cards = document.querySelectorAll(".card");
	// Configuration
	const BREAKPOINT = 1500; // Breakpoint for 2-page layout
	const SCROLL_DELAY = 200; // Delay between allowed scroll events (ms)
	const SCROLL_OFFSET = 32; // Page Padding Offset

	// ---- End of Constants ---- //

	// States

	// Current card index and reference
	let currentCard = 1;
	let currentCardRef = 1;
	// Scroll position tracking
	let lastScrollPosition = 0;
	// Window width tracking
	let lastwindowWidth = window.innerWidth;

	// Card Line Clamping
	let suggestedMaxTitleLines;

	// Resizing
	let resizeTimeout;

	// Tag position tracking
	let alternateTagPosition;
	let tagIsHidden = false; // Initialize tagIsHidden state
	let bodyIsHidden;

	// Boolean states
	let isScrolling = false
	let isResizing = false
	let isUpdatingTextClamping = false; // NEW: Prevent infinite loops

	// Add touch support for mobile devices
	let touchStartX = 0;
	let touchEndX = 0;

	let prevScroll;

	// ---- End of States ---- //

	// Functions

	function initialize() { // Initialize on load
		relSizing();
		setDynamicStyles();
		updateSnapSettings();
		updateTextOverflowClampingForAllCards();
	}

	// Track scroll position for resize handling
	function trackScrollPosition() {
		if (mainNav) {
			lastScrollPosition = mainNav.scrollLeft;
		}
	}

	// Check if the device is mobile
	function isMobile() {
		return (
			"ontouchstart" in window ||
			navigator.maxTouchPoints > 0 ||
			window.matchMedia("(pointer: coarse)").matches ||
			(!window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(hover: none)").matches)
		) ? true : false;
	}

	// Utility: Get currently visible card(s)
	function getVisibleCards() {
		const cards = document.querySelectorAll('.card');
		const mainNavRect = mainNav.getBoundingClientRect();
		let visible = [];

		cards.forEach(card => {
			const rect = card.getBoundingClientRect();
			const visibleWidth = Math.min(rect.right, mainNavRect.right) - Math.max(rect.left, mainNavRect.left);
			if (visibleWidth > 0 && visibleWidth >= rect.width * 0.5) { // Check if card is at least 50% visible in the main-nav viewport
				visible.push(card);
			}
		});
		return visible;
	}

	// Update CSS custom properties based on screen size
	function updateSnapSettings() {
		const snapValue = (window.innerWidth < BREAKPOINT) && window.innerHeight > window.innerWidth ? "center" : "start";
		root.style.setProperty('--snapTo', snapValue);
	}

	// Perform smooth scrolling with debounced pointer event handling
	function performScroll(scrollAmount) {
		if (!mainNav) return;
		root.style.setProperty('--handlePointer', "none"); // Disable pointer events during scroll
		mainNav.scrollBy({ left: scrollAmount, behavior: 'smooth' });

		// Re-enable pointer events and scrolling state after delay
		setTimeout(() => {
			root.style.setProperty('--handlePointer', "all");
			isScrolling = false;
		}, SCROLL_DELAY);
	}

	// Handle keyboard events for navigation
	function handleKeydown(e){
		if(isScrolling)return; // Prevent multiple rapid scrolls
		if(e.key==="ArrowLeft"||e.key==="ArrowRight"){
			e.preventDefault();
			let fn=(isMobile()? (e.key==="ArrowLeft"?scrollBackward:scrollForward):(e.key==="ArrowLeft"?scrollBackward:scrollForward));
			fn();
		}
	}
		
	// Scroll functions for different screen sizes and directions
	function scrollForward() { performScroll(document.querySelector('.card').offsetWidth - SCROLL_OFFSET); }
	function scrollBackward() { performScroll(-document.querySelector('.card').offsetWidth + SCROLL_OFFSET); }

	// Enhanced wheel event handler with improved device compatibility
	function handleWheelEvent(event) {
		event.preventDefault();
		if (isScrolling) return; // Prevent multiple rapid scrolls
		isScrolling = true;
		// Normalize wheel delta for better cross-browser/device compatibility
		let deltaY = event.deltaY;
		// Handle different wheel modes
		if (event.deltaMode === 1) { // DOM_DELTA_LINE
			deltaY *= 16; // Convert lines to pixels (approximate)
		} else if (event.deltaMode === 2) { // DOM_DELTA_PAGE
			deltaY *= window.innerHeight; // Convert pages to pixels
		}
		const threshold = 10; // Set minimum threshold to avoid tiny movements
		if (Math.abs(deltaY) < threshold) {
			isScrolling = false;
			return;
		}
		if (deltaY > 0) {
			scrollForward();
		} else {
			scrollBackward();
		}
	}
	// Add wheel event listener to main-nav when it's available
	function attachWheelListener() {
		if (mainNav) {
			mainNav.addEventListener("wheel", handleWheelEvent, { passive: false });
			// Track scroll position for resize handling
			//mainNav.addEventListener("scroll", trackScrollPosition);
		} else {
			setTimeout(attachWheelListener, 100); // Retry after a short delay if element not found
		}
	}

	// Toggle card visibility based on the selected tag
	function toggleTag(tag) {
		const tags = ['Branding', 'Coding', 'Print'];
		tags.forEach(t => {
			document.querySelectorAll('.' + t).forEach(el => {
				if (t === tag) {
					el.classList.toggle('active');
				} else {
					el.classList.toggle('hide');
				}
			});
		});
	}

	// Set stylesheet dynamically
	function setDynamicStyles() {
		root.style.setProperty('--vw', window.innerWidth);
		root.style.setProperty('--vh', window.innerHeight);
		
		// Set the margin-top for view_project based on card-b padding
		document.querySelectorAll('#view_project').forEach(el => {
			el.style.setProperty('margin-top', parseFloat(window.getComputedStyle(document.querySelector('.card-b')).paddingBottom) *.425 + 'px');
		});

		// Minor adjustment to `top` of body text when `h2` (sub header) is hidden
		document.querySelectorAll('h2 ~ p').forEach(el => {
			if (window.getComputedStyle(el).display === 'none') {
				el.style.setProperty('top', 'calc(0.33*var(--scale))');
			}
		});
 	}

// Text Clamping for body-text in cards
function updateTextOverflowClampingForAllCards() {
    if (isUpdatingTextClamping) {
        return;
    }
    isUpdatingTextClamping = true;
    
    document.querySelectorAll('.card').forEach(card => {
        const cardB = card.querySelector('.card-b');
        const bodyText = cardB ? cardB.querySelector('#body-text') : null;
        const projectTitle = cardB ? cardB.querySelector('h1.project-title') : null;
        const projectSub = cardB ? cardB.querySelector('h1.project-title ~ h2') : null;
        const tag = cardB ? cardB.querySelector('.card-b h4') : null;
        const viewProject = cardB ? cardB.querySelector('#view_project') : null;

        if (!cardB || !bodyText || !projectTitle || !projectSub || !tag || !viewProject) {
            return;
        }

        const cardId = card.id || card.dataset.cardId || Array.from(document.querySelectorAll('.card')).indexOf(card);
        
        function getChildOffset(child, prop, fallback = 0) {
            if (!child) return fallback;
            const styles = window.getComputedStyle(child);
            let val = styles[prop];
            if (val === undefined || val === null) val = child.style[prop];
            return parseFloat(val) || fallback;
        }

        alternateTagPosition = (document.querySelector('h4').style.left > 1 && window.matchMedia('(max-aspect-ratio: 1.05/1)').matches); 

        const bodyLineHeight = Math.round(getChildOffset(bodyText, 'lineHeight'));
        const bodyTextHeight = bodyText.scrollHeight;
        const bodyTotalLines = Math.floor(bodyTextHeight / bodyLineHeight);

        const titleLineHeight = getChildOffset(projectTitle, 'lineHeight');
        const titleHeight = projectTitle.scrollHeight;
        const titleLines = Math.floor(titleHeight / titleLineHeight);
        
        const tagHeight = getChildOffset(tag, 'height') + getChildOffset(tag, 'marginBottom');

        const baseOffset = [
            getChildOffset(cardB, 'paddingBottom'),
            getChildOffset(cardB, 'paddingTop'),
            getChildOffset(viewProject, 'height'),
            getChildOffset(projectTitle, 'lineHeight'),
            getChildOffset(projectSub, 'height'),
            getChildOffset(projectSub, 'top'),
            getChildOffset(viewProject, 'marginTop'),
        ].reduce((sum, val) => sum + (isNaN(val) ? 0 : val), 0);

        let bestScenario = null;
        const scenarios = [];
        if (alternateTagPosition) {
            scenarios.push(
                { tagHidden: true, bodyHidden: false },
                { tagHidden: true, bodyHidden: true }
            );
        } else {
            scenarios.push(
                { tagHidden: false, bodyHidden: false },
                { tagHidden: false, bodyHidden: true },
                { tagHidden: true, bodyHidden: false },
                { tagHidden: true, bodyHidden: true }
            );
        }

        for (const scenario of scenarios) {
            let currentTotalOffset = baseOffset;
            
            if (!scenario.tagHidden && !alternateTagPosition) {
                currentTotalOffset += tagHeight;
            }

            if (!scenario.bodyHidden) {
                currentTotalOffset += getChildOffset(bodyText, 'top');
            }

            const availableHeight = Math.round(cardB.offsetHeight - currentTotalOffset);
            const availableBodyLines = Math.floor(availableHeight / bodyLineHeight);

            const titleAvailableHeight = Math.round(availableHeight + titleLineHeight - (availableBodyLines > 0 ? bodyLineHeight : 0));
            const titleAvailableLines = Math.floor(titleAvailableHeight / titleLineHeight);
            const clampedTitleLines = Math.max(1, Math.min(titleAvailableLines, titleLines));

            const isValid = !scenario.bodyHidden ? availableBodyLines >= 1 : true;
            const titleFits = clampedTitleLines >= 1;

            if (isValid && titleFits) {
                bestScenario = {
                    ...scenario,
                    maxBodyTextLines: Math.max(0, Math.min(availableBodyLines, bodyTotalLines)),
                    maxTitleLines: clampedTitleLines,
                    maxPossibleBodyTextHeight: availableHeight,
                    maxPossibleTitleHeight: titleAvailableHeight,
                    suggestedMaxTitleLines: titleAvailableLines
                };
                break;
            }
        }

        if (!bestScenario) {
            bestScenario = {
                tagHidden: true,
                bodyHidden: true,
                maxBodyTextLines: 0,
                maxTitleLines: 1,
                maxPossibleBodyTextHeight: 0,
                maxPossibleTitleHeight: titleLineHeight,
                suggestedMaxTitleLines: 1
            };
        }

        let targetTagHidden = bestScenario.tagHidden;
        let targetBodyHidden = bestScenario.bodyHidden;
        let maxBodyTextLines = bestScenario.maxBodyTextLines;
        let maxTitleLines = bestScenario.maxTitleLines;

        const newTagDisplay = targetTagHidden ? "none" : "-webkit-box";
        const newBodyDisplay = targetBodyHidden ? "none" : "-webkit-box";
        
        if (tag.style.display !== newTagDisplay) tag.style.display = newTagDisplay;
        if (bodyText.style.display !== newBodyDisplay) bodyText.style.display = newBodyDisplay;

        maxBodyTextLines = Math.max(0, Math.min(maxBodyTextLines, bodyTotalLines));
        maxTitleLines = Math.max(1, Math.min(maxTitleLines, titleLines));

        let finalTitleLines = Math.max(1, Math.floor(maxTitleLines));
        let finalBodyLines = Math.max(0, Math.floor(maxBodyTextLines));
        let newWordBreakStyle = 'break-word';

        if (finalTitleLines > 2) { 
            const potentialNewTitleLines = finalTitleLines;
            const remainingSpaceForBodyIfTitleReduced = bestScenario.maxPossibleBodyTextHeight + (finalTitleLines - potentialNewTitleLines) * titleLineHeight;
            const potentialBodyLines = Math.floor(remainingSpaceForBodyIfTitleReduced / bodyLineHeight);

            if (potentialNewTitleLines >= 1 && potentialBodyLines >= 0) {
                finalTitleLines = potentialNewTitleLines;
                finalBodyLines = Math.max(0, Math.min(potentialBodyLines, bodyTotalLines));
            }
        }

        
        if (finalTitleLines < finalBodyLines && !targetBodyHidden) {
            const remainingHeight = bestScenario.maxPossibleBodyTextHeight + titleLineHeight - (finalTitleLines * titleLineHeight);
            const recalculatedBodyLines = Math.floor(remainingHeight / bodyLineHeight);
            finalBodyLines = Math.max(0, Math.min(recalculatedBodyLines, bodyTotalLines));
        }
        else if (finalBodyLines === finalTitleLines && finalBodyLines > 1) { // Prioritize the title display if the body and title have an equal number of lines 
			finalBodyLines = finalBodyLines - 1;
        }
                
        if (finalTitleLines > 2 && cardB.offsetWidth < 350) { // If there are more than two title lines (AND) available card width is less than 300px...
            newWordBreakStyle = 'break-all';
            if (finalTitleLines > finalBodyLines) {
                finalTitleLines = Math.floor(Math.max(1, (finalTitleLines - bodyTotalLines*.11)))
                finalBodyLines = Math.floor(Math.max(1, ((bestScenario.maxPossibleBodyTextHeight + titleLineHeight - (finalTitleLines*titleLineHeight)) / bodyLineHeight)))
            }
        }

        if (projectTitle.style.wordBreak !== newWordBreakStyle) {
            projectTitle.style.wordBreak = newWordBreakStyle;
        }
        
        const newTitleClamp = finalTitleLines.toString();
        const newBodyClamp = finalBodyLines.toString();
        
        if (finalTitleLines > 0 && !isNaN(finalTitleLines) && projectTitle.style.webkitLineClamp !== newTitleClamp) {
            projectTitle.style.webkitLineClamp = newTitleClamp;
        }
        
        if (finalBodyLines >= 1 && !isNaN(finalBodyLines) && !targetBodyHidden) {
            if (bodyText.style.webkitLineClamp !== newBodyClamp) {
                bodyText.style.webkitLineClamp = newBodyClamp;
            }
        } else if (targetBodyHidden && bodyText.style.display !== 'none') {
            bodyText.style.display = 'none';
        }

    });
    
    setTimeout(() => {
        isUpdatingTextClamping = false;
    }, 50);
}

	// Toggle functions for tags
	function toggletagbranding() { toggleTag('Branding'); }
	function toggletagcoding() { toggleTag('Coding'); }
	function toggletagprint() { toggleTag('Print'); }

	// Relative sizing function to adjust card layout based on window dimensions (1.05 ratio crossing / 1500px fixed width & 580px fixed height crossing)
    function relSizing() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        let classToAdd = "";
        let classToRemove = "";

        if (width < 1500) {
            if (ratio < 1.05) {
                classToAdd = "y";
                classToRemove = "x";
            } else {
                classToAdd = "x";
                classToRemove = "y";
            }
        } else {
            if (height >= 580) {
                classToAdd = "y";
                classToRemove = "x";
            } else {
                classToAdd = "x";
                classToRemove = "y";
            }
        }

        cards.forEach(card => {
            card.classList.remove(classToRemove);
            card.classList.add(classToAdd);
        });
    }

	// Handle window resize with position preservation
	function handleResize() {
		if (isResizing) return; // Prevent multiple rapid resize calls
		isResizing = true;
		requestAnimationFrame(() => {
			setDynamicStyles();
			updateSnapSettings();
			relSizing();
			// CRITICAL FIX: Only update text clamping if not already updating
			if (!isUpdatingTextClamping) {
				updateTextOverflowClampingForAllCards();
			}
			isResizing = false;
		});
	}

	// Debounce resize events for better performance
	function debouncedResize() {
		clearTimeout(resizeTimeout); // Clear previous timeout
		resizeTimeout = setTimeout(handleResize, 10); // Increased delay to 10ms for better stability
	}

	// ---- End of Functions ---- //

	// Event listeners

	// Add event listener for window resize
	window.addEventListener('resize', () => {
		debouncedResize();
	});
	
	window.addEventListener('orientationchange', () => {
	 debouncedResize();
	});
	
	window.addEventListener('keydown', handleKeydown);

	// ---- End of Event listeners ---- //

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initialize);
	} else {
		initialize();
	}
	attachWheelListener();
