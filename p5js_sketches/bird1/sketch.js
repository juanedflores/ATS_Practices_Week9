let angle = 0;
let birdX = 100;
let birdY = 100;
let birdS = 10;
let birdSpd = 0.1;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  strokeWeight(birdS / 5);
}

function draw() {
  background(220);

  let f = sin(angle);

  angle += birdSpd;

  line(birdX - birdS, birdY + birdS * f, birdX, birdY);
  line(birdX + birdS, birdY + birdS * f, birdX, birdY);

  birdX++;
  if (birdX > width + birdS) {
    birdX = -birdS;
  }
}
