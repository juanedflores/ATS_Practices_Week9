let x_pos = 100;
let x_dir = 1;
let y_pos = 200;
let y_dir = 1;
let r = 125;
let g = 125;
let b = 125;

function preload() {
  dvd = loadImage('/ATS_Practices_Week9/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function randomColors() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(200);
  tint(r, g, b);
  image(dvd, x_pos, y_pos, 80, 60);

  if ((x_pos > width - 80) | (x_pos < 0)) {
    x_dir = x_dir * -1;
    randomColors();
  }

  if ((y_pos > height - 60) | (y_pos < 0)) {
    y_dir = y_dir * -1;
    randomColors();
  }

  x_pos = x_pos + x_dir;
  y_pos = y_pos + y_dir;

  textSize(30);
  text('x_pos: ' + round(x_pos, 2), 40, height - 70);
  text('y_pos: ' + round(y_pos, 2), 40, height - 40);
}
