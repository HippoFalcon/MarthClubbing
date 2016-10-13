function setup() {
  createCanvas( 800 , 800 );
  background(255 , 0 , 0);
}

function draw() {
  line( mouseX , mouseY , 50 , 50 );
  fill( 0 , 0 , 255 );
  noStroke();
}
