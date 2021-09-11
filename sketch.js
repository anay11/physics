const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var wedge;
var angle = 60;
var wall;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(10,390,400,20,ground_options);
  World.add(world,ground);

  var wedge_options = {
    isStatic: true
  }
  wedge= Bodies.rectangle(100,200,100,20,wedge_options);
  World.add(world,wedge);

  wall = Bodies.rectangle(300,150,70,10,ground_options);
  World.add(world,wall);
}

function draw(){
  background(50);
  Engine.update(engine);


  Matter.Body.rotate(wedge,angle);
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle += 0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,70,10)
}