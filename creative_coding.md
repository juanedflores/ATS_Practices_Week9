## Week 9
### (Functions, Modularity, & Abstractions)

---

#### Review
<!-- .slide: class=".uk-width-1-1" -->  
Motion/Animation <!-- .element: class="fragment" -->

<embed type="text/html" src="p5js_sketches/simple_sine/index.html" width="400px" height="400px"> <!-- .element: class="fragment" -->

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Incrementation

<embed type="text/html" src="p5js_sketches/mario_cloud/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z_xq_6Yda" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Incrementation
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x_pos = 0;

function preload() {
  img = loadImage('/assets/cloud.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(3, 169, 244);
  image(img, x_pos, 100);

  if (x_pos > img.width) {
    x_pos = -img.width;
  }
  
  x_pos = x_pos + 0.4;
}
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="|1-3|1-3|4-6|8-10|12-14|20|20|16-18|16-18" -->
</pre>

<embed type="text/html" src="p5js_sketches/mario_cloud/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Direction 1
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
function preload() {
  dvd = loadImage('/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, 200, 200, 80, 60);
}
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="1-13" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Direction 2
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x_pos = 200;

function preload() {
  dvd = loadImage('/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, x_pos, 200, 80, 60);

  x_pos = x_pos + 1;
}
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="2|16|14" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Direction 3
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x_pos = 200;

function preload() {
  dvd = loadImage('/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, x_pos, 200, 80, 60);

  x_pos = x_pos + 1;
}
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="14" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo2/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Direction 4
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x_pos = 200;
let dir = 1;

function preload() {
  dvd = loadImage('/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, x_pos, 200, 80, 60);

  if (x_pos > width - 80) {
    dir = -1;
  }

  x_pos = x_pos + dir;

  textSize(30);
  text('x_pos: ' + round(x_pos, 2), 40, height - 50);
}
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="3|21|17-19" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo3/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Direction 5
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
function draw() {
  background(200);
  image(dvd, x_pos, 200, 80, 60);

  if (x_pos > width - 80) {
    dir = -1;
  }

  if (x_pos < 0) {
    dir = 1;
  }

  x_pos = x_pos + dir;
}
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="6-12" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo4/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Direction 6
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
if (x_pos > width - 80) {
  dir = -1;
}

if (x_pos < 0) {
  dir = 1;
}

x_pos = x_pos + dir;
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="1-10" -->
</pre>

&ensp;  
&ensp;  
&ensp;  

<pre style="width:500px">
<code>
if ((x_pos > width - 80) | (x_pos < 0)) {
  dir = dir * -1;
}

x_pos = x_pos + dir;
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="1-6" -->
</pre>

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Direction 7
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x_pos = 100;
let x_dir = 1;
let y_pos = 200;
let y_dir = 1;

function preload() {
  dvd = loadImage('/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(dvd, x_pos, y_pos, 80, 60);

  if ((x_pos > width - 80) | (x_pos < 0)) {
    x_dir = x_dir * -1;
  }

  if ((y_pos > height - 60) | (y_pos < 0)) {
    y_dir = y_dir * -1;
  }

  x_pos = x_pos + x_dir;
  y_pos = y_pos + y_dir;
}
</code> <!-- .element: class="data-line-numbers" style="font-size: 14px" data-line-numbers="1-5|19-28|17" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo5/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Change Color
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x_pos = 100;
let x_dir = 1;
let y_pos = 200;
let y_dir = 1;
let r = 125;
let g = 125;
let b = 125;

function preload() {
  dvd = loadImage('/assets/dvd.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  tint(r, g, b);
  image(dvd, x_pos, y_pos, 80, 60);

  if ((x_pos > width - 80) | (x_pos < 0)) {
    x_dir = x_dir * -1;
    r = random(255);
    g = random(255);
    b = random(255);
  }

  if ((y_pos > height - 60) | (y_pos < 0)) {
    y_dir = y_dir * -1;
    r = random(255);
    g = random(255);
    b = random(255);
  }

  x_pos = x_pos + x_dir;
  y_pos = y_pos + y_dir;

  textSize(30);
  text('x_pos: ' + round(x_pos, 2), 40, height - 70);
  text('y_pos: ' + round(y_pos, 2), 40, height - 40);
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 14px" data-line-numbers="6-8|23-35|20" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo6/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### Functions
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x_pos = 100;
let x_dir = 1;
let y_pos = 200;
let y_dir = 1;
let r = 125;
let g = 125;
let b = 125;

function preload() {
  dvd = loadImage('/assets/dvd.png');
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

</code> <!-- .element: class="data-line-numbers" style="font-size: 14px" data-line-numbers="18-22|29-37" -->
</pre>

<embed type="text/html" src="p5js_sketches/dvd_logo6/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---



#### Modularity
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  
Bundle up code into a package.

<img src="/ATS_Practices_Week9/assets/sandin.jpg" style="width: 600px"></img>

<img src="/ATS_Practices_Week9/assets/osc_module.jpg" style="width: 600px"></img>

---

#### Reusability
Use a single line of code to call the large block of code again and again anywhere you want.

---

#### Abstraction
Hide complexity behind a function. 

For example, a custom function called "cat()" will draw a cat, without needing to think of all the shapes involved in drawing a cat.

---


#### bird()

<embed type="text/html" src="p5js_sketches/bird1/index.html" width="400px" height="400px">

---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
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
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 14px" data-line-numbers="2-4|8|17|19|15" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
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

  y_pos = sin(angle) + 200;

  point(200, y_pos);
  
  angle += speed;
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 14px" data-line-numbers="15" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird2/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
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

  y_pos = sin(angle) * 50 + 200;

  point(200, y_pos);

  angle += speed;
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 14px" data-line-numbers="15" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird3/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
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

function draw() {
  background(220);

  r_wing_y_pos = sin(angle) * wing_amplitude + 200;
  l_wing_y_pos = sin(angle) * wing_amplitude + 200;

  point(180, r_wing_y_pos);
  point(200, 200);
  point(220, l_wing_y_pos);

  angle += speed;
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 12px" data-line-numbers="4-5|21|20-22|17-22" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird4/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
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

function draw() {
  background(220);

  r_wing_y_pos = sin(angle) * wing_amplitude + 200;
  l_wing_y_pos = sin(angle) * wing_amplitude + 200;

  line(200, 200, 180, l_wing_y_pos);
  line(200, 200, 220, r_wing_y_pos);

  angle += speed;
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 12px" data-line-numbers="20-21" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird5/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
function bird() {
  r_wing_y_pos = sin(angle) * wing_amplitude + 200;
  l_wing_y_pos = sin(angle) * wing_amplitude + 200;

  line(200, 200, 180, l_wing_y_pos);
  line(200, 200, 220, r_wing_y_pos);

  angle += speed;
}

function draw() {
  background(220);
  bird();
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 11px" data-line-numbers="2-10|14" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird6/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
function bird(start_X, start_Y) {
  r_wing_y_pos = sin(angle) * wing_amplitude + 200;
  l_wing_y_pos = sin(angle) * wing_amplitude + 200;

  line(start_X, start_Y, 180, l_wing_y_pos);
  line(start_X, start_Y, 220, r_wing_y_pos);

  angle += speed;
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 11px" data-line-numbers="2|6-7" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird6/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
function draw() {
  background(220);
  bird(100, 100);
  bird(300, 300);
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 11px" data-line-numbers="1-7" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird7/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
function bird(start_X, start_Y) {
  r_wing_y_pos = sin(angle) * wing_amplitude + start_Y;
  l_wing_y_pos = sin(angle) * wing_amplitude + start_Y;

  line(start_X, start_Y, start_X - 20, l_wing_y_pos);
  line(start_X, start_Y, start_X + 20, r_wing_y_pos);

  angle += speed;
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 11px" data-line-numbers="2-10|3-4|6-7" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird8/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
let x1 = 100;
let y1 = 100;

let x2 = 200;
let y2 = 200;

let x3 = 300;
let y3 = 300;

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

</code> <!-- .element: class="data-line-numbers" style="font-size: 11px" data-line-numbers="2-10|25-27|29-31|11-20" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird9/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### bird()
<!-- .slide: class="uk-column-1-2 uk-column-divider uk-vertical-align-middle" -->  

<pre>
<code>
function draw() {
  background(220);

  bird(x1, y1);
  bird(x2, y2);
  bird(x3, y3);

  for (let i = 0; i < 4; i++) {
    bird(random(400), random(400));
  }

  if (frameCount % 180 == 0) {
    randomizePositions();
  }
}

</code> <!-- .element: class="data-line-numbers" style="font-size: 11px" data-line-numbers="9-11" -->
</pre>

<embed type="text/html" src="p5js_sketches/bird10/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/Z3wA715Xe" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>


---

#### Collaborative P5js

<iframe width="800" height="600" src="https://www.youtube.com/embed/7HubjUPIftQ?si=iL-dd5GV9Z41CGEY&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
