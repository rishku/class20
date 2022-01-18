
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall;
var rock;
function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options ={
    restitution : 0.85,
    frictionAir:0.01
  }
  ball = Bodies.circle(100,50,20, ball_options);
  World.add(world,ball);

  rock = Bodies.circle(200,20,20,ball_options);
  World.add(world,rock);

  var ground_options={
    isStatic : true,
  }
  ground = Bodies.rectangle(0,380,400,10, ground_options);
  World.add(world,ground)

  wall = Bodies.rectangle(200,300,200,10, ground_options);
  World.add(world,wall)
}

function draw() 
{
  background(51);
  Engine.update(engine);
 
  ellipse(ball.position.x, ball.position.y, 20,20);
  ellipse(rock.position.x, rock.position.y, 20,20);
  rect(ground.position.x, ground.position.y, 400,10)
  rect(wall.position.x, wall.position.y, 200,10);
}

