let x_pos = 0;

function preload() {
  img = loadImage('/assets/cloud1.png');
}

function setup() {
  createCanvas(400, 400);
  smooth();
}

function reset() {
  x_pos = -img.width;
}

// function mousePressed() {
//   reset();
// }

function draw() {
  background(3, 169, 244);
  image(img, x_pos, 100);

  x_pos = x_pos + 0.4;

  if (x_pos > 400 + img.width) {
    x_pos = -img.width;
  }

  textSize(30);
  text('x_pos: ' + round(x_pos, 2), 40, height - 50);
}
