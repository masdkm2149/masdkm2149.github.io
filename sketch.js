function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
          colorMode(HSB);
    background(random(1,360), random(20,100), random(10,100));
}
  function mouseWheel(event) {
    scrollDelta = event.delta;
   
    clear();
   
      if (scrollDelta > 0) {
      colorMode(HSB);
  background(random(1,360), random(20,100), random(10,100));
      } 
    else {
        colorMode(HSB);
        background(random(1,360), random(20,100), random(10,100));
    }

}
