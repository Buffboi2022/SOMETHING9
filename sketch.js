var BLOCK 
function setup() {
  createCanvas(800,800);
  BLOCK=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    BLOCK.position.x=BLOCK.position.x+5
  }
  if (keyIsDown(LEFT_ARROW)){
    BLOCK.position.x=BLOCK.position.x-5
  }if (keyIsDown("space")){
    BLOCK.position.y=BLOCK.position.y+5
  }
  if (keyIsDown("l")){
    BLOCK.position.y=BLOCK.position.y-5
  }
  if (keyIsDown(RIGHT_ARROW)){
    BLOCK.position.x=BLOCK.position.x+5
  }
drawSprites()
}




