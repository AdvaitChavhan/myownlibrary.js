var fixedRect, movingRect;
var gameobj1,gameobj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobj1 = createSprite(100,200,50,80);
  gameobj1.shapeColor = "green";
  gameobj2 = createSprite(100,400,50,80);
  gameobj2.shapeColor = "green";
  gameobj1.velocityY=5;
  gameobj2.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceoff(gameobj1,gameobj2)
if (istouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}
