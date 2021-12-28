var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
pathImg=loadImage("path.png");
boy_running = loadAnimation("jake1.png","jake3.png","jake4.png");


 
}

function setup(){
  
  createCanvas(400,400);

  path = createSprite(200,200);
  path.addImage(pathImg);
  //path = loadImage("path.png");
  path.velocityY=4;
  path.scale=1.2;

  boy = createSprite(180,340,30,30);
  boy.addAnimation("JakeRunning",boy_running);
  //boy_running = loadAnimation("jake1.png","jake3.png","jake4.png");
  boy.scale=0.8;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;
 
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  //leftBoundary=createSprite(0,0,100,800);
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  //boy=velocityX=2

  // el niño se mueve en el eje x con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary); 
  boy.collide(rightBoundary);

    
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
