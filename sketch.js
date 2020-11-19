const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
  console.log(ground);

  var balloptions={
    restitution:1.0
  }
  ball=Bodies.circle(400,200,40,balloptions);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(0);  
 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,40);
}