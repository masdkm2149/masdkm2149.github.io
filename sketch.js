function setup() {

    createCanvas(windowWidth, windowHeight);
     const rx = (0.8, 2)
        colorMode(HSB);
          let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)        
        var rr1 = random(r1)
        var rr2 = random(r2)
        var rr3 = random(r3)
        var rr = random(rx)
        background(rr1, rr2, rr3);
      textSize(40);
    if ((rr3 > 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(0, 35));
      }          
  else if ((rr3 > 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(0, 40));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 40));
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(0, 40));
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(0, 40));
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(0, 40));
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(0, 40));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 40));
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(60, 100));
      }      
               else if ((rr3 < 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(65, 100));
      }    
  else if ((rr3 < 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(60, 100));
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(60, 100));
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(60, 100));
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(60, 100));
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(60, 100));
      }
      text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
      textSize(18);
    text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
}


$( document ).ready(function() {

});

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
           const rx = (0.8, 2)
        colorMode(HSB);
          let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)        
        var rr1 = random(r1)
        var rr2 = random(r2)
        var rr3 = random(r3)
        var rr = random(rx)
        background(rr1, rr2, rr3);
      textSize(40);
    if ((rr3 > 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(0, 35));
        document.querySelector(':root').style.setProperty('--hue', random(90, 360), rr2*rr, random(0, 35));
      }          
  else if ((rr3 > 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(0, 35));
              document.querySelector(':root').style.setProperty('--hue', random(0, 45), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 35));
             document.querySelector(':root').style.setProperty('--hue', random(0, 90), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(0, 35));
             document.querySelector(':root').style.setProperty('--hue', random(0, 135), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(0, 35));
             document.querySelector(':root').style.setProperty('--hue', random(0, 180), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(0, 35));
             document.querySelector(':root').style.setProperty('--hue', random(0, 225), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(0, 35));
             document.querySelector(':root').style.setProperty('--hue', random(0, 270), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 35));
             document.querySelector(':root').style.setProperty('--hue', random(0, 90), rr2*rr, random(0, 35));
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(65, 100));
          document.querySelector(':root').style.setProperty('--hue', random(0, 135), rr2*rr, random(65, 100));
      }      
               else if ((rr3 < 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(65, 100));
          document.querySelector(':root').style.setProperty('--hue', random(90, 360), rr2*rr, random(65, 100));
      }    
  else if ((rr3 < 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(65, 100));
          document.querySelector(':root').style.setProperty('--hue', random(0, 45), rr2*rr, random(65, 100));
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(65, 100));
          document.querySelector(':root').style.setProperty('--hue', random(0, 90), rr2*rr, random(65, 100));
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(65, 100));
          document.querySelector(':root').style.setProperty('--hue', random(0, 180), rr2*rr, random(65, 100));
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(65, 100));
          document.querySelector(':root').style.setProperty('--hue', random(0, 225), rr2*rr, random(65, 100));
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(65, 100));
          document.querySelector(':root').style.setProperty('--hue', random(0, 270), rr2*rr, random(65, 100));
      }
      text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
      textSize(18);
    text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
  }
function draw() {

}
  function mouseWheel(event) {
    scrollDelta = event.delta;
     const rx = (0.8, 2)
    clear();
   
      if (scrollDelta > 0) {
      colorMode(HSB);    
        let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)
                var rr1 = random(r1)
        var rr2 = random(r2)
        var rr3 = random(r3)
        var rr = random(rx)
        background(rr1, rr2, rr3);
      textSize(40);  
          if ((rr3 > 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(0, 35));
      }    
        else if ((rr3 > 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 35));
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(65, 100));
      }      
             else if ((rr3 < 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(65, 100));
      }    
  else if ((rr3 < 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(65, 100));
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(65, 100));
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(65, 100));
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(65, 100));
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(60, 100));
      }
      text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
      textSize(18);
    text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
      } 
    else {
        colorMode(HSB);
        let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)
        var rr1 = random(r1)
        var rr2 = random(r2)
        var rr3 = random(r3)
                var rr = random(rx)
        background(rr1, rr2, rr3);
      textSize(40);
        if ((rr3 > 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(0, 35));
      }      
       else if ((rr3 > 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(0, 35));
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(0, 35));
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            fill(random(0, 135), rr2*rr, random(65, 100));
      }      
     else if ((rr3 < 50) && (rr1 < 45)) {
            fill(random(90, 360), rr2*rr, random(65, 100));
      }      
  else if ((rr3 < 50) && (rr1 > 90)) {
            fill(random(0, 45), rr2*rr, random(65, 100));
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            fill(random(0, 90), rr2*rr, random(65, 100));
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            fill(random(0, 180), rr2*rr, random(65, 100));
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            fill(random(0, 225), rr2*rr, random(65, 100));
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            fill(random(0, 270), rr2*rr, random(65, 100));
      }
      text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
      textSize(18);
    text("Interactive Design", windowWidth/3, windowHeight/2 + 50);

    }

}
