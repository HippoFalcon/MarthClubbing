function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  ellipse( mouseX , mouseY , mouseX , mouseY  );
  fill( 0 , 0 , 255 );
  noStroke();
  triangle( mouseX+40 , mouseY+30 , mouseX-40 , mouseY+30, mouseX , mouseY-40);
  fill(  0 , 255 , 0 );
  background(255 , 0 , 0 , 40 );
}
