let dsharp;
let fnat;
function preload() {
  soundFormats('mp3');
  dsharp = loadSound('https://designedbydan.art/soundexp/sounds/dsharp.mp3');
  dsharp.playMode('sustain');
      dsharp.loop = 0;
  fnat = loadSound('https://designedbydan.art/soundexp/sounds/fnat.mp3');
  fnat.playMode('sustain');
    fnat.loop = 0;
    gnat = loadSound('https://designedbydan.art/soundexp/sounds/gnat.mp3');
  gnat.playMode('sustain');
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

      if (mouseX < 50) { 
        console.log(dsharp.isPlaying())
        if ( dsharp.isPlaying() == false ) {
        dsharp.play();}
      }
      if (mouseX < 150) { if ( fnat.isPlaying() == false ) { fnat.play();}}
          if (mouseX < 250) { if ( gnat.isPlaying() == false ) { gnat.play();}}
}
