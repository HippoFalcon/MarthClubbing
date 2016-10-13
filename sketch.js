function setup() {
  createCanvas( windowWidth , windowHeight );
  background(255 , 0 , 0);
}

function draw() {
  ellipse( mouseX , mouseY , mouseX , mouseY  );
  fill( 0 , 0 , 255 );
  noStroke();
  triangle( mouseX+40 , mouseY+30 , mouseX-40 , mouseY+30, mouseX , mouseY-40);
  fill(  0 , 255 , 0 );
}
