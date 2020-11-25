var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, g
var SurvivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}



function setup() {


  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("mon", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(500, 350, 900, 10);
  ground.velocityX = -5;
  ground.x = ground.width / 2;


 obstacleGroup = new Group();
  FoodGroup = new Group();

}


function draw() {

  background(255);

  if (ground.x < 0)
    ground.x = ground.width / 2;

  if (keyDown("space") && monkey.y > 280) {

    monkey.velocityY = -12;

  }

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);


  obs();
  bans();
  drawSprites();
  
  stroke("black");
  textSize(20)
  fill("blue");
  SurvivalTime  = Math.ceil(frameCount/frameRate())
   text("Survival Time: " + SurvivalTime,120,140 );
 // console.log(SurvivalTime)
}



function obs() {

  if (frameCount % 60 == 0) {
    var obstacle = createSprite(400, 120, 10, 40);
    obstacle.addImage("obs", obstacleImage);
    obstacle.velocityX = -6
    obstacle.lifetime = 300;
    obstacle.y = Math.round(random(310, 310));
    obstacleGroup.add(obstacle)
    obstacle.scale=0.18;

  }


}

function bans() {

  if (frameCount % 80 == 0) {
    var banana = createSprite(250, 200, 10, 40);
    banana.addImage("bananas", bananaImage);
    banana.velocityX = -6
    banana.lifetime = 300;
    banana.y = Math.round(random(150,200));
    FoodGroup.add(banana)
    banana.scale=0.1;

  }


}