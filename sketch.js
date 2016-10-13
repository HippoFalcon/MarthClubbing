function setup() {
  createCanvas( windowX , windowY );
  background(255 , 0 , 0);
}

function draw() {
  ellipse( mouseX , mouseY , 10 , 10 );
  fill( 0 , 0 , 255 );
  noStroke();
}
