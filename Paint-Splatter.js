class Canvas {
  constructor() {
    this.x = width / 2
    this.y = height / 2
  }
  
  paint() {
    let x = randomGaussian(200, 40);
    let y = randomGaussian(200, 80);
    
    let randomRed = randomGaussian(225, 10);
    let randomGreen = randomGaussian(164, 15);
    let randomBlue = randomGaussian(194, 12);
    
    let size = randomGaussian(25, 5);
    
    noStroke();
    fill(randomRed, randomGreen, randomBlue);
    circle(x, y, size);
  }
  
}

let canvas;

function setup() {
  createCanvas(400, 400);
  canvas = new Canvas();
  background(225);
}

function draw() {
  canvas.paint();
}
