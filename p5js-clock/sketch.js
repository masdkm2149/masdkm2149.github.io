
var w = window.innerWidth;
var h = window.innerHeight;  

window.addEventListener('resize', function(event) {
  // assigns new values for width and height variables
  w = window.innerWidth;
h = window.innerHeight;  
	console.log(w + " " + h)
  createCanvas(w, h);	
  draw();
}, true);
function setup() {
  canvas=createCanvas(w, h);
}
var multiplicator = 1.5


function draw() {
  background(0, 0, 0);
  colorMode(HSB);
  let i = 1;
  //
  push();
  HOURS();
  pop();
  push();
  MINUTES();
  pop();
  push();
  SECONDS();
  pop();
}
//
//
//
//
//
//
//HOURS
//
function HOURS() {
  push();
  let multiplicator = 1.975;
  translate(-135, -66);
  //translate(windowWidth % width - 100, -windowHeight / windowHeight + 42);
  if (hour() == 1 && minute() == 0 && second() == 0) {
    currentHr8 = 8;
    for (let i = 0; i < 8; i++) {
      hourBlocks();
    }
    translate(-560 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-140 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(280 * multiplicator, -70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-140 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-320 * multiplicator, 70 * multiplicator);
    hourBlocks20();
  }
  else if (hour() > 0 && hour() <= 8) {
    currentHr8 = hour();
  } else if (hour() > 8 && hour() <= 10) {
    currentHr8 = hour() - 8;
    for (let i = 0; i < 8; i++) {
      hourBlocks();
    }
    translate(-320 * multiplicator, 70 * multiplicator);
    hourBlocks20();
  } else if (hour() > 10 && hour() <= 12) {
    currentHr8 = hour() - 10;
    for (let i = 0; i < 8; i++) {
      hourBlocks();
    }
    translate(-560 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(520 * multiplicator, 0 * multiplicator);
    hourBlocks20();
  } else if (hour() > 12 && hour() <= 14) {
    currentHr8 = hour() - 12;
    for (let i = 0; i < 8; i++) {
      hourBlocks();
    }
    translate(-560 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(280 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-320 * multiplicator, 70 * multiplicator);
    hourBlocks20();
  } else if (hour() > 14 && hour() <= 16) {
    currentHr8 = hour() - 14;
    for (let i = 0; i < 8; i++) {
      hourBlocks();
    }
    translate(-560 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(280 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-560 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(520 * multiplicator, 0 * multiplicator);
    hourBlocks20();
  } else if (hour() > 16 && hour() <= 24) {
    currentHr8 = hour() - 16;
    for (let i = 0; i < 8; i++) {
      hourBlocks();
    }
    translate(-560 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-140 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(280 * multiplicator, -70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-140 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-320 * multiplicator, 70 * multiplicator);
    hourBlocks20();
  } else if (hour() == 0) {
    currentHr8 = hour() + 8;
    for (let i = 0; i < 8; i++) {
      hourBlocks();
    }
    translate(-560 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-140 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(280 * multiplicator, -70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-140 * multiplicator, 70 * multiplicator);
    for (let i = 0; i < 2; i++) {
      hourBlocks();
    }
    translate(-320 * multiplicator, 70 * multiplicator);
    hourBlocks20();
  } else {
    currentHr8 = 1;
  }
  currentH = currentHr8;
  for (let i = 0; i < currentHr8; i++) {
    hourBlocks();
  }
  pop();
}
//
//
//
//MINUTES
//
function MINUTES() {
  push();
  let multiplicator = 1.48;
  translate(0, 1.7);
  //translate(-846, -550);
  if (minute() > 0 && minute() <= 11) {
    currentMin12 = minute();
  } else if (minute() > 11 && minute() <= 22) {
    currentMin12 = minute() - 11;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
        translate(35.5, 0);
    minuteBlocks20();
  } else if (minute() > 22 && minute() <= 24) {
    currentMin12 = minute() - 22;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(35.5, 0);
    minuteBlocks20();
  } else if (minute() > 24 && minute() <= 26) {
    currentMin12 = minute() - 24;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(443.3 * multiplicator, -23.33 * multiplicator);
    minuteBlocks20();
  } else if (minute() > 26 && minute() <= 28) {
    currentMin12 = minute() - 26;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(443.3 * multiplicator, -23.33 * multiplicator);
    minuteBlocks20();
  } else if (minute() > 28 && minute() <= 30) {
    currentMin12 = minute() - 28;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(23.3 * multiplicator, 0 * multiplicator);
    minuteBlocks20();
  } else if (minute() > 30 && minute() <= 32) {
    currentMin12 = minute() - 30;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(23.3 * multiplicator, 0 * multiplicator);
    minuteBlocks20();
  } else if (minute() > 32 && minute() <= 34) {
    currentMin12 = minute() - 32;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(443 * multiplicator, -23.33 * multiplicator);
    minuteBlocks20();
  } else if (minute() > 34 && minute() <= 36) {
    currentMin12 = minute() - 34;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(23.3 * multiplicator, 0 * multiplicator);
    minuteBlocks20();
  } else if (minute() > 36 && minute() <= 38) {
    currentMin12 = minute() - 36;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(443 * multiplicator, -23.33 * multiplicator);
    minuteBlocks20();
  } else if (minute() > 38 && minute() < 49) {
    currentMin12 = minute() - 38;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(23.3 * multiplicator, 0 * multiplicator);
    minuteBlocks20();
    } else if (minute() > 49 && minute() < 60) {
    currentMin12 = minute() - 49;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(23.3 * multiplicator, 0 * multiplicator);
    minuteBlocks20()
  } else { 
    currentMin12 = 11;
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(163.3 * multiplicator, 0 * multiplicator);
    for (let i = 0; i < 2; i++) {
      minuteBlocks();
    }
    translate(-256.5 * multiplicator, 23.33 * multiplicator);
    for (let i = 0; i < 11; i++) {
      minuteBlocks();
    }
    translate(23.3 * multiplicator, 0 * multiplicator);
    minuteBlocks20()
      }
  currentMinH = currentMin12;
  for (let i = 0; i < currentMinH; i++) {
    minuteBlocks();
  }
  pop();
}
//
//console.log(second());
//SECONDS
//
function SECONDS() {
	translate(0,5);
  if (second() < 10) {
    currentSec10 = second();
  } else if (second() > 10 && second() <= 20) {
    //console.log(second() - 10);
    currentSec10 = second() - 10;
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    secondBlocks20();
  } else if (second() > 20 && second() <= 30) {
    //console.log(second() - 20);
    currentSec10 = second() - 20;
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(0, 0);
    secondBlocks20();
  } else if (second() > 30 && second() <= 40) {
    //console.log(second() - 30);
    currentSec10 = second() - 30;
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(0, 0);
    secondBlocks20();
  } else if (second() > 40 && second() <= 50) {
    //console.log(second() - 40);
    currentSec10 = second() - 40;
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(0, 0);
    secondBlocks20();
  } else if (second() > 50 && second() < 60) {
    //console.log(second() - 50);
    currentSec10 = second() - 50;
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    secondBlocks20();

  }
  if (second() == 0) {
    console.log(second() + 60);
    currentSec10 = second() + 10;
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    translate(-200, 20);
    for (let i = 0; i < 10; i++) {
      secondBlocks();
    }
    secondBlocks20();
  }
  //console.log(currentSec);
  currentSecH = currentSec10;
  //console.log(currentSecH);
  for (let i = 0; i < currentSecH; i++) {
    secondBlocks();
  }
}
//
//
//
//
function hourBlocks() {
  push();
  fill(hour() * 14 % 360, 100, 100);
  square(windowWidth / 2 - 288 * multiplicator, windowHeight / 2 - 117 * multiplicator, 92 * multiplicator);
  pop();
  //console.log(huewheel);
  translate(92.2 * multiplicator, 0);
}

function hourBlocks20() {
  translate(-316 * multiplicator, 0);
  push();
  fill(170, 100, 100);
  square(windowWidth / 2 - 288 * multiplicator, windowHeight / 2 - 117 * multiplicator, 92 * multiplicator);
  pop();
}

function minuteBlocks() {
	let multiplicator = 1.48;
  push();
  fill(minute() * 6 % 180, 100, 100);
  square(windowWidth / 2 - 137 * multiplicator, windowHeight / 2 - 47 -39.2 * multiplicator, 23.325 * multiplicator);
  pop();
  //console.log(huewheel);
  translate(23.325 * multiplicator, 0);
}

function minuteBlocks20() {
		let multiplicator = 1.48;
  translate(-280 * multiplicator, 23.325 * multiplicator);
  push();
  fill(minute() * 3 > 45 % 335, 100, 100);
  square(windowWidth / 2 - 137 * multiplicator, windowHeight / 2 - 47 - 39.2 * multiplicator, 23.325 * multiplicator);
  pop();
}

function secondBlocks() {

  push();
  fill(second() * 6 % 360, 100, 100);
  square(windowWidth / 2 - 114, windowHeight / 2 - 29.2, 20);
  pop();
  //console.log(huewheel);
  translate(20, 0);
}

function secondBlocks20() {
  translate(-200, 20);
  push();
  fill(second() * 6 % 360, 100, 100);
  square(windowWidth / 2 - 114, windowHeight / 2 -29.2, 20);
  pop();
}


