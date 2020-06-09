var canvasWidth = 500
var canvasHeight = 400

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  colorMode(RGB);
}


function draw() {
  background(236, 147, 147);
  
  fill('white');  
  var isEven = true
  for (var x = 0; x<= canvasWidth; x+= canvasWidth/20) {
    for (var y = 0; y<= canvasHeight; y+= canvasHeight/10) {  
      // even row
      if (isEven) {
        unbalancedHeart(x+canvasWidth/40,y,canvasWidth/100);
      }
      else {
        unbalancedHeart(x-canvasWidth/40,y,canvasWidth/100);
      }
      isEven = !isEven //logical negation
    }
  }
  
  
  //color triangle before heart
  fill('white'); 
  triangle(0, 0, canvasWidth, 0, canvasWidth/2, canvasHeight/2);
  
  fill(212,27,44); //Northeastern Red
  stroke(79, 0, 9);
  strokeWeight(2);
  unbalancedHeart(canvasWidth/2, canvasHeight/2*0.8, 75);
}


function unbalancedHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  // left-half
  bezierVertex(x - size, y - size, x - size * 1.5, y + size / 2, x, y + size);
  // right-half
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}