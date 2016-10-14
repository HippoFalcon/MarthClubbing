function setup() {
  createCanvas( windowWidth , windowHeight );
    background(255 , 255 , 0 , 40 );

}

function draw() {
  ellipse( mouseX , mouseY , mouseX , mouseY  );
  fill( 104 , 0, 0 );
  noStroke();
}
