/**
 * Gradient Path Figma Plugin
 * 
 * Creates multi-color gradient strokes along vector paths by breaking the path into
 * discrete segments and applying different solid colors to each segment.
 * 
 * Features:
 * - SVG path parsing and point sampling
 * - Color interpolation with transparency support
 * - Custom stroke caps and joins
 * - Intelligent gradient updates
 */

// Sets the initial size of the plugin window.
figma.showUI(__html__, { width: 258, height: 368 });

// --- Type Definitions ---

// Defines the structure for parsed SVG path segments.
type PathSegment =
    | { type: 'MOVE'; x: number; y: number }
    | { type: 'LINE'; x: number; y: number }
    | { type: 'CUBIC'; x1: number; y1: number; x2: number; y2: number; x: number; y: number }
    | { type: 'QUADRATIC'; x1: number; y1: number; x: number; y: number };

// Defines the structure for a gradient color stop.
type GradientStop = {
    position: number; // Percentage (0-100)
    color: string;    // Hex color string (e.g., "#RRGGBB")
    id: string;       // Unique identifier for the stop
    alpha?: number;   // Optional opacity (0-1, defaults to 1)
    isEndpoint?: boolean; // Optional flag for start/end stops
};

// --- Global State Variables ---

// Currently selected/active gradient group node
let currentGradientGroup: GroupNode | null = null;
// Initially selected source vector node
let sourceVector: VectorNode | null = null;
// Current set of gradient stops (cached from UI)
let currentStops: GradientStop[] = [];


// --- Color Conversion and Interpolation ---

/**
 * Converts a hex color string (#RGB or #RRGGBB) to an RGB object.
 * @param hex - The hex color string.
 * @returns RGB object with values normalized between 0 and 1. Defaults to black if invalid.
 */

function hexToRGB(hex: string): RGB {
    const defaultColor = "#000000";
    let hexColor = hex || defaultColor;
    hexColor = hexColor.replace('#', '');

    let r = 0, g = 0, b = 0;

    // Parse hex string (3 or 6 digits).
    if (hexColor.length === 3) {
        r = parseInt(hexColor[0] + hexColor[0], 16);
        g = parseInt(hexColor[1] + hexColor[1], 16);
        b = parseInt(hexColor[2] + hexColor[2], 16);
    } else if (hexColor.length === 6) {
        r = parseInt(hexColor.substring(0, 2), 16);
        g = parseInt(hexColor.substring(2, 4), 16);
        b = parseInt(hexColor.substring(4, 6), 16);
    }
    // Return normalized RGB values (0-1), clamped.
    return {
        r: Math.min(1, Math.max(0, r / 255)),
        g: Math.min(1, Math.max(0, g / 255)),
        b: Math.min(1, Math.max(0, b / 255))
     };
}

/**
 * Converts an alpha value (0-1) to a grayscale RGB object (0-1).
 * This is used for the luminance mask layer.
 * @param alpha - The alpha value (0-1).
 * @returns RGB object representing the grayscale value (r=g=b=alpha).
 */

function alphaToGrayscaleRGB(alpha: number): RGB {
    // Clamp alpha between 0 and 1
    const clampedAlpha = Math.min(1, Math.max(0, alpha));
    // Grayscale value is the same for R, G, B
    return { r: clampedAlpha, g: clampedAlpha, b: clampedAlpha };
}


/**
 * Interpolates between two RGB colors with alpha values.
 * @param color1 - Start color hex string.
 * @param color2 - End color hex string.
 * @param factor - Interpolation factor (0 = color1, 1 = color2).
 * @param alpha1 - Start color alpha (0-1).
 * @param alpha2 - End color alpha (0-1).
 * @returns Interpolated RGBA color object (values 0-1).
 */

function interpolateColor(
    color1: string,
    color2: string,
    factor: number,
    alpha1: number = 1, // Default alpha to 1 (opaque) if not provided
    alpha2: number = 1  // Default alpha to 1 (opaque) if not provided
): { r: number; g: number; b: number; a: number } {
    const rgb1 = hexToRGB(color1);
    const rgb2 = hexToRGB(color2);

    // Linear interpolation for each color channel and alpha.
    return {
        r: rgb1.r + (rgb2.r - rgb1.r) * factor,
        g: rgb1.g + (rgb2.g - rgb1.g) * factor,
        b: rgb1.b + (rgb2.b - rgb1.b) * factor,
        a: alpha1 + (alpha2 - alpha1) * factor,
    };
}

// --- Path Geometry Calculations ---

/**
 * Calculates the Euclidean distance between two points.
 * @param p1 - First point {x, y}.
 * @param p2 - Second point {x, y}.
 * @returns The distance.
 */

function calculateDistance(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

/**
 * Calculates a point on a Bezier curve (cubic or quadratic) at parameter t.
 * @param t - Parameter value (0 to 1).
 * @param P0 - Start point.
 * @param P1 - First control point.
 * @param P2 - Second control point (for cubic) or end point (for quadratic).
 * @param P3 - End point (for cubic). Optional.
 * @returns The calculated point {x, y}.
 */

function calculateBezierPoint(
    t: number,
    P0: { x: number; y: number },
    P1: { x: number; y: number },
    P2: { x: number; y: number },
    P3?: { x: number; y: number } // P3 is optional for quadratic
): { x: number; y: number } {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;

    if (P3) { // Cubic Bezier
        const uuu = uu * u;
        const ttt = tt * t;
        const x = uuu * P0.x + 3 * uu * t * P1.x + 3 * u * tt * P2.x + ttt * P3.x;
        const y = uuu * P0.y + 3 * uu * t * P1.y + 3 * u * tt * P2.y + ttt * P3.y;
        return { x, y };
    } else { // Quadratic Bezier
        const x = uu * P0.x + 2 * u * t * P1.x + tt * P2.x;
        const y = uu * P0.y + 2 * u * t * P1.y + tt * P2.y;
        return { x, y };
    }
}

/**
 * Approximates the length of a Bezier curve by summing lengths of small line segments.
 * @param P0 - Start point.
 * @param P1 - First control point.
 * @param P2 - Second control point (for cubic) or end point (for quadratic).
 * @param P3 - End point (for cubic). Optional.
 * @returns The approximate length of the curve.
 */

function approximateBezierLength(
    P0: { x: number; y: number },
    P1: { x: number; y: number },
    P2: { x: number; y: number },
    P3?: { x: number; y: number } // P3 optional
): number {
    let length = 0;
    let prevPoint = P0;
    const steps = 100; // Number of segments for approximation. More steps = more accuracy, less performance.
    for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        // Pass P3 only if it exists (for cubic curves).
        const point = calculateBezierPoint(t, P0, P1, P2, P3);
        length += calculateDistance(prevPoint, point);
        prevPoint = point;
    }
    return length;
}

