function preload() {
  dvd = loadImage('/ATS_Practices_Week9/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, 200, 200, 80, 60);
}
