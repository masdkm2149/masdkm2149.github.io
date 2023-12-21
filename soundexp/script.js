let dsharp;
let fnat;
let gnat;
let anat;
let bnat;
let csharp;
function preload() {
  soundFormats('mp3');
  csharp = loadSound('https://designedbydan.art/soundexp/sounds/csharp.mp3');
  csharp.playMode('sustain');
  dsharp = loadSound('https://designedbydan.art/soundexp/sounds/dsharp.mp3');
  dsharp.playMode('sustain');
  fnat = loadSound('https://designedbydan.art/soundexp/sounds/fnat.mp3');
  fnat.playMode('sustain');
  gnat = loadSound('https://designedbydan.art/soundexp/sounds/gnat.mp3');
  gnat.playMode('sustain');
  anat = loadSound('https://designedbydan.art/soundexp/sounds/anat.mp3');
  anat.playMode('sustain');
  bnat = loadSound('https://designedbydan.art/soundexp/sounds/bnat.mp3');
  bnat.playMode('sustain');
//anat2 = loadSound('https://designedbydan.art/soundexp/sounds/anat2.mp3');
 // anat2.playMode('sustain');
 //   gnat2 = loadSound('https://designedbydan.art/soundexp/sounds/gnat2.mp3');
 //gnat2.playMode('sustain');
 //  gnat2.loop = 1;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.getElementById("defaultCanvas0").onmouseover = function() {scrp();}
    document.getElementById("defaultCanvas0").onmousemove = function() {scrp();}
document.getElementById("defaultCanvas0").onmouseout = function() {scrp();}
    document.getElementById("defaultCanvas0").ontouchstart = function() {scrp();}
    document.getElementById("defaultCanvas0").ontouchend = function() {scrp();}
}
    function scrp() {
    if (mouseX < width*0.1 ) { 
if ( dsharp.isPlaying() == false || dsharp.isLooping() == false) { dsharp.loop();}}
      if (mouseX < width*0.2 && mouseX > width*0.1) { 
      if ( fnat.isPlaying() == false || fnat.isLooping() == false) { fnat.loop();}}
          if (mouseX < width*0.3 && mouseX > width*0.2) { 
      if ( gnat.isPlaying() == false || gnat.isLooping() == false) { gnat.loop();}}
              if (mouseX < width*0.4 && mouseX > width*0.3)  { 
      if ( anat.isPlaying() == false || anat.isLooping() == false) { anat.loop();}}
    if (mouseX < width*0.5 && mouseX > width*0.4) { 
      if ( bnat.isPlaying() == false || bnat.isLooping() == false) { bnat.loop();}}
  if (mouseX < width*0.6 && mouseX > width*0.5)  { 
     if ( csharp.isPlaying() == false || csharp.isLooping() == false) { csharp.loop();}}
  }

  function draw() {
  let x = width - width*0.052
  let y = height - height*0.054
  let a = map(mouseX, 0, width, width*0.052, x);
  let b = map(mouseY, 0, height, height*0.054, y);
    background(220);
      circle(a, b ,width*0.1);
}
