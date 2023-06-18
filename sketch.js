function set() {
             let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)        
        var rr1 = random(r1)
        var rr2 = random(r2)
        var rr3 = random(r3)
$('head').append("<meta name='theme-color' content='hsl(" + rr1 + "," + rr2 + "," + rr3 +")'>");     
}
set();

function setup() {
     const rx = (0.8, 2)
        colorMode(HSB);
          let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)        
        var rr1 = random(r1)
        var rr2 = random(r2)
        var rr3 = random(r3)
            document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
    if (rr3 > 50) {
            xo = random(1, rr3*0.85)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
    else if (rr3 < 50) {
            xo = random(rr3*1.15, 100)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
   
   if (rr2 > 50) {
            xy = random(1, rr2*0.7)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
    else if (rr2 < 50) {
            xy = random(rr2*1.3, 100)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
   
   if  (rr1 < 45) {
                    xi = random(90, 360)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
     }
  else if (rr1 > 90) {
            xi = random(0, 45)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
   else if (rr1 > 135) {
            xi = random(0, 90)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 180) {
            xi = random(0, 135)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 225) {
            xi = random(0, 180)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 270) {
            xi = random(0, 225)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 315) {
            xi = random(0, 270)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
 //       textSize(40);
 //     text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
 //     textSize(18);
 //   text("Interactive Design", windowWidth/3, windowHeight/2 + 50);   
   noCursor();
     //createCanvas(windowWidth + 40, windowHeight + 40);
   clear();
}


$( document ).ready(function() {

});

  function windowResized() {
//resizeCanvas(windowWidth + 40, windowHeight + 40);
     clear();
           const rx = (0.8, 2)
        colorMode(HSB);
          let r1 = (1,360)
        let r2 = (20,100)
        let r3 = (10,100)        
        var rr1 = random(r1)
        var rr2 = random(r2)
        var rr3 = random(r3)
        var rr = random(rx)
             $('meta[name=theme-color]').remove();
             $('head').append("<meta name='theme-color' content='hsl(" + rr1 + "," + rr2 + "," + rr3 +")'>");
             $('meta[name=apple-mobile-web-app-status-bar-style]').remove();
       $('head').append("<meta name='apple-mobile-web-app-status-bar-style' content='hsl(" + rr1 + "," + rr2 + "," + rr3 +")'>");
        //background(rr1, rr2, rr3);
                  document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
      textSize(40);
    if (rr3 > 50) {
            xo = random(1, rr3*0.85)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
    else if (rr3 < 50) {
            xo = random(rr3*1.15, 100)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
   
   if (rr2 > 50) {
            xy = random(1, rr2*0.7)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
    else if (rr2 < 50) {
            xy = random(rr2*1.3, 100)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
   
   if  (rr1 < 45) {
                    xi = random(90, 360)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
     }
  else if (rr1 > 90) {
            xi = random(0, 45)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
   else if (rr1 > 135) {
            xi = random(0, 90)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 180) {
            xi = random(0, 135)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 225) {
            xi = random(0, 180)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 270) {
            xi = random(0, 225)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 315) {
            xi = random(0, 270)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    //  text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
    //  textSize(18);
    //  text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
  }
function draw() {
clear();
ellipse(mouseX, mouseY, 80, 80);
  colorMode(HSB);
  fill(xi, xo, xy);
  noStroke();
     document.querySelector(':root').style.setProperty('--mousex', mouseX + 'px');
     document.querySelector(':root').style.setProperty('--mousey', mouseY + 'px');
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
      //  background(rr1, rr2, rr3);
                      document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
      textSize(40);  
    if (rr3 > 50) {
            xo = random(1, rr3*0.85)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
    else if (rr3 < 50) {
            xo = random(rr3*1.15, 100)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
   
   if (rr2 > 50) {
            xy = random(1, rr2*0.7)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
    else if (rr2 < 50) {
            xy = random(rr2*1.3, 100)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
   
   if  (rr1 < 45) {
                    xi = random(90, 360)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
     }
  else if (rr1 > 90) {
            xi = random(0, 45)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
   else if (rr1 > 135) {
            xi = random(0, 90)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 180) {
            xi = random(0, 135)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 225) {
            xi = random(0, 180)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 270) {
            xi = random(0, 225)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 315) {
            xi = random(0, 270)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
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
     //   background(rr1, rr2, rr3);
                    document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
      textSize(40);
    if (rr3 > 50) {
            xo = random(1, rr3*0.85)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
    else if (rr3 < 50) {
            xo = random(rr3*1.15, 100)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
   
   if (rr2 > 50) {
            xy = random(1, rr2*0.7)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
    else if (rr2 < 50) {
            xy = random(rr2*1.3, 100)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
   
   if  (rr1 < 45) {
                    xi = random(90, 360)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
     }
  else if (rr1 > 90) {
            xi = random(0, 45)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
   else if (rr1 > 135) {
            xi = random(0, 90)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 180) {
            xi = random(0, 135)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
    else if (rr1 > 225) {
            xi = random(0, 180)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 270) {
            xi = random(0, 225)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
         else if (rr1 > 315) {
            xi = random(0, 270)
        document.querySelector(':root').style.setProperty('--txt_hue', xi);
      }
// text("Daniel Roswadowsky", windowWidth/3, windowHeight/2);
  //    textSize(18);
 //   text("Interactive Design", windowWidth/3, windowHeight/2 + 50);
    }

}
