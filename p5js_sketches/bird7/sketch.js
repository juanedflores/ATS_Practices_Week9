let angle = 0;
let speed = 0.1;
let l_wing_y_pos;
let r_wing_y_pos;
let wing_amplitude = 7;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  strokeWeight(3);
}

function bird(start_X, start_Y) {
  r_wing_y_pos = sin(angle) * wing_amplitude + 200;
  l_wing_y_pos = sin(angle) * wing_amplitude + 200;

  line(start_X, start_Y, 180, l_wing_y_pos);
  line(start_X, start_Y, 220, r_wing_y_pos);

  angle += speed;
}

function draw() {
  background(220);
  bird(100, 100);
  bird(300, 300);
}
