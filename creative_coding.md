## Week 9
### (Functions, Modularity, & Abstractions)

---

#### Review
<!-- .slide: class=".uk-width-1-1" -->  
Motion/Animation <!-- .element: class="fragment" -->

<embed type="text/html" src="p5js_sketches/simple_sine/index.html" width="400px" height="400px"> <!-- .element: class="fragment" -->

---

#### Incrementation

<embed type="text/html" src="p5js_sketches/mario_cloud/index.html" width="400px" height="400px">

<a href="https://editor.p5js.org/JuanEdFlores/sketches/nuHR1Y2LV" style="display: block; float: right;"><img src="./assets/p5-logo.svg" width="60px"></img></a>

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

  if (x_pos > 400 + img.width) {
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
</code> <!-- .element: class="data-line-numbers" style="font-size: 15px" data-line-numbers="16" -->
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


#### Functions
We have been using functions this whole time.
```js
circle(200, 200, 40);
```
<!-- .element: class="fragment" -->

<embed type="text/html" src="p5js_sketches/circle/index.html" width="400px" height="400px"> <!-- .element: class="fragment" -->

<div></div> <!-- .element: class="fragment" -->

---

