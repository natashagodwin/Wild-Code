/*
A random walker that has a tendency to move down and to the right.
*/

class Walker {
  constructor() {
    // The object will be centered on the screen.
    this.x = width / 2
    this.y = height / 2
  }
  
  show() {
    stroke(0);
    point(this.x, this.y);
  }
  
  step() {
    let number = random(1); // a random number from 0 to 1
    
    if (number < 0.4) {
      this.x++;
    } else if (number < 0.6) {
      this.x--;
    } else if (number < 0.8) {
      this.y++
    } else {
      this.y--;
    }
    
  }
}

let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}
