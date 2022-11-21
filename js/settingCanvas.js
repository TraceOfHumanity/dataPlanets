var canvas = document.getElementById('space_box');
var c = canvas.getContext('2d');


var innerWidth = window.innerWidth - 20,
  innerHeight = window.innerHeight - 20,
  radius = 1,
  radiusYellStars = 2,
  radiusOrangeStars = 3,
  radiusBlackStars = 3,
  starsIndex = 0,
  stars = [],
  stars2 = [],
  stars3 = [],
  stars4 = [],
  TWO_PI = Math.PI * 2,
  centerX = innerWidth / 2,
  centerY = innerHeight / 2,
  focalLength = 500, //zoom
  starRadius = null,
  starX = null,
  starY = null,
  numStars = 500, //stars
  numStarsYell = 50, //stars
  numStarsOrange = 100, //stars
  mouse = {},
  starX_dir = 0,
  starY_dir = 0;

canvas.width = innerWidth;
canvas.height = innerHeight;

// Function for create new start
function star(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.radius = radius;
  this.color = "#ccfbff";
  starsIndex++;
  stars[starsIndex] = this;
  this.id = starsIndex;

  // Animate Stars
  this.update = function () {
    starX = (this.x - centerX) * (focalLength / this.z);
    starX += centerX;

    starY = (this.y - centerY) * (focalLength / this.z);
    starY += centerY;

    starRadius = radius * (focalLength / this.z);

    starX += starX_dir;
    starY += starY_dir;

    this.z += -0.5; //speed stars

    if (this.z <= 0) {
      this.z = parseInt(innerWidth);
    }

    this.draw();

  }

  // Function for draw star
  this.draw = function () {
    c.beginPath();
    c.arc(starX, starY, starRadius, TWO_PI, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

}
function star2(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.radiusYellStars = radiusYellStars;
  this.color = "#ffdc5e";
  starsIndex++;
  stars[starsIndex] = this;
  this.id = starsIndex;

  // Animate Stars
  this.update = function () {
    starX = (this.x - centerX) * (focalLength / this.z);
    starX += centerX;

    starY = (this.y - centerY) * (focalLength / this.z);
    starY += centerY;

    starRadius = radiusYellStars * (focalLength / this.z);

    starX += starX_dir;
    starY += starY_dir;

    this.z += -0.5; //speed stars

    if (this.z <= 0) {
      this.z = parseInt(innerWidth);
    }

    this.draw();

  }

  // Function for draw star
  this.draw = function () {
    c.beginPath();
    c.arc(starX, starY, starRadius, TWO_PI, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

}
function star3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.radiusOrangeStars = radiusOrangeStars;
  this.color = "#ff3636";
  // this.createRadialGradient(0, 150, 50, 0, 140, 90);
  starsIndex++;
  stars[starsIndex] = this;
  this.id = starsIndex;

  // Animate Stars
  this.update = function () {
    starX = (this.x - centerX) * (focalLength / this.z);
    starX += centerX;

    starY = (this.y - centerY) * (focalLength / this.z);
    starY += centerY;

    starRadius = radiusOrangeStars * (focalLength / this.z);

    starX += starX_dir;
    starY += starY_dir;

    this.z += -0.5; //speed stars

    if (this.z <= 0) {
      this.z = parseInt(innerWidth);
    }

    this.draw();

  }

  // Function for draw star
  this.draw = function () {
    c.beginPath();
    c.arc(starX, starY, starRadius, TWO_PI, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

}
function star4(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.radiusBlackStars = radiusBlackStars;
  this.color = "black";
  starsIndex++;
  stars[starsIndex] = this;
  this.id = starsIndex;

  // Animate Stars
  this.update = function () {
    starX = (this.x - centerX) * (focalLength / this.z);
    starX += centerX;

    starY = (this.y - centerY) * (focalLength / this.z);
    starY += centerY;

    starRadius = radiusBlackStars * (focalLength / this.z);

    starX += starX_dir;
    starY += starY_dir;

    this.z += -0.5; //speed stars

    if (this.z <= 0) {
      this.z = parseInt(innerWidth);
    }

    this.draw();

  }

  // Function for draw star
  this.draw = function () {
    c.beginPath();
    c.arc(starX, starY, starRadius, TWO_PI, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

}

// X,Y,Z values
var s;
for (s = 0; s < numStars; s++) {
  x = Math.random() * innerWidth;
  y = Math.random() * innerHeight;
  z = Math.random() * innerWidth;
  new star(x, y, z);
}
var s2;
for (s = 0; s < numStarsYell; s++) {
  x = Math.random() * innerWidth;
  y = Math.random() * innerHeight;
  z = Math.random() * innerWidth;
  new star2(x, y, z);
}
var s3;
for (s = 0; s < numStarsYell; s++) {
  x = Math.random() * innerWidth;
  y = Math.random() * innerHeight;
  z = Math.random() * innerWidth;
  new star3(x, y, z);
}
var s4;
for (s = 0; s < 30; s++) {
  x = Math.random() * innerWidth;
  y = Math.random() * innerHeight;
  z = Math.random() * innerWidth;
  new star4(x, y, z);
}

// Function for animate canvas objects
function animate() {
  requestAnimationFrame(animate);
  // c.fillStyle = "#000";
  // Create gradient
  var grd = c.createLinearGradient(100, 100, 2000, 680);
  grd.addColorStop(0, "black");
  grd.addColorStop(1, "#00171b");

  // Fill with gradient
  c.fillStyle = grd;
  c.fillRect(0, 0, innerWidth, innerHeight);

  // c.fillRect(0, 0, innerWidth, innerHeight);
  // c.globalAlpha = 0.7;

  for (var i in stars) {
    stars[i].update();
  }
  for (var i in stars2) {
    stars2[i].update();
  }
}

animate();


