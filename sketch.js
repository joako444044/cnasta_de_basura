const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body
let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ball_options = {
    restitution:0.95,
  };
  btn_right = createImg("right.png")
  btn_right.position(330,20);
  btn_right.size(40,40);
  btn_right.mouseClicked(force_right);
  btn_up = createImg("up.png");
  btn_up.position(20,20);
  btn_up.size(40,40);
  btn_up.mouseClicked(force_up);
  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  wall_1 = new Ground(100,390,20,100)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function force_up(){
  body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
function force_right(){
  body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  wall_1.show()
  Engine.update(engine);
}

