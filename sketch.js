function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {

}
  function mouseWheel(event) {
    scrollDelta = event.delta;
   
    clear();
   
      if (scrollDelta > 0) {
        colorMode(HSB);
        let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)
        background(random(r1), random(r2), random(r3));
      textSize(40);
            fill(random(r1*.75), random(r2*.82), random(r3/3*2.87));
      text("Daniel Roswadowsky", windowWidth/2, windowHeight/2);
      textSize(18);
    text("Interactive Design", windowWidth/2, windowHeight/2 + 50);
      } 
    else {
        colorMode(HSB);
        let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)
        background(random(r1), random(r2), random(r3));
      textSize(40);
            fill(random(r1*.75), random(r2*.82), random(r3/3*2.87));
      text("Daniel Roswadowsky", windowWidth/2, windowHeight/2);
      textSize(18);
    text("Interactive Design", windowWidth/2, windowHeight/2 + 50);

    }

}
