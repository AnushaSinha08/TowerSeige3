const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonIMG
var score=0;

function preload(){
  polygonIMG = loadImage("polygon.png")
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,height,1200,20);
    
    stand1 = new Ground(400,260,250,10);
    
    stand2 = new Ground(600,200,250,10);
   
    block1 =new Box(330,235,30,40);
    
    block2 = new Box(360,235,30,40);
    
    block3 = new Box(390,235,30,40);
    
    block4 = new Box(420,235,30,40);
   
    block5 = new Box(360,155,30,40);
   
    block6 = new Box(345,195,30,40);
    
    block7 = new Box(375,195,30,40);
   
    block8 = new Box(405,195,30,40);
   
    block9 = new Box(390,155,30,40);
   
    block10 = new Box(375,115,30,40);
    
    block11 = new Box(615,175,30,40);
   
    block12 = new Box(645,175,30,40);
  
    block13 = new Box(675,175,30,40);
  
    block14 = new Box(630,135,30,40);
  
    block15 = new Box(660,135,30,40);
  
    block16 = new Box(645,95,30,40);
    
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

        slingShot = new SlingShot(this.polygon,{x:100,y:200});

        
}

function draw() {
  background(255);
  textSize(20);
  text("SCORE : "+score,750,40);

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();

  ground.display();
  
  stand1.display(); 
  stand2.display();
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
 
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  
  block16.display();

imageMode(CENTER);
  image(polygonIMG,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingShot.fly();
}