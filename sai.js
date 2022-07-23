/*$(function(){
           $('head').append("<meta name='viewport' content='width=device-width, initial-scale= " + window.devicePixelRatio * .8 + "'>");
});*/
function reorder(){
document.getElementsByClassName('content-main')[0].scrollLeft +=8
}
function reorder2(){
document.getElementsByClassName('content-main')[0].scrollLeft +=400}
function toggletagbranding() {
  for (let i = 0; i < document.querySelectorAll('#tag-branding').length; i++) {
	document.querySelectorAll('#tag-branding')[i].classList.toggle("active");
}
  for (let i = 0; i < document.querySelectorAll('.coding').length; i++) {
  document.querySelectorAll('.coding')[i].classList.toggle("hide");
}
  for (let i = 0; i < document.querySelectorAll('.branding').length; i++) {
  document.querySelectorAll('.branding > #project-element')[i].classList.toggle("tag-h-infocus");
}
	  for (let i = 0; i < document.querySelectorAll('.branding').length; i++) {
  document.querySelectorAll('.branding .temp-main-image')[i].classList.toggle("active-border-1");
}
		  for (let i = 0; i < document.querySelectorAll('.branding').length; i++) {
  document.querySelectorAll('.branding > .element-info')[i].classList.toggle("active-border");
}
  document.querySelectorAll('.branding > .element-info')[0].classList.toggle("tag-hh-infocus");
  /*document.getElementsByClassName('one')[0].classList.toggle("tag-h-infocus");*/
  /*document.getElementsByClassName('one-one')[0].classList.toggle("tag-hh-infocus");  */
	document.getElementsByClassName('print')[0].classList.toggle("hide");  
   ajidw();
   reorder();

}
function toggletagcoding() {
  for (let i = 0; i < document.querySelectorAll('#tag-coding').length; i++) {
  document.querySelectorAll('#tag-coding')[i].classList.toggle("active");
}
	
  for (let i = 0; i < document.querySelectorAll('.branding').length; i++) {
  document.querySelectorAll('.branding')[i].classList.toggle("hide");
}
  for (let i = 0; i < document.querySelectorAll('.print').length; i++) {
  document.querySelectorAll('.print')[i].classList.toggle("hide");
}
   bjidw();
   reorder();

  for (let i = 0; i < document.querySelectorAll('.coding').length; i++) {
  document.querySelectorAll('.coding')[i].classList.toggle("tag-p-infocus");
}
  document.querySelectorAll('.coding')[0].classList.toggle("m");
	  for (let i = 0; i < document.querySelectorAll('.coding').length; i++) {
  document.querySelectorAll('.coding .temp-main-image')[i].classList.toggle("active-border-1");
}
		  for (let i = 0; i < document.querySelectorAll('.coding').length; i++) {
  document.querySelectorAll('.coding > .element-info')[i].classList.toggle("active-border");
}
  for (let i = 0; i < document.querySelectorAll('.coding > #project-element').length; i++) {
  document.querySelectorAll('.coding > #project-element')[i].classList.toggle("tag-h-infocus");
}
  document.querySelectorAll('.coding > .element-info')[0].classList.toggle("tag-hh-infocus");


}

function toggletagprint() {
  for (let i = 0; i < document.querySelectorAll('#tag-print').length; i++) {
  document.querySelectorAll('#tag-print')[i].classList.toggle("active");
}
  for (let i = 0; i < document.querySelectorAll('.branding').length; i++) {
  document.querySelectorAll('.branding')[i].classList.toggle("hide");
}
  for (let i = 0; i < document.querySelectorAll('.coding').length; i++) {
  document.querySelectorAll('.coding')[i].classList.toggle("hide");
}

  cjidw();
   reorder();

  for (let i = 0; i < document.querySelectorAll('.print').length; i++) {
  document.querySelectorAll('.print')[i].classList.toggle("tag-p-infocus");
}
  document.querySelectorAll('.print')[0].classList.toggle("m");
  for (let i = 0; i < document.querySelectorAll('.print > #project-element').length; i++) {
  document.querySelectorAll('.print > #project-element')[i].classList.toggle("tag-h-infocus");
}
  document.querySelectorAll('.print > .element-info')[0].classList.toggle("tag-hh-infocus");
	  for (let i = 0; i < document.querySelectorAll('.print').length; i++) {
  document.querySelectorAll('.print .temp-main-image')[i].classList.toggle("active-border-1");
}
		  for (let i = 0; i < document.querySelectorAll('.print').length; i++) {
  document.querySelectorAll('.print > .element-info')[i].classList.toggle("active-border");
}



}

