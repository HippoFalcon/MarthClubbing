function setup() {
  createCanvas( 800 , 800 );
  background(255 , 0 , 0);
}

function draw() {
  ellipse( mouseX , mouseY , mouseY-50 , mouseX-50 );
  fill( 0 , 0 , 255 );
  noStroke();
}
