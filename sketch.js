
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var leftSide,rightSide,bottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(50,50,20);
	ground= new Ground(400,650,800,50);

	leftSide=new Dustbin(450,560,20,100);
	rightSide=new Dustbin(650,560,20,100);
	bottom=new Dustbin(550,620,200,20);

	//Engine.run(engine);
  
}


function draw() {
	background(0);
  Engine.update(engine);
  //rectMode(CENTER);
  
  paper.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
		//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}

}

