const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,bodies;
var ground,box1,slingshot,box2,box3,box4,box5,box6,box7,box8,box9,box10
var slingshot,polygon;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground=new Ground(600,400,1200,20);
  box1=new box(600,250,50,50);
  box2=new box(620,250,50,50);
  box3=new box(640,250,50,50);
  box4=new box(660,250,50,50);
  box5=new box(630,200,50,50);
  box6=new box(650,200,50,50);
  box7=new box(620,200,50,50);
  box8=new box(640,150,50,50);
  box9=new box(610,150,50,50);
  box10=new box(615,100,50,50);
  polygon=Bodies.circle(50,200,20);
  slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  box1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  slingshot.display();
  polygon.display();
  drawSprites();
}