let x_pos = 200;

function preload() {
  dvd = loadImage('/ATS_Practices_Week9/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, x_pos, 200, 80, 60);

  x_pos = x_pos + 1;
}
