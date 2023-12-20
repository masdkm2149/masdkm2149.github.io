let dsharp;
let fnat;
let gnat;
let anat;
function preload() {
  soundFormats('mp3');
  dsharp = loadSound('https://designedbydan.art/soundexp/sounds/dsharp.mp3');
  dsharp.playMode('sustain');
    dsharp.loop = 1;
  fnat = loadSound('https://designedbydan.art/soundexp/sounds/fnat.mp3');
  fnat.playMode('sustain');
    fnat.loop = 1;
  gnat = loadSound('https://designedbydan.art/soundexp/sounds/gnat.mp3');
  gnat.playMode('sustain');
    gnat.loop = 1;
  anat = loadSound('https://designedbydan.art/soundexp/sounds/anat.mp3');
  anat.playMode('sustain');
    anat.loop = 1;
  bnat = loadSound('https://designedbydan.art/soundexp/sounds/bnat.mp3');
  bnat.playMode('sustain');
    bnat.loop = 1;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


  function draw() {
  let x = width - width*0.052
  let y = height - height*0.054
  let a = map(mouseX, 0, width, width*0.052, x);
  let b = map(mouseY, 0, height, height*0.054, y);
    background(220);
      circle(a, b ,width*0.1);

    if (mouseX < width*0.1) { if ( dsharp.isPlaying() == false ) { dsharp.play();}}
      if (mouseX < width*0.2) { if ( fnat.isPlaying() == false ) { fnat.play();}}
          if (mouseX < width*0.3) { if ( gnat.isPlaying() == false ) { gnat.play();}}
              if (mouseX < width*0.4) { if ( anat.isPlaying() == false ) { anat.play();}}
                  if (mouseX < width*0.5) { if ( bnat.isPlaying() == false ) { bnat.play();}}
}
