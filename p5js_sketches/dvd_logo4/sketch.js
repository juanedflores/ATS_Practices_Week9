let x_pos = 200;
let dir = 1;

function preload() {
  dvd = loadImage('/ATS_Practices_Week9/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, x_pos, 200, 80, 60);

  if (x_pos > width - 80 || x_pos < 0) {
    dir = dir * -1;
  }

  x_pos = x_pos + dir;

  textSize(30);
  text('x_pos: ' + round(x_pos, 2), 40, height - 50);
}