// --- Path Data Parsing ---

/**
 * Parses an SVG path data string into an array of PathSegment objects.
 * Handles M, m, L, l, H, h, V, v, C, c, Q, q, Z, z commands.
 * Does not handle Arcs (A, a) or Smooth curves (S, s, T, t).
 * @param data - The SVG path data string (e.g., "M10 10 L 20 20 C 30 30, 40 40, 50 50 Z").
 * @returns An array of PathSegment objects representing the path.
 */

function parsePathData(data: string): PathSegment[] {
    const segments: PathSegment[] = [];
    // Regex to split path data into commands and their arguments.
    const commands = data.match(/[MLHVCSQTAZmlhvcsqtaz][^MLHVCSQTAZmlhvcsqtaz]*/g) || [];
    let currentX = 0;
    let currentY = 0;
    let startX = 0; // Track the start of the current subpath for 'Z' command.
    let startY = 0;

    for (const cmd of commands) {
        const type = cmd[0];
        const argsStr = cmd.slice(1).trim();
        // Parse arguments, filtering out potential NaNs.
        const args = argsStr ? argsStr.split(/[\s,]+/).map(parseFloat).filter(n => !isNaN(n)) : [];

        switch (type) {
            // --- Move Commands ---
            case 'M': // moveto (absolute)
                currentX = args[0];
                currentY = args[1];
                startX = currentX; // Update subpath start point.
                startY = currentY;
                segments.push({ type: 'MOVE', x: currentX, y: currentY });
                // Handle implicit Lineto commands if more args are provided.
                for (let i = 2; i < args.length; i += 2) {
                    currentX = args[i];
                    currentY = args[i + 1];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;
            case 'm': // moveto (relative)
                currentX += args[0];
                currentY += args[1];
                startX = currentX; // Update subpath start point.
                startY = currentY;
                segments.push({ type: 'MOVE', x: currentX, y: currentY });
                 // Handle implicit Lineto commands.
                 for (let i = 2; i < args.length; i += 2) {
                    currentX += args[i];
                    currentY += args[i + 1];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;

            // --- Line Commands ---
            case 'L': // lineto (absolute)
                for (let i = 0; i < args.length; i += 2) {
                    currentX = args[i];
                    currentY = args[i + 1];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;
            case 'l': // lineto (relative)
                for (let i = 0; i < args.length; i += 2) {
                    currentX += args[i];
                    currentY += args[i + 1];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;
            case 'H': // horizontal lineto (absolute)
                for (let i = 0; i < args.length; i++) {
                    currentX = args[i];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;
            case 'h': // horizontal lineto (relative)
                for (let i = 0; i < args.length; i++) {
                    currentX += args[i];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;
            case 'V': // vertical lineto (absolute)
                for (let i = 0; i < args.length; i++) {
                    currentY = args[i];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;
            case 'v': // vertical lineto (relative)
                for (let i = 0; i < args.length; i++) {
                    currentY += args[i];
                    segments.push({ type: 'LINE', x: currentX, y: currentY });
                }
                break;

            // --- Cubic Bezier Commands ---
            case 'C': // cubic bezier (absolute)
                 for (let i = 0; i < args.length; i += 6) {
                    const x1 = args[i], y1 = args[i + 1];
                    const x2 = args[i + 2], y2 = args[i + 3];
                    const x = args[i + 4], y = args[i + 5];
                    segments.push({ type: 'CUBIC', x1, y1, x2, y2, x, y });
                    currentX = x; currentY = y;
                }
                break;
            case 'c': // cubic bezier (relative)
                for (let i = 0; i < args.length; i += 6) {
                    const x1 = currentX + args[i], y1 = currentY + args[i + 1];
                    const x2 = currentX + args[i + 2], y2 = currentY + args[i + 3];
                    const x = currentX + args[i + 4], y = currentY + args[i + 5];
                    segments.push({ type: 'CUBIC', x1, y1, x2, y2, x, y });
                    currentX = x; currentY = y;
                }
                break;

             // --- Quadratic Bezier Commands ---
             case 'Q': // quadratic bezier (absolute)
                 for (let i = 0; i < args.length; i += 4) {
                    const x1 = args[i], y1 = args[i + 1];
                    const x = args[i + 2], y = args[i + 3];
                    segments.push({ type: 'QUADRATIC', x1, y1, x, y });
                    currentX = x; currentY = y;
                }
                break;
            case 'q': // quadratic bezier (relative)
                for (let i = 0; i < args.length; i += 4) {
                    const x1 = currentX + args[i], y1 = currentY + args[i + 1];
                    const x = currentX + args[i + 2], y = currentY + args[i + 3];
                    segments.push({ type: 'QUADRATIC', x1, y1, x, y });
                    currentX = x; currentY = y;
                }
                break;

             // --- Close Path Command ---
             case 'Z': // closepath (absolute)
             case 'z': // closepath (relative)
                // Draw a line back to the start of the current subpath if not already there.
                if (currentX !== startX || currentY !== startY) {
                    segments.push({ type: 'LINE', x: startX, y: startY });
                    currentX = startX;
                    currentY = startY;
                }
                break;

            // --- Unsupported Commands ---
            // Arcs (A, a) and Smooth curves (S, s, T, t) require complex conversion.
            default:
                console.warn(`Unsupported SVG path command: ${type}`);
        }
    }
    return segments;
}


// --- Path Sampling and Gradient Application ---

/**
 * Samples points along the parsed path segments to create a list of points.
 * Uses dynamic sampling density based on segment length for better distribution.
 * @param vectorPaths - Array of VectorPath objects from a Figma node.
 * @param samplesPerSegment - Base number of samples per segment (adjusted dynamically).
 * @returns Object containing an array of sampled points and the total calculated path length.
 */

function getPointsAlongPath(
    vectorPaths: ReadonlyArray<VectorPath>,
    samplesPerSegment: number
): { points: { x: number; y: number }[]; totalLength: number; } {
    const points: { x: number; y: number }[] = [];
    let totalLength = 0;

    for (const vectorPath of vectorPaths) {
        // Parse the SVG data string for this specific path object.
        const parsedSegments = parsePathData(vectorPath.data);
        if (parsedSegments.length === 0) continue; // Skip if path is empty.

        let currentPoint = { x: 0, y: 0 }; // Initialize origin for calculations.

        for (let i = 0; i < parsedSegments.length; i++) {
            const segment = parsedSegments[i];

            if (segment.type === 'MOVE') {
                 currentPoint = { x: segment.x, y: segment.y };
                 // Add the move point only if it's the very first point of the path.
                 if (points.length === 0) {
                     points.push({...currentPoint}); // Use spread to create a copy.
                 }
            } else if (segment.type === 'LINE') {
                const endPoint = { x: segment.x, y: segment.y };
                const segmentLength = calculateDistance(currentPoint, endPoint);
                 // Add start point of the line if it wasn't the last point added.
                 if (points.length === 0 || points[points.length - 1].x !== currentPoint.x || points[points.length - 1].y !== currentPoint.y) {
                    points.push({...currentPoint});
                 }
                 // Calculate number of samples based on segment length relative to total length estimate.
                 const numSamples = Math.max(1, Math.ceil(segmentLength / (totalLength / samplesPerSegment || 5)));
                // Add intermediate points along the line.
                for (let j = 1; j <= numSamples; j++) {
                    const t = j / numSamples;
                    const x = currentPoint.x + (endPoint.x - currentPoint.x) * t;
                    const y = currentPoint.y + (endPoint.y - currentPoint.y) * t;
                    points.push({ x, y });
                }
                totalLength += segmentLength;
                currentPoint = endPoint; // Update current point for the next segment.
            } else if (segment.type === 'CUBIC') {
                const P0 = currentPoint;
                const P1 = { x: segment.x1, y: segment.y1 };
                const P2 = { x: segment.x2, y: segment.y2 };
                const P3 = { x: segment.x, y: segment.y };
                const curveLength = approximateBezierLength(P0, P1, P2, P3);
                 // Add start point if needed.
                 if (points.length === 0 || points[points.length - 1].x !== P0.x || points[points.length - 1].y !== P0.y) {
                    points.push({...P0});
                 }
                 // Dynamic sampling for curves.
                 const numSamples = Math.max(samplesPerSegment, Math.ceil(curveLength / (totalLength / samplesPerSegment || 5)));
                // Sample points along the cubic curve.
                for (let j = 1; j <= numSamples; j++) {
                    const t = j / numSamples;
                    const point = calculateBezierPoint(t, P0, P1, P2, P3);
                    points.push(point);
                }
                totalLength += curveLength;
                currentPoint = P3; // Update current point.
            } else if (segment.type === 'QUADRATIC') {
                const P0 = currentPoint;
                const P1 = { x: segment.x1, y: segment.y1 };
                const P2 = { x: segment.x, y: segment.y };
                 const curveLength = approximateBezierLength(P0, P1, P2);
                 // Add start point if needed.
                 if (points.length === 0 || points[points.length - 1].x !== P0.x || points[points.length - 1].y !== P0.y) {
                    points.push({...P0});
                 }
                 // Dynamic sampling for curves.
                 const numSamples = Math.max(samplesPerSegment, Math.ceil(curveLength / (totalLength / samplesPerSegment || 5)));
                // Sample points along the quadratic curve.
                for (let j = 1; j <= numSamples; j++) {
                    const t = j / numSamples;
                    const point = calculateBezierPoint(t, P0, P1, P2);
                    points.push(point);
                }
                totalLength += curveLength;
                currentPoint = P2; // Update current point.
            }
        }
    }
     // Remove consecutive duplicate points that might arise from sampling.
     const uniquePoints = points.filter((point, index, arr) => {
        if (index === 0) return true; // Always keep the first point.
        // Keep point if it's different from the previous one.
        return point.x !== arr[index - 1].x || point.y !== arr[index - 1].y;
    });

    return { points: uniquePoints, totalLength };
}

/**
 * Gets the interpolated color at a specific distance along the path based on gradient stops.
 * @param distance - The distance along the path.
 * @param totalLength - The total length of the path.
 * @param stops - Array of GradientStop objects defining the gradient.
 * @returns The calculated RGBA color object (values 0-1).
 */

function getColorAtDistance(
    distance: number,
    totalLength: number,
    stops: GradientStop[]
): { r: number; g: number; b: number; a: number } {
    // Ensure stops are sorted by position for correct interpolation.
    const sortedStops = [...stops].sort((a, b) => a.position - b.position);

    if (sortedStops.length === 0) return { r: 0, g: 0, b: 0, a: 1 }; // Default to black if no stops.
    if (sortedStops.length === 1) {
        const rgb = hexToRGB(sortedStops[0].color);
        // Use alpha if defined, otherwise default to 1 (opaque).
        return { ...rgb, a: sortedStops[0].alpha !== undefined ? sortedStops[0].alpha : 1 };
    }

    // Normalize distance to a percentage position (0-100).
    const normalizedPosition = totalLength > 0 ? (distance / totalLength) * 100 : 0;

    // Find the stops surrounding the normalized position.
    let startStop = sortedStops[0];
    let endStop = sortedStops[sortedStops.length - 1];

    // Handle cases where the position is before the first stop or after the last stop.
    if (normalizedPosition <= startStop.position) {
        const rgb = hexToRGB(startStop.color);
        return { ...rgb, a: startStop.alpha !== undefined ? startStop.alpha : 1 };
    }
    if (normalizedPosition >= endStop.position) {
        const rgb = hexToRGB(endStop.color);
        return { ...rgb, a: endStop.alpha !== undefined ? endStop.alpha : 1 };
    }

    // Find the two stops the position falls between.
    for (let i = 0; i < sortedStops.length - 1; i++) {
        if (sortedStops[i].position <= normalizedPosition && sortedStops[i + 1].position >= normalizedPosition) {
            startStop = sortedStops[i];
            endStop = sortedStops[i + 1];
            break;
        }
    }

    // Calculate interpolation factor between the start and end stops.
    const stopDistance = endStop.position - startStop.position;
    // If stops are at the same position, return the color of the end stop found.
    if (stopDistance <= 0) {
        const rgb = hexToRGB(endStop.color);
        return { ...rgb, a: endStop.alpha !== undefined ? endStop.alpha : 1 };
    }

    const factor = (normalizedPosition - startStop.position) / stopDistance;
    // Get alpha values, defaulting to 1 if not defined
    const startAlpha = startStop.alpha !== undefined ? startStop.alpha : 1;
    const endAlpha = endStop.alpha !== undefined ? endStop.alpha : 1;

    // Interpolate the color with alpha.
    return interpolateColor(startStop.color, endStop.color, factor, startAlpha, endAlpha);
}

// --- Main Gradient Path Creation ---

/**
 * Checks if all gradient stops are fully opaque (alpha = 1).
 * @param stops - Array of GradientStop objects.
 * @returns Boolean indicating if all stops are fully opaque.
 */

function areAllStopsOpaque(stops: GradientStop[]): boolean {
    return stops.every(stop => stop.alpha === undefined || stop.alpha === 1);
}

/**
 * Creates arrays of VectorNode segments for both color and mask layers.
 * Each segment is a short line. Color layer uses opaque gradient color.
 * Mask layer uses grayscale representing the gradient alpha (for luminance masking).
 * Applies the specified start and end caps to the first and last segments of *both* layers.
 * @param points - Array of points sampled along the path.
 * @param totalLength - Total length of the path.
 * @param stops - Array of GradientStop objects.
 * @param strokeWeight - The desired stroke weight for the segments.
 * @param startCap - Stroke cap style for the start of the path.
 * @param endCap - Stroke cap style for the end of the path.
 * @param strokeJoin - Stroke join style for connecting segments (visually).
 * @returns An object containing arrays of VectorNode objects for color and mask layers.
 */

async function createGradientPath(
    points: { x: number; y: number }[],
    totalLength: number,
    stops: GradientStop[],
    strokeWeight: number,
    startCap: StrokeCap,
    endCap: StrokeCap,
    strokeJoin: StrokeJoin
): Promise<{ colorSegments: VectorNode[], maskSegments: VectorNode[] }> {
    // Need at least two points to draw a line.
    if (points.length < 2) return { colorSegments: [], maskSegments: [] };

    const colorSegments: VectorNode[] = [];
    const maskSegments: VectorNode[] = [];
    let cumulativeDistance = 0;
    
    // Check if we need transparency handling
    const isFullyOpaque = areAllStopsOpaque(stops);

    // Handle very short paths (treat as a single line segment).
    if (points.length < 3) {
        const startPoint = points[0];
        const endPoint = points[points.length-1];
        const pathData = `M ${startPoint.x.toFixed(3)} ${startPoint.y.toFixed(3)} L ${endPoint.x.toFixed(3)} ${endPoint.y.toFixed(3)}`;

        // Use color at the midpoint for the single segment.
        const colorWithAlpha = getColorAtDistance(totalLength / 2, totalLength, stops);
        const { r, g, b, a } = colorWithAlpha;

        // Create Color Segment
        const colorSegment = figma.createVector();
        colorSegment.vectorPaths = [{ windingRule: 'NONZERO', data: pathData }];
        colorSegment.strokeWeight = strokeWeight;
        colorSegment.strokeCap = startCap; // Apply start cap directly
        colorSegment.strokeJoin = strokeJoin;
        
        if (isFullyOpaque) {
            // For opaque gradients, just use the color directly with full opacity
            colorSegment.strokes = [{ type: 'SOLID', color: { r, g, b }, opacity: 1 }];
        } else {
            // For transparent gradients, use the alpha value directly on the color segment
            colorSegment.strokes = [{ type: 'SOLID', color: { r, g, b }, opacity: a }];
        }
        
        colorSegment.fills = [];
        colorSegments.push(colorSegment);

        // Only create mask segment if we need transparency and using the luminance mask approach
        if (!isFullyOpaque) {
            // Create grayscale color based on alpha for the luminance mask
            const maskColor = alphaToGrayscaleRGB(a);
            
            const maskSegment = figma.createVector();
            maskSegment.vectorPaths = [{ windingRule: 'NONZERO', data: pathData }];
            maskSegment.strokeWeight = strokeWeight;
            maskSegment.strokeCap = startCap; // Apply start cap directly
            maskSegment.strokeJoin = strokeJoin;
            maskSegment.strokes = [{ type: 'SOLID', color: maskColor, opacity: 1 }]; // Grayscale mask color
            maskSegment.fills = [];
            maskSegments.push(maskSegment);
        }

        // Apply end cap via vector network modification if different from start cap
        if (startCap !== endCap) {
            const colorNetwork = JSON.parse(JSON.stringify(colorSegment.vectorNetwork));
            if (colorNetwork.vertices.length > 1) {
                 // Apply end cap to the second vertex (index 1)
                 colorNetwork.vertices[1].strokeCap = endCap;
                 await colorSegment.setVectorNetworkAsync(colorNetwork);
                 
                 // Only apply to mask if it exists
                 if (maskSegments.length > 0) {
                     const maskNetwork = JSON.parse(JSON.stringify(maskSegments[0].vectorNetwork));
                     maskNetwork.vertices[1].strokeCap = endCap;
                     await maskSegments[0].setVectorNetworkAsync(maskNetwork);
                 }
            }
        }

        return { colorSegments, maskSegments };
    }

    // Iterate through the points to create line segments between them.
    for (let i = 1; i < points.length; i++) {
        const startPoint = points[i - 1];
        const endPoint = points[i];
        const segmentLength = calculateDistance(startPoint, endPoint);

        // Skip creating segments with negligible length.
        if (segmentLength < 0.001) continue;

        // Calculate the midpoint distance of the segment for color sampling.
        const segmentMidDistance = cumulativeDistance + segmentLength / 2;
        const colorWithAlpha = getColorAtDistance(segmentMidDistance, totalLength, stops);

        // Ensure color values are valid (clamped 0-1).
        const safeColor = {
            r: Math.min(1, Math.max(0, colorWithAlpha.r)),
            g: Math.min(1, Math.max(0, colorWithAlpha.g)),
            b: Math.min(1, Math.max(0, colorWithAlpha.b)),
            a: Math.min(1, Math.max(0, colorWithAlpha.a))
        };

        const pathData = `M ${startPoint.x.toFixed(3)} ${startPoint.y.toFixed(3)} L ${endPoint.x.toFixed(3)} ${endPoint.y.toFixed(3)}`;

        // Create Color Segment
        const colorSegment = figma.createVector();
        colorSegment.vectorPaths = [{ windingRule: 'NONZERO', data: pathData }];
        colorSegment.strokeWeight = strokeWeight;
        colorSegment.strokeCap = 'ROUND'; // Default internal cap for smooth joins
        colorSegment.strokeJoin = strokeJoin;
        
        if (isFullyOpaque) {
            // For opaque gradients, just use the color directly
            colorSegment.strokes = [{ type: 'SOLID', color: { r: safeColor.r, g: safeColor.g, b: safeColor.b }, opacity: 1 }];
        } else {
            // For transparent gradients, use the alpha value directly on the color segment
            colorSegment.strokes = [{ type: 'SOLID', color: { r: safeColor.r, g: safeColor.g, b: safeColor.b }, opacity: safeColor.a }];
        }
        
        colorSegment.fills = [];
        colorSegments.push(colorSegment);

        // Only create mask segment if we need transparency and using the luminance mask approach
        if (!isFullyOpaque) {
            // Create grayscale color based on alpha for the luminance mask
            const maskColor = alphaToGrayscaleRGB(safeColor.a);
            
            const maskSegment = figma.createVector();
            maskSegment.vectorPaths = [{ windingRule: 'NONZERO', data: pathData }];
            maskSegment.strokeWeight = strokeWeight;
            maskSegment.strokeCap = 'ROUND'; // Default internal cap
            maskSegment.strokeJoin = strokeJoin;
            maskSegment.strokes = [{ type: 'SOLID', color: maskColor, opacity: 1 }]; // Grayscale mask color
            maskSegment.fills = [];
            maskSegments.push(maskSegment);
        }

        cumulativeDistance += segmentLength; // Update cumulative distance.
    }

    // Apply the specified start and end caps to the first/last segments
    if (colorSegments.length > 0) {
        const firstColorSegment = colorSegments[0];
        const lastColorSegment = colorSegments[colorSegments.length - 1];
        
        // First handle the color segments
        try {
            // --- Start Cap ---
            const firstColorNetwork = JSON.parse(JSON.stringify(firstColorSegment.vectorNetwork));

            if (firstColorNetwork.vertices && firstColorNetwork.vertices.length > 0) {
                // Determine the actual start vertex based on M command coordinates
                const firstPath = firstColorSegment.vectorPaths[0].data;
                const matches = firstPath.match(/M\s+([\d.-]+)\s+([\d.-]+)/);
                let startVertexIndex = 0; // Default assumption: first vertex is start
                if (matches && matches.length >= 3) {
                    const startX = parseFloat(matches[1]);
                    const startY = parseFloat(matches[2]);
                    // Find the vertex matching the M command's coordinates
                    const foundIndex = firstColorNetwork.vertices.findIndex((v: { x: number; y: number; }) =>
                        Math.abs(v.x - startX) < 0.001 && Math.abs(v.y - startY) < 0.001);
                    if (foundIndex !== -1) startVertexIndex = foundIndex;
                }
                const otherVertexIndex = startVertexIndex === 0 ? 1 : 0; // The other vertex in the segment

                // Apply start cap to the correct vertex, keep the other vertex ROUND
                firstColorNetwork.vertices[startVertexIndex].strokeCap = startCap;
                if (firstColorNetwork.vertices.length > 1) { // Ensure there is another vertex
                     firstColorNetwork.vertices[otherVertexIndex].strokeCap = "ROUND";
                }

                await firstColorSegment.setVectorNetworkAsync(firstColorNetwork);
            }

            // --- End Cap ---
            const lastColorNetwork = JSON.parse(JSON.stringify(lastColorSegment.vectorNetwork));

            if (lastColorNetwork.vertices && lastColorNetwork.vertices.length > 1) {
                 // Determine the actual end vertex based on L command coordinates
                 const lastPath = lastColorSegment.vectorPaths[0].data;
                 const lineMatch = lastPath.match(/L\s+([\d.-]+)\s+([\d.-]+)/);
                 let endVertexIndex = lastColorNetwork.vertices.length - 1; // Default assumption: last vertex is end
                 if (lineMatch && lineMatch.length >= 3) {
                     const endX = parseFloat(lineMatch[1]);
                     const endY = parseFloat(lineMatch[2]);
                      // Find the vertex matching the L command's coordinates
                     const foundIndex = lastColorNetwork.vertices.findIndex((v: { x: number; y: number; }) =>
                         Math.abs(v.x - endX) < 0.001 && Math.abs(v.y - endY) < 0.001);
                     if (foundIndex !== -1) endVertexIndex = foundIndex;
                 }
                 const otherVertexIndex = endVertexIndex === 0 ? 1 : 0; // The other vertex in the segment

                 // Apply end cap to the correct vertex, keep the other vertex ROUND
                 lastColorNetwork.vertices[otherVertexIndex].strokeCap = "ROUND";
                 lastColorNetwork.vertices[endVertexIndex].strokeCap = endCap;

                 await lastColorSegment.setVectorNetworkAsync(lastColorNetwork);
            }
        } catch (e) {
            console.error("Error applying caps via vector network:", e);
            // Fallback: Apply caps directly to segment nodes if network modification fails
            firstColorSegment.strokeCap = startCap;
            lastColorSegment.strokeCap = endCap;
        }
        
        // Now handle mask segments if they exist
        if (maskSegments.length > 0) {
            const firstMaskSegment = maskSegments[0];
            const lastMaskSegment = maskSegments[maskSegments.length - 1];
            
            try {
                // --- Start Cap for Mask ---
                const firstMaskNetwork = JSON.parse(JSON.stringify(firstMaskSegment.vectorNetwork));
                
                if (firstMaskNetwork.vertices && firstMaskNetwork.vertices.length > 0) {
                    // Similar logic as for color segment
                    const firstPath = firstMaskSegment.vectorPaths[0].data;
                    const matches = firstPath.match(/M\s+([\d.-]+)\s+([\d.-]+)/);
                    let startVertexIndex = 0;
                    if (matches && matches.length >= 3) {
                        const startX = parseFloat(matches[1]);
                        const startY = parseFloat(matches[2]);
                        const foundIndex = firstMaskNetwork.vertices.findIndex((v: { x: number; y: number; }) =>
                            Math.abs(v.x - startX) < 0.001 && Math.abs(v.y - startY) < 0.001);
                        if (foundIndex !== -1) startVertexIndex = foundIndex;
                    }
                    const otherVertexIndex = startVertexIndex === 0 ? 1 : 0;
                    
                    firstMaskNetwork.vertices[startVertexIndex].strokeCap = startCap;
                    if (firstMaskNetwork.vertices.length > 1) {
                        firstMaskNetwork.vertices[otherVertexIndex].strokeCap = "ROUND";
                    }
                    
                    await firstMaskSegment.setVectorNetworkAsync(firstMaskNetwork);
                }
                
                // --- End Cap for Mask ---
                const lastMaskNetwork = JSON.parse(JSON.stringify(lastMaskSegment.vectorNetwork));
                
                if (lastMaskNetwork.vertices && lastMaskNetwork.vertices.length > 1) {
                    const lastPath = lastMaskSegment.vectorPaths[0].data;
                    const lineMatch = lastPath.match(/L\s+([\d.-]+)\s+([\d.-]+)/);
                    let endVertexIndex = lastMaskNetwork.vertices.length - 1;
                    if (lineMatch && lineMatch.length >= 3) {
                        const endX = parseFloat(lineMatch[1]);
                        const endY = parseFloat(lineMatch[2]);
                        const foundIndex = lastMaskNetwork.vertices.findIndex((v: { x: number; y: number; }) =>
                            Math.abs(v.x - endX) < 0.001 && Math.abs(v.y - endY) < 0.001);
                        if (foundIndex !== -1) endVertexIndex = foundIndex;
                    }
                    const otherVertexIndex = endVertexIndex === 0 ? 1 : 0;
                    
                    lastMaskNetwork.vertices[otherVertexIndex].strokeCap = "ROUND";
                    lastMaskNetwork.vertices[endVertexIndex].strokeCap = endCap;
                    
                    await lastMaskSegment.setVectorNetworkAsync(lastMaskNetwork);
                }
            } catch (e) {
                console.error("Error applying caps to mask via vector network:", e);
                // Fallback
                firstMaskSegment.strokeCap = startCap;
                lastMaskSegment.strokeCap = endCap;
            }
        }
    }

    return { colorSegments, maskSegments };
}


// --- Main Apply Function ---

/**
 * Applies the gradient to the selected vector or updates an existing gradient group
 * using a luminance mask for transparency.
 * @param stops - Array of GradientStop objects.
 * @param strokeWeight - Stroke weight for the gradient path.
 * @param startCap - Stroke cap for the start of the path.
 * @param endCap - Stroke cap for the end of the path.
 * @param strokeJoin - Stroke join style.
 */
async function applyGradient(stops: GradientStop[], strokeWeight: number, startCap: StrokeCap, endCap: StrokeCap, strokeJoin: StrokeJoin): Promise<void> {
    // Determine the target node and source path data.
    let vectorPaths: ReadonlyArray<VectorPath> | null = null;
    let vectorPosition = { x: 0, y: 0 };
    let parentFrame: BaseNode & ChildrenMixin = figma.currentPage;
    let isUpdate = false; // Flag to indicate if we are updating an existing group
    
    // Check if all stops are fully opaque
    const isFullyOpaque = areAllStopsOpaque(stops);
    console.log(`Gradient is ${isFullyOpaque ? 'fully opaque' : 'has transparency'}`);

    // Same selection logic as before...
    if (currentGradientGroup && currentGradientGroup.children && currentGradientGroup.children.length > 0) {
        // Find the first suitable vector node within the group or its subgroups
        let templateVector: VectorNode | null = null;
        const findVectorRecursive = (node: SceneNode): VectorNode | null => {
            if (node.type === 'VECTOR') return node;
            if ('children' in node) {
                for (const child of node.children) {
                    const found = findVectorRecursive(child);
                    if (found) return found;
                }
            }
            return null;
        };
        templateVector = findVectorRecursive(currentGradientGroup);

        if (templateVector) {
            vectorPaths = templateVector.vectorPaths;
            vectorPosition = { x: currentGradientGroup.x, y: currentGradientGroup.y };
            if (currentGradientGroup.parent && 'children' in currentGradientGroup.parent) {
                parentFrame = currentGradientGroup.parent as BaseNode & ChildrenMixin;
            }
            console.log("Updating existing gradient group. Using template vector:", templateVector.name);
            isUpdate = true;
        } else {
            console.warn("Could not find a template vector within the selected group.");
            if (!sourceVector) {
                figma.notify('Could not find path data in the selected group. Select the original path or a valid group.');
                return;
            }
            vectorPaths = sourceVector.vectorPaths;
            vectorPosition = { x: sourceVector.x, y: sourceVector.y };
            if (sourceVector.parent && 'children' in sourceVector.parent) {
                parentFrame = sourceVector.parent as BaseNode & ChildrenMixin;
            }
            console.log("Applying gradient to source vector (fallback):", sourceVector.name);
            isUpdate = false;
        }
    }
    else if (sourceVector) {
        vectorPaths = sourceVector.vectorPaths;
        vectorPosition = { x: sourceVector.x, y: sourceVector.y };
        if (sourceVector.parent && 'children' in sourceVector.parent) {
            parentFrame = sourceVector.parent as BaseNode & ChildrenMixin;
        }
        console.log("Applying gradient to source vector:", sourceVector.name);
        isUpdate = false;
    }

    // Final check if we have path data
    if (!vectorPaths || vectorPaths.length === 0 || !vectorPaths[0].data) {
        figma.notify('No valid path data found. Please select a vector path or a previously created gradient group.');
        return;
    }

    // --- Perform Gradient Creation ---
    try {
        const samplingDensity = 50;
        const { points, totalLength } = getPointsAlongPath(vectorPaths, samplingDensity);

        if (points.length < 2) {
            figma.notify('Not enough points generated from path data. Check path complexity.');
            return;
        }

        // Create the color and mask segment nodes.
        const { colorSegments, maskSegments } = await createGradientPath(
            points, totalLength, stops, strokeWeight, startCap, endCap, strokeJoin
        );

        if (colorSegments.length === 0) {
            figma.notify('No valid segments were created. Check path data and parameters.');
            return;
        }

        // --- Update Figma Scene ---
        if (isUpdate && currentGradientGroup) {
            // --- Update Existing Group ---
            console.log(`Updating group ${currentGradientGroup.id}. Removing old children...`);

            // Remove all existing children from the group.
            const numChildren = currentGradientGroup.children.length;
            for (let i = numChildren - 1; i >= 0; i--) {
                currentGradientGroup.children[i].remove();
            }
            console.log("Old children removed.");

            if (isFullyOpaque) {
                // For fully opaque gradients, just add the color segments to the group
                // No need for a nested group structure or mask layer
                for (const segment of colorSegments) {
                    currentGradientGroup.appendChild(segment);
                }
                currentGradientGroup.name = 'Gradient Path';
                console.log("Opaque gradient: Added color segments directly to group.");
            } else {
                // For transparent gradients, use the traditional color + mask approach
                const colorGroup = figma.group(colorSegments, currentGradientGroup);
                colorGroup.name = "Color Layer";
                const maskGroup = figma.group(maskSegments, currentGradientGroup);
                maskGroup.name = "Mask Layer";
                maskGroup.isMask = true;
                maskGroup.maskType = 'LUMINANCE';
                console.log("Transparent gradient: Created color and mask layer groups.");
            }

            // Ensure group position is maintained
            currentGradientGroup.x = vectorPosition.x;
            currentGradientGroup.y = vectorPosition.y;

            figma.notify(`Gradient updated with ${colorSegments.length} segments`);
            figma.currentPage.selection = [currentGradientGroup];

        } else {
            // --- Create New Group ---
            console.log("Creating new gradient group.");
            
            let finalGroup: GroupNode;
            
            if (isFullyOpaque) {
                // For fully opaque gradients, create a simple group with just the color segments
                finalGroup = figma.group(colorSegments, parentFrame);
                finalGroup.name = 'Gradient Path (Opaque)';
                console.log("Created simple opaque gradient group.");
            } else {
                // For transparent gradients, use the traditional approach with mask layer
                const tempParent = figma.currentPage;
                
                const maskGroup = figma.group(maskSegments, tempParent);
                maskGroup.name = "Mask Layer";
                maskGroup.isMask = true;
                maskGroup.maskType = 'LUMINANCE';
                
                const colorGroup = figma.group(colorSegments, tempParent);
                colorGroup.name = "Color Layer";
                
                finalGroup = figma.group([colorGroup, maskGroup], parentFrame);
                finalGroup.name = 'Gradient Path';
                console.log("Created gradient group with transparency mask.");
            }
            
            // Position the new group at the original vector's location.
            finalGroup.x = vectorPosition.x;
            finalGroup.y = vectorPosition.y;
            console.log(`Final group positioned at ${vectorPosition.x}, ${vectorPosition.y}`);

            // Update state to reflect the new group.
            currentGradientGroup = finalGroup;
            figma.currentPage.selection = [finalGroup];
            figma.notify(`Gradient applied with ${colorSegments.length} segments`);
        }

        // Reset sourceVector after use, as selection usually changes to the group.
        sourceVector = null;
        updateSelectionState(); // Refresh UI state based on new selection.

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('Error applying gradient:', error);
        figma.notify('Error applying gradient: ' + errorMessage);
    }
}

// --- State and UI Communication ---

/**
 * Updates the plugin's internal state (sourceVector, currentGradientGroup)
 * based on the current selection in the Figma document and notifies the UI.
 */
function updateSelectionState(): void {
    const selection = figma.currentPage.selection;
    let newSourceVector: VectorNode | null = null;
    let newGradientGroup: GroupNode | null = null;

    // Analyze the single selected node, if any.
    if (selection.length === 1) {
        const selectedNode = selection[0];
        if (selectedNode.type === 'VECTOR') {
             // Identify as source vector only if it's not part of a known gradient group structure.
             // A simple check: is its parent *not* named 'Gradient Path'?
             const isLikelySource = !(selectedNode.parent && selectedNode.parent.name === 'Gradient Path');
             if (isLikelySource) {
                newSourceVector = selectedNode as VectorNode;
             }
        } else if (selectedNode.type === 'GROUP') {
            // Check if it's a group created by this plugin, matching the NEW structure:
            // Structure: Group("Gradient Path") -> [ Group("Color Layer"), Group("Mask Layer", isMask=true, maskType='LUMINANCE') ]
            if (selectedNode.name === 'Gradient Path' && selectedNode.children.length >= 2) {
                 const firstChild = selectedNode.children[0]; // Should be Color Layer
                 const secondChild = selectedNode.children[1]; // Should be Mask Layer
                 // Check if the structure matches the expected output
                 if (firstChild.type === 'GROUP' && firstChild.name === 'Color Layer' &&
                     secondChild.type === 'GROUP' && secondChild.name === 'Mask Layer' && secondChild.isMask && secondChild.maskType === 'LUMINANCE')
                 {
                      newGradientGroup = selectedNode as GroupNode;
                 }
            }
        }
    }

     // Determine if the relevant state actually changed.
     let stateChanged = false;
     if (sourceVector?.id !== newSourceVector?.id) {
         sourceVector = newSourceVector;
         stateChanged = true;
         console.log("Source Vector Changed:", sourceVector?.name);
         // If a new source vector is selected, clear the gradient group context.
         if (sourceVector) currentGradientGroup = null;
     }
      if (currentGradientGroup?.id !== newGradientGroup?.id) {
         currentGradientGroup = newGradientGroup;
         stateChanged = true;
         console.log("Gradient Group Changed:", currentGradientGroup?.name);
         // If a gradient group is selected, clear the source vector context.
         if (currentGradientGroup) sourceVector = null;
     }

    // Only post message if state changed.
    // Send message to UI to update its state (e.g., enable/disable Apply button).
     if (stateChanged) {
         figma.ui.postMessage({
            type: 'selection-update',
            hasSelection: !!sourceVector || !!currentGradientGroup,
            isGradientGroup: !!currentGradientGroup,
             // TODO: Consider sending stop data here if a group is selected,
             // but extracting stops back from the segments is non-trivial.
             // For now, rely on the UI's state persistence.
        });
     }
}

// Listen for selection changes in Figma and update state accordingly.
figma.on('selectionchange', () => {
    updateSelectionState();
});

// Run initial state check when the plugin loads.
updateSelectionState();

/**
 * Handles messages received from the UI (ui.html).
 */
figma.ui.onmessage = (msg: {
    type: string; // Message type identifier.
    // Optional payloads based on message type:
    strokeWeight?: string;
    startCap?: StrokeCap;
    endCap?: StrokeCap;
    strokeJoin?: StrokeJoin;
    stops?: GradientStop[]; // Array of stops from UI.
    stopId?: string;        // ID of a specific stop.
    stopData?: GradientStop;// Data for a single stop being added/updated.
    keyCode?: number;       // Key code for keyboard events.
    selectedStopId?: string;// ID of stop selected in UI (for delete key).
}) => {
    switch (msg.type) {
        case 'apply-gradient': {
            const stops = msg.stops || [];
            currentStops = [...stops]; // Update local cache.

            if (stops.length < 2) {
                figma.notify('Error: Need at least two color stops');
                return;
            }
            // Ensure stops are sorted before applying.
            stops.sort((a, b) => a.position - b.position);

            const strokeWeight = parseFloat(msg.strokeWeight || '1');
            const startCap = msg.startCap || 'NONE';
            const endCap = msg.endCap || 'NONE';
            const strokeJoin = msg.strokeJoin || 'MITER';

            // Validate Stroke Caps - Replaced .includes with indexOf
            const validCaps: StrokeCap[] = ['NONE', 'ROUND', 'SQUARE', 'ARROW_LINES', 'ARROW_EQUILATERAL'];
            const validatedStartCap = validCaps.indexOf(startCap as StrokeCap) !== -1 ? startCap : 'NONE';
            const validatedEndCap = validCaps.indexOf(endCap as StrokeCap) !== -1 ? endCap : 'NONE';

            // Validate Stroke Joins - Replaced .includes with indexOf
            const validJoins: StrokeJoin[] = ['MITER', 'BEVEL', 'ROUND'];
            const validatedJoin = validJoins.indexOf(strokeJoin as StrokeJoin) !== -1 ? strokeJoin : 'MITER';

            // Call the main apply function with validated parameters.
            applyGradient(stops, strokeWeight, validatedStartCap, validatedEndCap, validatedJoin);
            break;
        }
        case 'preview-gradient': { // Handle UI previews (if implemented).
            if (msg.stops) {
                currentStops = [...msg.stops];
                // Send back confirmation or updated data if needed.
                figma.ui.postMessage({ type: 'preview-updated', stops: currentStops });
            }
            break;
        }
        case 'delete-stop': { // UI requests to delete a stop.
            if (msg.stopId) {
                const initialLength = currentStops.length;
                const stopToDelete = currentStops.find(stop => stop.id === msg.stopId);
                 // Prevent deleting endpoints.
                 if (stopToDelete && stopToDelete.isEndpoint) {
                     figma.notify("Cannot delete start or end stops.");
                     return;
                 }
                const newStops = currentStops.filter(stop => stop.id !== msg.stopId);
                // Allow deletion only if it doesn't go below 2 stops.
                if (newStops.length >= 2) {
                    currentStops = newStops;
                    currentStops.sort((a, b) => a.position - b.position); // Keep sorted.
                    // Inform UI about the change.
                    figma.ui.postMessage({ type: 'stops-updated', stops: currentStops, deletedStopId: msg.stopId });
                } else if (initialLength >= 2) {
                    figma.notify("Can't delete stop: minimum 2 stops required");
                }
            }
            break;
        }
        case 'update-stop': { // UI panel updates a stop's data.
            if (msg.stopData && msg.stopData.id) {
                const stopIndex = currentStops.findIndex(stop => stop.id === msg.stopData?.id);
                if (stopIndex !== -1) {
                     // Validate and clamp data before updating.
                     msg.stopData.position = Math.max(0, Math.min(100, msg.stopData.position || 0));
                     msg.stopData.alpha = Math.max(0, Math.min(1, msg.stopData.alpha !== undefined ? msg.stopData.alpha : 1));
                    currentStops[stopIndex] = msg.stopData;
                    // Re-sort stops in case position changed.
                     currentStops.sort((a, b) => a.position - b.position);
                    // Send the updated, sorted array back to the UI.
                    figma.ui.postMessage({ type: 'stops-updated', stops: currentStops });
                }
            }
            break;
        }
         case 'add-stop': { // UI requests to add a new stop (e.g., button click).
             if (msg.stopData) { // Expecting position, color, alpha.
                 const newId = `stop-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`; // Generate unique ID.
                 const newStop: GradientStop = {
                     id: newId,
                     position: Math.max(0, Math.min(100, msg.stopData.position || 50)), // Clamp position.
                     color: msg.stopData.color || '#808080', // Default color.
                     alpha: Math.max(0, Math.min(1, msg.stopData.alpha !== undefined ? msg.stopData.alpha : 1)), // Clamp alpha.
                     isEndpoint: false // Newly added stops are never endpoints.
                 };
                 currentStops.push(newStop);
                 currentStops.sort((a, b) => a.position - b.position); // Keep sorted.
                 // Inform UI about the new stop and its ID.
                 figma.ui.postMessage({ type: 'stops-updated', stops: currentStops, addedStopId: newId });
             }
             break;
         }
        case 'handle-key-press': { // Keyboard event from UI (e.g., delete key).
            if ((msg.keyCode === 46 || msg.keyCode === 8) && msg.selectedStopId) { // Delete or Backspace.
                 const stopToDelete = currentStops.find(stop => stop.id === msg.selectedStopId);
                 // Prevent deleting endpoints via keyboard.
                 if (stopToDelete && !stopToDelete.isEndpoint) {
                     const initialLength = currentStops.length;
                     const newStops = currentStops.filter(stop => stop.id !== msg.selectedStopId);
                     if (newStops.length >= 2) {
                         currentStops = newStops;
                          currentStops.sort((a, b) => a.position - b.position); // Keep sorted.
                         // Inform UI about the change.
                         figma.ui.postMessage({ type: 'stops-updated', stops: currentStops, deletedStopId: msg.selectedStopId });
                     } else if (initialLength >= 2) {
                         figma.notify("Can't delete stop: minimum 2 stops required");
                     }
                 } else if (stopToDelete && stopToDelete.isEndpoint) {
                     figma.notify("Cannot delete start or end stops.");
                 }
            }
            break;
        }
        case 'select-stop': { // UI informs plugin which stop is selected.
            // No action needed in plugin code for this message anymore.
            break;
        }
        case 'check-selection': { // UI requests a manual selection state update.
            updateSelectionState();
            break;
        }
        // Add other message handlers as needed.
    }
};