$( document ).ready(function() {

      getWindowSpec();      getWindowSpec2();
         document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
         reorder();
      
});


const scrollContainer = document.querySelector(".content-main");

window.addEventListener('resize', function(event) {
  if (document.getElementsByClassName('print')[0].classList.contains('hide') && document.getElementsByClassName('coding')[0].classList.contains('hide')){  
    ajidw();
    reorder();
        getWindowSpec();

          document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');

  }
  else if (document.getElementsByClassName('print')[0].classList.contains('hide') && document.getElementsByClassName('branding')[0].classList.contains('hide')){  
    bjidw();
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    reorder();
    getWindowSpec();
  }
  else if (document.getElementsByClassName('coding')[0].classList.contains('hide') && document.getElementsByClassName('branding')[0].classList.contains('hide')){  
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    cjidw();
    reorder();
      getWindowSpec();


  }
 else {
    getWindowSpec();
        getWindowSpec2();
    reorder();
  
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
}
}, true);

scrollContainer.addEventListener("wheel", (event) => {
                           if (document.querySelector('.debug')){
                           document.querySelector('.debug').innerHTML = ("Your Height: " + window.innerHeight + "px" + "<br><br>" + "Your Width: " + window.innerWidth + "px" + "<br><br>"  + "Your Pixel Ratio: " +  window.devicePixelRatio  + "<br><br>"  + "Your deltaY: " + event.deltaY );
                       }
    event.preventDefault();
    if (event.deltaY > 0) {
    scrollContainer.scrollLeft += (window.innerWidth * 0.55);
    }
    if (event.deltaY < 0) {
      scrollContainer.scrollLeft += -(window.innerWidth * 0.55);
    }
    /*scrollContainer.scrollLeft += event.deltaY * (window.innerWidth * 0.001);*/
  if (document.getElementsByClassName('print')[0].classList.contains('hide') && document.getElementsByClassName('coding')[0].classList.contains('hide')){   
    ajidw();   
  }
  else if (document.getElementsByClassName('print')[0].classList.contains('hide') && document.getElementsByClassName('branding')[0].classList.contains('hide')){  
    bjidw();
  }
  else if (document.getElementsByClassName('coding ')[0].classList.contains('hide') && document.getElementsByClassName('branding')[0].classList.contains('hide')){  
    cjidw();
  }
  else {
    getWindowSpec();
        getWindowSpec2();
  }
});

//var timeout;
//document.getElementsByClassName("temp-main-image")[0].onmouseover = function(e) {
   //     document.getElementsByClassName("temp-main-image")[0].classList.add("SENDTOBACK");
 //       document.getElementsByClassName("temp-main-image")[1].classList.add("SENDTOFRONT");
      //  document.getElementsByClassName("page-2")[0].classList.add("SENDTOFRONT");
     //  /         document.getElementsByClassName("page-1")[0].classList.remove("SENDTOFRONT");
//};

//document.getElementsByClassName("temp-main-image")[1].onmouseover = function(e) {
 //
   //     document.getElementsByClassName("temp-main-image")[1].classList.add("SENDTOBACK");
     //   document.getElementsByClassName("temp-main-image")[0].classList.add("SENDTOFRONT");
       // document.getElementsByClassName("page-1")[0].classList.add("SENDTOFRONT");
       // document.getElementsByClassName("page-2")[0].classList.remove("SENDTOFRONT");
 //};

// MOUSE OUT
//
//

//document.getElementsByClassName("temp-main-image")[0].onmouseleave = function(e) {
     //   document.getElementsByClassName("temp-main-image")[0].classList.remove("SENDTOBACK");
    //    document.getElementsByClassName("temp-main-image")[1].classList.remove("SENDTOBACK");
       // var timeoutID = setTimeout(gred, 100);

       // function gred(){
     //   document.getElementsByClassName("page-2")[0].classList.remove("SENDTOFRONT");
   //     document.getElementsByClassName("temp-main-image")[1].classList.remove("SENDTOFRONT");
 //       document.getElementsByClassName("temp-main-image")[0].classList.remove("SENDTOFRONT");
