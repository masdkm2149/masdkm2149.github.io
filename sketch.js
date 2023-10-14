function reveal() { 
     document.getElementsByClassName('dotcursor')[0].classList.toggle("show");
}
function setup() {
     let r1 = (1,360)
     let r2 = (20,100)
     let r3 = (10,100)        
     var rr1 = random(r1)
     var rr2 = random(r2)
     var rr3 = random(r3)
     colorMode(HSB);
       $('meta[name=theme-color]').remove();
       $('head').append("<meta name='theme-color' content='hsl(" + rr1 + "," + rr2 + "," + rr3 +")'>");
       $('meta[name=apple-mobile-web-app-status-bar-style]').remove();
       $('head').append("<meta name='apple-mobile-web-app-status-bar-style' content='hsl(" + rr1 + "," + rr2 + "," + rr3 +")'>");
            const rx = (0.8, 2)
            document.querySelector(':root').style.setProperty('--bg_hue', rr1);
            document.querySelector(':root').style.setProperty('--bg_brightness', rr2 + '%');
            document.querySelector(':root').style.setProperty('--bg_saturation', rr3 + '%');
            document.querySelector(':root').style.setProperty('--ww', windowWidth);
            document.querySelector(':root').style.setProperty('--wh', windowHeight);
           var ww_val = document.querySelector(':root').style.getPropertyValue('--ww');
           var wh_val = document.querySelector(':root').style.getPropertyValue('--wh');
//           if (wh_val > ww_val * 2 && windowWidth > 1200) { document.querySelector(':root').style.setProperty('--txtmargin', "1.4em auto auto auto");  }
//           if (ww_val > wh_val * 2 && windowWidth > 1200) { document.querySelector(':root').style.setProperty('--txtmargin', "1.4em 0 0 0"); }
  //text hue algorithm
   if  (rr1 < 45) {
                    huee = random(90, 360)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
     }
  else if (rr1 > 90 && rr1 > 45) {
            huee = random(0, 45)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
      }
   else if (rr1 > 135 && rr1 > 90) {
            huee = random(0, 90)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
      }
    else if (rr1 > 180 && rr1 > 135) {
            huee = random(0, 135)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
      }
    else if (rr1 > 225 && rr1 > 180) {
            huee = random(0, 180)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
      }
         else if (rr1 > 270 && rr1 > 225) {
            huee = random(0, 225)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
      }
         else if (rr1 > 315 && rr1 > 270) {
            huee = random(0, 270)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
      }       
         else if (rr1 < 360 && rr1 > 315) {
            huee = random(45, 315)
        document.querySelector(':root').style.setProperty('--txt_hue', huee);
      }    
   //txt brightness algorithm
   if (rr2 > 50 && rr2 < 70) {
            xy = random(1, rr2*0.7)
            document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%'); 
    }       
   else if (rr2 > 70) {
            xy = random(1, rr2*0.5)
        document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%');
    }       
    else if (rr2 < 50 && rr2 > 30) {
         if (rr3 > 60 && rr1 < 100) { xy = random(rr2*0.7, 100); if (xy > rr2 * 2 && xy < rr2 * 3) { document.querySelector(':root').style.setProperty('--txt_brightness', random(0, 15) + '%'); } else { document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%'); } } 
         else { xy = random(rr2*1.3, 100); if (xy > rr2 * 2 && xy < rr2 * 3) { document.querySelector(':root').style.setProperty('--txt_brightness', random(0, 15) + '%'); } else { document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%'); } }      
    }   
    else if (rr2 < 30) {
         if (rr2 > 20) { xy = random(rr2*1.5, 100); document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%'); }
         if (rr2 < 10) { xy = random(50, 100); document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%'); }
         else { xy = random(rr2*3, 100); document.querySelector(':root').style.setProperty('--txt_brightness', xy + '%'); } 
    }      
     //text saturation algorithm
     if (rr3 > 50 && rr3 < 70) {
            xo = random(1, rr3*0.85)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    } 
    else if (rr3 > 70) {
            xo = random(1, rr3*0.5)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
    else if (rr3 < 50 && rr3 > 30) {
            xo = random(rr3*1.15, 100)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }       
    else if (rr3 < 30) {
            xo = random(rr3*1.5, 100)
        document.querySelector(':root').style.setProperty('--txt_saturation', xo + '%');
    }     
      var icon_bg_hue = document.querySelector(':root').style.getPropertyValue('--bg_hue');
      var icon_bg_luma = document.querySelector(':root').style.getPropertyValue('--bg_brightness');
      var icon_bg_sat = document.querySelector(':root').style.getPropertyValue('--bg_saturation');
      var icon_fg_hue = document.querySelector(':root').style.getPropertyValue('--txt_hue');
      var icon_fg_luma = document.querySelector(':root').style.getPropertyValue('--txt_brightness');
      var icon_fg_sat = document.querySelector(':root').style.getPropertyValue('--txt_saturation');
      //$('head').append("<link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect x='10' y='10' width='160' height='160' style='fill:hsl("+ icon_bg_hue + "," + icon_bg_sat + "," + icon_bg_luma + ");'%3E%3C/rect%3E%3Ccircle cx='90' cy='90' r='45' style='fill:hsl("+ icon_fg_hue + "," + icon_fg_sat + "," + icon_fg_luma + ");mix-blend-mode: difference;'%3E%3C/circle%3E%3C/svg%3E\" />");
      var icon_href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect x='10' y='10' width='160' height='160' style='transition: all.5s ease-out; fill:hsl("+ icon_bg_hue + "," + icon_bg_sat + "," + icon_bg_luma + ");'%3E%3C/rect%3E%3Ccircle cx='90' cy='90' r='45' style='fill:hsl("+ icon_fg_hue + "," + icon_fg_sat + "," + icon_fg_luma + ");transition: all .4s ease-out;mix-blend-mode: difference;'%3E%3C/circle%3E%3C/svg%3E"
      var icon_href_alt = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect x='10' y='10' width='160' height='160' style='transition: all.5s ease-out; fill:hsl("+ icon_bg_hue + "," + icon_bg_sat + "," + icon_bg_luma + ");'%3E%3C/rect%3E%3Ccircle cx='90' cy='90' r='45' style='fill:hsl("+ icon_fg_hue + "," + icon_fg_sat + "," + icon_fg_luma + ");transition: all .4s ease-out;mix-blend-mode: hue;'%3E%3C/circle%3E%3C/svg%3E"

     if ( $("link[rel='icon']").length ) { $("link[rel='icon']").attr("href", icon_href); } else { $('head').append("<link rel=\"icon\" type=\"image/svg+xml\" href=\""+icon_href+"\" />"); }
     if ( icon_fg_luma.replace(/[^0-9.]/g,'') < 2 ) { console.log(icon_fg_luma.replace(/[^0-9.]/g,'')); document.getElementsByClassName('dotcursor')[0].classList.add('altblend'); if ( $("link[rel='icon']").length ) { $("link[rel='icon']").attr("href", icon_href_alt); } else { $('head').append("<link rel=\"icon\" type=\"image/svg+xml\" href=\""+icon_href_alt+"\" />"); } } else if ( icon_fg_luma.replace(/[^0-9.]/g,'') > 2 && $('.altblend')[0] ) { document.getElementsByClassName('dotcursor')[0].classList.remove('altblend'); }
 }
function draw() {
     document.querySelector(':root').style.setProperty('--mousex', mouseX + 'px');
     document.querySelector(':root').style.setProperty('--mousey', mouseY + 'px');
}
  function windowResized() {
//resizeCanvas(windowWidth + 40, windowHeight + 40);
     clear();
     setup();
     document.querySelector(':root').style.setProperty('--ww', windowWidth);
     document.querySelector(':root').style.setProperty('--wh', windowHeight);  
       //$('head').querySelector('link').setAttribute("href", "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect x='10' y='10' width='160' height='160' style='fill:hsl("+ icon_bg_hue + "," + icon_bg_sat + "," + icon_bg_luma + ");'%3E%3C/rect%3E%3Ccircle cx='90' cy='90' r='45' style='fill:hsl("+ icon_fg_hue + "," + icon_fg_sat + "," + icon_fg_luma + ");mix-blend-mode: difference;'%3E%3C/circle%3E%3C/svg%3E");
     // $('head').append("<link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect x='10' y='10' width='160' height='160' style='fill:hsl("+ icon_bg_hue + "," + icon_bg_sat + "," + icon_bg_luma + ");'%3E%3C/rect%3E%3Ccircle cx='90' cy='90' r='45' style='fill:hsl("+ icon_fg_hue + "," + icon_fg_sat + "," + icon_fg_luma + ");mix-blend-mode: difference;'%3E%3C/circle%3E%3C/svg%3E\" />");
  }

  function mouseWheel(event) {
    scrollDelta = event.delta;
    clear();
      if (scrollDelta > 0) { setup(); } else { setup(); }
}
