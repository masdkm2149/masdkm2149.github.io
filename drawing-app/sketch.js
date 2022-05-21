function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
    textSize(20);
  text('Press [1] for Default Brush', 40, 40);
  fill(360, 0, 100);
  background(0);
  noStroke();
  textSize(20);
  text('Press [0] to Reset Canvas', 40, 40);
  text('Press [1] for Default Brush', 40, 70);
  text('Press [2] to Pause Color', 40, 100);
  text('Press [3] for Alternate Brush', 40, 130);
  text('Press [4] for Symmetrical Brush', 40, 160);
  text('Press [5] to Pause Brush', 40, 190);
}

function brush1() {
  fill(frameCount % 360, frameCount + 40, 100);
}

function brush2() {
  let frame = console.log(frameCount)
  fill(frame % 180, frame + 40, 100);
}

let Brush = 1

function draw() {
  noStroke();
  if (key == '1') {
  Brush = 1;
  BrushColor = 1;
  Key1();
  }
  if (key == '2') {
  Key2();
  }
  if (key == '3') {
  Brush = 2;
    BrushColor = 1;
  Key3();
  }
  if (key == '4') {
  Brush = 3;
  BrushColor = 1;
  Key4();
  }
  if (key == '5') {
    push();
    let Weight = 0
    let form_brush_x = mouseX
    let form_brush_y = mouseY
    let form_brush_s = Weight
    brush1();
    ellipse(form_brush_x, form_brush_y, form_brush_s);
    pop();
  }
}

let cachedMouseX = -1;

function Key1() {
  if (key == '1') {
        console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    size2 = map(mouseX * frameCount, 0, mouseY * frameCount, 0, 100);
    form_brush_x = mouseX
    form_brush_y = mouseY
    form_brush_s = size2
    brush1();
    ellipse(form_brush_x, form_brush_y, form_brush_s);
  }
}

function Key2() {
  if (BrushColor == 1 && Brush == 1 && key == '2') {
    BrushColor = 0;
    console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    size2 = map(mouseX * frameCount, 0, mouseY * frameCount, 0, 100);
    form_brush_x = mouseX
    form_brush_y = mouseY
    form_brush_s = size2
    brush1();
    ellipse(form_brush_x, form_brush_y, form_brush_s);
  }
    else if (BrushColor == 0 && Brush == 1 && key == '2') {
      BrushColor = 0;
    console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    size2 = map(mouseX * frameCount, 0, mouseY * frameCount, 0, 100);
    form_brush_x = mouseX
    form_brush_y = mouseY
    form_brush_s = size2
    brush2();
    ellipse(form_brush_x, form_brush_y, form_brush_s);
  }
   else if (BrushColor == 1 && Brush == 3 && key == '2') {
    BrushColor = 0
    console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    size2 = map(mouseX * frameCount, 0, mouseY * frameCount, 0, 100);
    form_brush_x = mouseX
    form_brush_y = mouseY
    form_brush_s = size2
         brush2();
    ellipse(form_brush_y, form_brush_x, form_brush_s);
    ellipse(form_brush_x, form_brush_y, form_brush_s);
}
     else if (BrushColor == 0 && Brush == 3 && key == '2') {
    BrushColor = 0
    console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    size2 = map(mouseX * frameCount, 0, mouseY * frameCount, 0, 100);
    form_brush_x = mouseX
    form_brush_y = mouseY
    form_brush_s = size2
    brush2();
    ellipse(form_brush_y, form_brush_x, form_brush_s);
    ellipse(form_brush_x, form_brush_y, form_brush_s);
}
     else if (BrushColor == 1 && Brush == 2 && key == '2') {
    BrushColor = 0;
    console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    let Weight = tan(frameCount * frameCount % 100) * 30
    let form_brush_x = mouseY
    cachedMouseX = mouseX;
    let form_brush_y = cachedMouseX
    let form_brush_s = Weight
    brush1();
    ellipse(form_brush_y, form_brush_x, form_brush_s);
}
     else if (BrushColor == 0 && Brush == 2 && key == '2') {
    BrushColor = 0
    console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    let Weight = tan(frameCount * frameCount % 100) * 30
    let form_brush_x = mouseY
    cachedMouseX = mouseX;
    let form_brush_y = cachedMouseX
    let form_brush_s = Weight
    brush2();
    ellipse(form_brush_y, form_brush_x, form_brush_s);
}
}

function Key3() {
    if (console.log(BrushColor) == 1 || Brush == 2 || key == '3') {
    BrushColor = 0
    console.log('Brush color:', BrushColor);
    console.log('Brush:', Brush);
    let Weight = tan(frameCount * frameCount % 100) * 30
    let form_brush_x = mouseY
    cachedMouseX = mouseX;
    let form_brush_y = cachedMouseX
    let form_brush_s = Weight
    brush1();
    ellipse(form_brush_y, form_brush_x, form_brush_s);
  }

}

function Key4() {
  if (key == '4') {
    size2 = map(mouseX * frameCount, 0, mouseY * frameCount, 0, 100);
    form_brush_x = mouseX
    form_brush_y = mouseY
    form_brush_s = size2
    if (BrushColor == 1 && Brush == 3) {
      brush1();
      ellipse(form_brush_y, form_brush_x, form_brush_s);
      ellipse(form_brush_x, form_brush_y, form_brush_s);
    }
    else if (BrushColor == 0 && Brush == 3) {
      brush2();
      ellipse(form_brush_y, form_brush_x, form_brush_s);
      ellipse(form_brush_x, form_brush_y, form_brush_s);
    }
  }
}

function keyTyped() {
  if (key == '0') {
    background(0);
    push();
    textSize(20);
      fill(360, 0, 100);
  text('Press [0] to Reset Canvas', 40, 40);
  text('Press [1] for Default Brush', 40, 70);
  text('Press [2] to Pause Color', 40, 100);
  text('Press [3] for Alternate Brush', 40, 130);
  text('Press [4] for Symmetrical Brush', 40, 160);
  text('Press [5] to Pause Brush', 40, 190);
  pop();
  }
}