function function1() {
	document.getElementById('projects-button').classList.toggle("swap-color-1");
}
function function2() {
	document.body.classList.toggle("swap-color-2");
}
function function3() {
	document.getElementById('design2b_submenu-button').classList.toggle("swap-color-1");
	document.getElementById('design2b_submenu-button').classList.toggle("swap-color-3");
	document.body.classList.toggle("swap-color-2");
	document.body.classList.toggle("swap-color-4");
	document.getElementsByClassName('nav-sub-link-1-desc')[0].classList.toggle("fade-in");
}
function function4() {
	document.getElementById('design2a_submenu-button').classList.toggle("swap-color-1");
	document.getElementById('design2a_submenu-button').classList.toggle("swap-color-6");
	document.body.classList.toggle("swap-color-2");
	document.body.classList.toggle("swap-color-5");
	document.getElementsByClassName('nav-sub-link-2-desc')[0].classList.toggle("fade-in");
}
function function5() {
	document.getElementById('media1a_submenu-button').classList.toggle("swap-color-1");
	document.getElementById('media1a_submenu-button').classList.toggle("swap-color-7");
	document.body.classList.toggle("swap-color-2");
	document.body.classList.toggle("swap-color-8");
	document.getElementsByClassName('nav-sub-link-3-desc')[0].classList.toggle("fade-in");
}
function function6() {
	document.getElementById('artseminar_submenu-button').classList.toggle("swap-color-1");
	document.getElementById('artseminar_submenu-button').classList.toggle("swap-color-9");
	document.body.classList.toggle("swap-color-2");
	document.body.classList.toggle("swap-color-10");
	document.getElementsByClassName('nav-sub-link-4-desc')[0].classList.toggle("fade-in");
}
function function7() {
	document.getElementById('misc_submenu-button').classList.toggle("swap-color-1");
	document.getElementById('misc_submenu-button').classList.toggle("swap-color-11");
	document.body.classList.toggle("swap-color-2");
	document.body.classList.toggle("swap-color-12");
}

function projectsmenu() {
	document.getElementsByClassName('nav')[0].classList.add("display");
	document.body.classList.toggle("swap-color-2");
    document.getElementById('projects-button').classList.add("hide");  
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-1"); 
}
function design2b_submenu() {
    document.getElementsByClassName('nav')[0].classList.add("hide");   
	document.getElementsByClassName('sub-nav-1')[0].classList.add("display");
	document.body.classList.toggle("swap-color-4");
    document.getElementById('projects-button').classList.add("hide");   
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-3");
    document.getElementsByClassName('nav')[0].classList.toggle("display");  
}
function design2a_submenu() {
	document.getElementsByClassName('sub-nav-2')[0].classList.add("display");
	document.body.classList.toggle("swap-color-5");
    document.getElementById('projects-button').classList.add("hide");    
    document.getElementsByClassName('nav')[0].classList.add("hide");   
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-6"); 
        document.getElementsByClassName('nav')[0].classList.toggle("display"); 
}
function media1a_submenu() {
	document.getElementsByClassName('sub-nav-3')[0].classList.add("display");
	document.body.classList.toggle("swap-color-8");
    document.getElementById('projects-button').classList.add("hide");    
    document.getElementsByClassName('nav')[0].classList.add("hide");   
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-7"); 
        document.getElementsByClassName('nav')[0].classList.toggle("display"); 
}
function artseminar_submenu() {
	document.getElementsByClassName('sub-nav-4')[0].classList.add("display");
	document.body.classList.toggle("swap-color-2");
	document.body.classList.toggle("swap-color-10");
    document.getElementById('projects-button').classList.add("hide");    
    document.getElementsByClassName('nav')[0].classList.add("hide");   
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-9"); 
        document.getElementsByClassName('nav')[0].classList.toggle("display"); 
}
function misc_submenu() {
	document.getElementsByClassName('sub-nav-5')[0].classList.add("display");
	document.body.classList.toggle("swap-color-2");
	document.body.classList.toggle("swap-color-12");
    document.getElementById('projects-button').classList.add("hide");    
    document.getElementsByClassName('nav')[0].classList.add("hide");   
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-11"); 
        document.getElementsByClassName('nav')[0].classList.toggle("display"); 
}


function back2projectsmenu() {
	if (document.body.classList.contains('swap-color-4')) {
	document.body.classList.toggle("swap-color-4");
    document.getElementsByClassName('sub-nav-1')[0].classList.toggle("display"); 
    document.getElementById('projects-button').classList.add("hide");  
    document.getElementsByClassName('nav')[0].classList.toggle("display"); 
        document.getElementsByClassName('nav')[0].classList.toggle("hide"); 
        document.getElementsByClassName('nav')[0].classList.toggle("swap-color-3"); 
}
	else if (document.body.classList.contains('swap-color-5')) {
	document.body.classList.toggle("swap-color-5");
    document.getElementsByClassName('sub-nav-2')[0].classList.toggle("display"); 
    document.getElementById('projects-button').classList.add("hide");  
    document.getElementsByClassName('nav')[0].classList.toggle("display"); 
    document.getElementsByClassName('nav')[0].classList.toggle("hide"); 
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-6"); 
}
	else if (document.body.classList.contains('swap-color-8')) {
	document.body.classList.toggle("swap-color-8");
    document.getElementsByClassName('sub-nav-3')[0].classList.toggle("display"); 
    document.getElementById('projects-button').classList.add("hide");  
    document.getElementsByClassName('nav')[0].classList.toggle("display"); 
        document.getElementsByClassName('nav')[0].classList.toggle("hide"); 
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-7"); 
}
	else if (document.body.classList.contains('swap-color-10')) {
	document.body.classList.toggle("swap-color-10");
    document.body.classList.toggle("swap-color-2");
    document.getElementsByClassName('sub-nav-4')[0].classList.toggle("display"); 
    document.getElementById('projects-button').classList.add("hide");  
    document.getElementsByClassName('nav')[0].classList.toggle("display");
    document.getElementsByClassName('nav')[0].classList.toggle("hide"); 
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-9");  
}
	else if (document.body.classList.contains('swap-color-12')) {
	document.body.classList.toggle("swap-color-12");
	document.body.classList.toggle("swap-color-2");
    document.getElementsByClassName('sub-nav-5')[0].classList.toggle("display"); 
    document.getElementById('projects-button').classList.add("hide");  
    document.getElementsByClassName('nav')[0].classList.toggle("display"); 
    document.getElementsByClassName('nav')[0].classList.toggle("hide"); 
    document.getElementsByClassName('nav')[0].classList.toggle("swap-color-11");  
}
}

function revealLinks(){
	document.getElementsByClassName('nav-link-1-desc')[0].classList.toggle("fade-in");
}

function sub_nav_1_link_1_caption(){
document.getElementsByClassName('sub-nav-link-1-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_1_link_2_caption(){
document.getElementsByClassName('sub-nav-link-2-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_1_link_3_caption(){
document.getElementsByClassName('sub-nav-link-3-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_1_link_4_caption(){
document.getElementsByClassName('sub-nav-link-4-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_1_link_5_caption(){
document.getElementsByClassName('sub-nav-link-5-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_2_link_1_caption(){
document.getElementsByClassName('sub-nav-2-link-1-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_3_link_1_caption(){
document.getElementsByClassName('sub-nav-3-link-1-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_4_link_1_caption(){
document.getElementsByClassName('sub-nav-4-link-1-desc')[0].classList.toggle("fade-in");	
}
function sub_nav_5_link_1_caption(){
document.getElementsByClassName('sub-nav-5-link-1-desc')[0].classList.toggle("fade-in");	
}