//};
//};
//document.getElementsByClassName("temp-main-image")[1].onmouseleave = function(e) {

      //  document.getElementsByClassName("temp-main-image")[0].classList.remove("SENDTOFRONT");
     //   document.getElementsByClassName("page-1")[0].classList.remove("SENDTOFRONT");
   //             document.getElementsByClassName("temp-main-image")[1].classList.remove("SENDTOFRONT");
 //              var timeoutID = setTimeout(gred2, 100);
//
    //    function gred2(){ 
   //     document.getElementsByClassName("temp-main-image")[0].classList.remove("SENDTOBACK");
  //      document.getElementsByClassName("temp-main-image")[1].classList.remove("SENDTOBACK");
//
//};
//};
//



function ajidw(){

                divElement = document.querySelector(".one");
            divElementInfo = document.querySelector(".one-one");
            elemHeight = divElement.clientHeight + "px";
            elemInfoHeight = divElementInfo.clientHeight + "px";
                        document.querySelector(".two").style.setProperty('height', elemHeight);
            document.querySelector(".two-two").style.setProperty('height', elemInfoHeight);
                                     document.querySelector(':root').style.setProperty('--elementInfoHeight-body', (divElementInfo.clientHeight) + 'px');
}

function bjidw(){
                divElement = document.querySelector(".three");
            divElementInfo = document.querySelector(".three-three");
            elemHeight = divElement.clientHeight + "px";
            elemInfoHeight = divElementInfo.clientHeight + "px";
                        document.querySelector(".four").style.setProperty('height', elemHeight);
            document.querySelector(".four-four").style.setProperty('height', elemInfoHeight);
                                                 document.querySelector(':root').style.setProperty('--elementInfoHeight-body', (divElementInfo.clientHeight) + 'px');
}

function cjidw(){
                divElement = document.querySelector(".five");
            divElementInfo = document.querySelector(".five-five");
            elemHeight = divElement.clientHeight + "px";
            elemInfoHeight = divElementInfo.clientHeight + "px";
                                                 document.querySelector(':root').style.setProperty('--elementInfoHeight-body', (divElementInfo.clientHeight) + 'px');
                      //  document.querySelector(".four").style.setProperty('height', elemHeight);
          //  document.querySelector(".four-four").style.setProperty('height', elemInfoHeight);
}

        function getWindowSpec() {
                         if (document.querySelector('.debug')){
                           document.querySelector('.debug').innerHTML = ("Your Height: " + window.innerHeight + "px" + "<br><br>" + "Your Width: " + window.innerWidth + "px" + "<br><br>"  + "Your Pixel Ratio: " +  window.devicePixelRatio);
                       }
                       document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
                       document.querySelector(':root').style.setProperty('--ww', window.innerWidth + 'px');
                       document.querySelector(':root').style.setProperty('--pixelratio', window.devicePixelRatio);
        }

        function getWindowSpec2() {
            divElement = document.querySelector(".three");
            divElementInfo = document.querySelector(".three-three");
            elemHeight = divElement.clientHeight + "px";
            elemInfoHeight = divElementInfo.clientHeight + "px";
            document.querySelector(".one").style.setProperty('height', elemHeight);
            document.querySelector(".one-one").style.setProperty('height', elemInfoHeight);
            document.querySelector(".two").style.setProperty('height', elemHeight);
            document.querySelector(".two-two").style.setProperty('height', elemInfoHeight);
            document.querySelector(".four").style.setProperty('height', elemHeight);
            document.querySelector(".four-four").style.setProperty('height', elemInfoHeight);
                        document.querySelector(".five").style.setProperty('height', elemHeight);
            document.querySelector(".five-five").style.setProperty('height', elemInfoHeight);
        }

        function getWindowSpec3() {
                divElement = document.querySelector(".one");
            divElementInfo = document.querySelector(".one-one");
            elemHeight = divElement.clientHeight + "px";
            elemInfoHeight = divElementInfo.clientHeight + "px";
                        document.querySelector(".two").style.setProperty('height', elemHeight);
            document.querySelector(".two-two").style.setProperty('height', elemInfoHeight);
      }
