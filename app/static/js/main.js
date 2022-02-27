var bgImg;

function preload() {
    bgImg = loadImage("static/img/background.jpg");
}

function setup() {
  createCanvas(1280, 680, WEBGL);
  noStroke();
  video = createCapture(VIDEO);
  video.size(1280, 680);
  video.position(0, 0);
  video.hide();
}

function draw() {
  background(bgImg);

  // "Fix" the coordinate system
  let img = video.get( 0, 0, 1280, 680);


  // Arbitrary demonstration of a 3d object drawn on top of the video
  texture(img)

  let rotationX = Math.cos(frameCount/2)/16
  rotateX(rotationX)
  let rotationY = Math.PI + Math.sin(frameCount/4)/8
  rotateY(rotationY)
  let translationY = 10*Math.sin(frameCount/4)
  translate(0, translationY)
  sphere(200);
}
