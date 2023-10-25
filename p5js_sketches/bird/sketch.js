let angle = 0;
let speed = 0.1;
let y_pos;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  strokeWeight(3);
}

function draw() {
  background(220);

  y_pos = sin(angle);

  point(200, y_pos);

  angle += speed;

  textSize(30);
  text('y_pos: ' + round(y_pos, 2), 40, height - 50);
}
