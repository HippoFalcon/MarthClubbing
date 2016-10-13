function setup() {
  createCanvas( 800 , 800 );
  background(255 , 0 , 0);
}

function draw() {
  ellipse( mouseX , mouseY , 100 , 100 );
  fill( 0 , 255 , 0 );
  noStroke();
}
