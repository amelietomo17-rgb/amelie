let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);
  rotate(angle);

  stroke(0);          
  strokeWeight(8);    
  strokeCap(ROUND);  
  noFill();

  let size = 100;

  for (let i = 0; i < 8; i++) {
    line(0, -size, 0, size);
    rotate(45); 
  }

  angle += 1; 
}

