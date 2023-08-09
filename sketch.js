var p1, p1Img, p2, p2Img, quadra2, quadra2Img, pomo, pomoImg;

function preload(){
  
  p1Img = loadImage("p1.png");
  p2Img = loadImage("p2.png");
  quadraImg = loadImage("quadra2.jpg");
  pomoImg = loadImage("pomo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  background(quadraImg);
  
  
  drawSprites();
}
