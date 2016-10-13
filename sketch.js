function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  ellipse( mouseX , mouseX , mouseY , mouseY  );
  fill( 104 , 0, 0 );
  noStroke();
  background(255 , 255 , 0 , 40 );
}
