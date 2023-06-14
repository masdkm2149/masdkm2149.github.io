
var w = window.innerWidth;
var h = window.innerHeight;  

function setup() {
  canvas=createCanvas(w, h);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
          let anything = map(mouseX, 0, w, 0, 255);
        let athing = map(mouseX, 0, w, 255, 0);
      let nothing = map(mouseX, -10, w, 0, w - 250);
        let something = map(mouseY, -30, h, 0, h - 75);
    let notanything = map(anything*2, 0, 255, 255, 0);
    background(anything);
}
function draw() {
    let anything = map(mouseX, 0, w, 0, 255);
        let athing = map(mouseX, 0, w, 255, 0);
      let nothing = map(mouseX, -10, w, 0, w - 250);
        let something = map(mouseY, -30, h, 0, h - 75);
    let notanything = map(anything*2, 0, 255, 255, 0);
    textSize(24);
  colorMode(HSB);
    background(anything);

     if (mouseIsPressed === true) {

            document.querySelector("#view_project").style.setProperty('display', 'inline-flex');
            if (document.querySelector("#view_project.one")){
            document.querySelector("#view_project.one").style.setProperty('right', nothing + 'px');
            document.querySelector("#view_project.one").style.setProperty('bottom', something + 'px');
            document.querySelector("#view_project.one").style.setProperty('border', "2px solid hsl(0, 0%,"+map(notanything, 255, 0, 0, 100)+"%)");
            document.querySelector("#view_project").style.setProperty('--colorr', 'hsl(0, 0%,'+map(notanything, 255, 0, 0, 100)+"%)");
            document.querySelector("#view_project").style.setProperty('--colorr2', 'hsl(0, 0%,'+map(notanything, 255, 0, 100, 0)+"%)");
            document.querySelector("#view_project").style.setProperty('--displayy', 'flex!important');
            document.querySelector("#view_project").classList.toggle("one");
            console.log(map(notanything, 255, 0, 0, 100));
            fill(0, 0, anything);          
          }
       } else {
        fill(0, 0, notanything);
                   / document.querySelector("#view_project").style.setProperty('display', 'none');/
}

  text("Daniel Roswadowsky", nothing,something);
      textSize(18);
    text("Interactive Design", nothing,something + 50);

}

function remapcolor(){
            document.querySelector("#view_project").style.setProperty('--colorr', 'hsl(0, 0%,'+map(notanything, 255, 0, 0, 100)+"%)");
            document.querySelector("#view_project").style.setProperty('--colorr2', 'hsl(0, 0%,'+map(notanything, 255, 0, 100, 0)+"%)");
}
