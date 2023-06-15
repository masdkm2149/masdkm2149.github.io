function setup() {

   // createCanvas(windowWidth, windowHeight);
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
            document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
      textSize(40);
    if ((rr3 > 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }          
  else if ((rr3 > 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
               else if ((rr3 < 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }    
  else if ((rr3 < 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
 //     text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
 //     textSize(18);
 //   text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
}


$( document ).ready(function() {

});

  function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
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
                  document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
      textSize(40);
    if ((rr3 > 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }          
  else if ((rr3 > 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
               else if ((rr3 < 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }    
  else if ((rr3 < 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
    //  text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
    //  textSize(18);
    //  text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
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
                      document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
      textSize(40);  
    if ((rr3 > 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }          
  else if ((rr3 > 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
               else if ((rr3 < 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }    
  else if ((rr3 < 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
//      text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
  //    textSize(18);
  //  text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
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
                    document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
      textSize(40);
          if ((rr3 > 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }          
  else if ((rr3 > 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
         else if ((rr3 > 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
      else if ((rr3 < 50) && (rr1 > 180)) {
            xi = random(0, 135)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
               else if ((rr3 < 50) && (rr1 < 45)) {
            xi = random(90, 360)
            xy = random(0, 35)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }    
  else if ((rr3 < 50) && (rr1 > 90)) {
            xi = random(0, 45)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
    else if ((rr3 < 50) && (rr1 > 135)) {
            xi = random(0, 90)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
        else if ((rr3 < 50) && (rr1 > 225)) {
            xi = random(0, 180)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }      
          else if ((rr3 < 50) && (rr1 > 270)) {
            xi = random(0, 225)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }     
            else if ((rr3 < 50) && (rr1 > 315)) {
            xi = random(0, 270)
            xy = random(65, 100)
            xo = rr2*rr
            fill(xi, xo, xy);
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
      }
// text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
  //    textSize(18);
 //   text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
    }

}
