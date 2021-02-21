
var monkey;
var monkey_running;
var banana; 
var bananaImage;
var obstacle;
var obstacleImage;
var foodsGroup;
var obstaclesGroup;
var score=0;

function preload() {

 monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")     
  
 bannanaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
 createCanvas(600,500);
 
 monkey=createSprite(80,315,20,20); 
 monkey.addAnimation('running',monkey_running); 
 monkey.scale=0.1; 
  
 ground=createSprite(400,350,900,10);

 obstaclesGroup= new Group();
 bannanasGroup= new Group();
  
}

function draw() {
  
 background('lightblue');
  
 monkey.collide(ground);
  
 if(keyDown("space")&&monkey.y>=300) {
  monkey.velocityY = -12;        
}
 monkey.velocityY = monkey.velocityY + 0.8;
 
 score = score + Math.round(getFrameRate()/60);
  
 spawnobstacles();
 spawnBannanas();

 drawSprites();

 fill('black');
 textSize(20); 
 text('Survival Time : '+score,275,50);
  
}

function spawnobstacles() {
 if (frameCount % 200 === 0){
  var obstacles = createSprite(600,329,10,40);
  obstacles.addImage(obstacleImage);
  obstacles.velocityX = -(6 + score/100);
  obstacles.scale = 0.1;
  obstacles.lifetime = 450;
  obstaclesGroup.add(obstacles);
 }
}

function spawnBannanas() {
 if (frameCount % 100 === 0) {
  var bannanas = createSprite(600,160,10,10);
  bannanas.y = Math.round(random(120,200));
  bannanas.addImage(bannanaImage);
  bannanas.scale = 0.1;
  bannanas.velocityX = -3;
  bannanas.lifetime = 220;
  monkey.depth = bannanas.depth;
  bannanas.depth = monkey.depth + 1;
  bannanasGroup.add(bannanas);
 }
}
