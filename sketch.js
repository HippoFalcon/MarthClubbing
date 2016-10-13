function setup() {
  createCanvas( windowWidth , windowHeight );
  background(255 , 0 , 0);
}

function draw() {
  ellipse( mouseX , mouseY , mouseX , mouseY  );
  fill( 0 , 0 , 255 , 100 );
  noStroke();
}
