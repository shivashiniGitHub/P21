var bullet,wall;

var speed,weight,thickness;

function setup() {
    createCanvas(1600,600);

    speed = random(55,90);
    weight = random(400,1500);
    thickness = random(22,83);

    bullet = createSprite(125,300,150,75);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";

    wall = createSprite(1500,300,thickness,height/2);
    wall.shapeColor = "white";
   
}

function draw() {
  background("black"); 
  if(collidedBullet(bullet,wall)){
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

   if(damage>10){
    wall.shapeColor = color(255,0,0);
   }

   if(damage<10){
    wall.shapeColor = color(0,255,0);
   }
  }
  drawSprites();

}

function collidedBullet(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}