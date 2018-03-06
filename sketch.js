function setup() {
  //arrange sketch inside html div
  var canvas = createCanvas(600, 720);
  canvas.parent("#sketch");

  //aesthetics
  noStroke();
}

function draw() {
  //sleep
  fill(66, 244, 176);
  rect(0,0,480,480);

  //work
  fill(212, 137, 229);
  rect(480,120,120,120);

  //food
  fill(193, 89, 106);
  rect(480,0,120,120);

  //class
  fill(242, 181, 181);
  rect(0,480,240,240);

  //morning prep
  fill(242, 167, 138);
  rect(480,240,60,60);

  //bed prep
  fill(163, 127, 216);
  rect(540,240,60,60);

  //homework + extracurriculars
  fill(152, 189, 234)
  rect(240,480,360,240);
  rect(480,300,120,180);

  //set mouseover titles
  fill(255);

  //largest blocks - mouseover positions for class, sleep
  textSize(40);
  if (mouseX > 0 && mouseX < 480 && mouseY > 0 && mouseY < 480) {
    text("Sleep", 200, 240);
  }

  if (mouseX > 0 && mouseX < 240 && mouseY > 480 && mouseY < 720) {
    text("Class", 70, 600);
  }

  //midsize blocks - mouseover positions for work, meals, and hw/extras
  textSize(20);
  if (mouseX > 480 && mouseX < 600 && mouseY > 0 && mouseY < 120) {
    text("Work", 515, 65);
  }

  if (mouseX > 480 && mouseX < 600 && mouseY > 120 && mouseY < 240) {
    text("Meals", 515, 185);
  }

  if ((mouseX > 240 && mouseX < 600 && mouseY > 480 && mouseY < 720) ||
  (mouseX > 480 && mouseX < 600 && mouseY > 300 && mouseY < 480)) {
    text("Homework/Extracurriculars", 300, 600);
  }

  //small blocks - mouseover positions for prep hours
  textSize(10);
  if (mouseX > 480 && mouseX < 540 && mouseY > 240 && mouseY < 400) {
    text("Morning Prep", 480, 275);
  }

  textSize(10);
  if (mouseX > 540 && mouseX < 600 && mouseY > 240 && mouseY < 400) {
    text("Bed Prep", 550, 275);
  }

}
