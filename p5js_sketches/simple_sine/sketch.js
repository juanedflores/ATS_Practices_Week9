var angle = 0;
var angle_rot = 0;
var num_circles = 100;
var w = 70;
let x = 0;

function setup() {
  createCanvas(400, 400);
  // 0 - TWO_PI
  // TWO_PI = 6.28

  // 180 degrees = PI
  angleMode(DEGREES);

  offset = TWO_PI / num_circles;
}

function draw() {
  background(220, 10);

  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < width; i++) {
    rotate(angle_rot);
    scale(0.9);
    new_y = sin(angle + offset * i) * 200 + 300;
    fill((i / 2) * 255, (i / 3) * 255, (i / 5) * 255);
    ellipse(i * w, new_y, w);
  }
  pop();

  for (let i = 0; i < width; i++) {
    rotate(angle);
    scale(0.9);
    new_x = cos(angle + offset) * 200 + 300;
    fill(255, 0, 0);
    ellipse(new_x, i * w, w);
  }

  angle = angle + 0.05;
  angle_rot = angle_rot + 0.5;
}
