var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
  box.shapeColor="red";
  
}


function draw() 
{
  background("purple");
  if(keyDown("up")){
    box.velocityY=-2
    
  }
  if(keyDown("down")){
    box.velocityY=2
  } 
  
  

  drawSprites()

}




