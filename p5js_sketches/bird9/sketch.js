let angle = 0;
let speed = 0.1;
let l_wing_y_pos;
let r_wing_y_pos;
let wing_amplitude = 7;
let frame = 0;

let x1 = 100;
let y1 = 100;

let x2 = 200;
let y2 = 200;

let x3 = 300;
let y3 = 300;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  strokeWeight(3);
}

function bird(start_X, start_Y) {
  r_wing_y_pos = sin(angle) * wing_amplitude + start_Y;
  l_wing_y_pos = sin(angle) * wing_amplitude + start_Y;

  line(start_X, start_Y, start_X - 20, l_wing_y_pos);
  line(start_X, start_Y, start_X + 20, r_wing_y_pos);

  angle += speed;
}

function randomizePositions() {
  x1 = random(400);
  y1 = random(400);

  x2 = random(400);
  y2 = random(400);

  x3 = random(400);
  y3 = random(400);
}

function draw() {
  background(220);

  bird(x1, y1);
  bird(x2, y2);
  bird(x3, y3);

  if (frameCount % 180 == 0) {
    randomizePositions();
  }
}
