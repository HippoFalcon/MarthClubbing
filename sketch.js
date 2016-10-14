function setup() {
  createCanvas( windowWidth , windowHeight );
    background(255 , 255 , 0 , 40 );

}

function draw() {
  ellipse( mouseX , mouseY , 21 , 21  );
  fill( 104 , 0, 0 );
  noStroke();
  
  ellipse( mouseX , mouseY, 13 , 13);
  fill( 98 , 0 , 0 )
  noStroke()
}
