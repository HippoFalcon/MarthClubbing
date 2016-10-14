function setup() {
  createCanvas( windowWidth , windowHeight );
    background(69 , 69 , 69 , 40 );

}

function draw() {
  ellipse( mouseX , mouseY , 21 , 21  );
  fill( 104 , 0, 0 , 40);
  noStroke();
  
  ellipse( mouseX , mouseY, 13 , 13 );
  fill( 0 , 104 , 0 , 40);
  noStroke();
  
  ellipse(mouseX , mouseY , 7 , 7);
  fill(0 , 0 , 104 , 40);
  noStroke();
}
