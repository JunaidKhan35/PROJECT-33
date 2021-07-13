var snow = []

function setup() {
  createCanvas(800,400);
 
 boy = createSprite(400, 338, 50, 50);
 

}


function preload(){
  bgImg = loadImage("snow2.jpg")
  boyImg = loadImage("boy1.png")
}

function draw() {
  background(bgImg);
  boy.addImage(boyImg)
  boy.scale = 1.4
  drawSprites();
}

function keyPressed(){
  if(keyDown("LEFT_ARROW")){
    boy.velocityX = -2
  }

    if(keyDown("RIGHT_ARROW")){
      boy.velocityX = 2
    }

    
}