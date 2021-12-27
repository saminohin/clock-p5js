function setup() {
  createCanvas(1000, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  // strokeWeight(4);
  // stroke(255);
  // noFill();
  // ellipse(200, 200, 300);
  
  strokeWeight(8);
  stroke(162, 0, 255); // color for sec 
  noFill();
  
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  
  //This line of code is for second
  push(); // push and pop means it will only work for this line
  rotate(secondAngle);
  stroke(162, 0, 255); //color for sec
  line(0, 0, 100, 0);
  pop();
  
  //This line of code 
  stroke(59, 108, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  //This line is for minute
  push(); // push and pop means it will only work for this line
  rotate(minuteAngle);
  stroke(59, 108, 255); //color 
  line(0, 0, 75, 0);
  pop();
  
  
  stroke(44, 252, 3);
  let hourAngle = map(hr % 12, 0, 12, -90, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  //This line code i for hours
  push(); // push and pop means it will only work for this line
  rotate(hourAngle);
  stroke(44, 252, 3); //color 
  line(0, 0, 50, 0);
  pop();
  
  
  fill(14, 99,255);
  noStroke();
  text(hr + ":" + mn + ":" + sc, 10, 200);
}