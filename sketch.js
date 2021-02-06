
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,125,600,35)

	Bob1 = new Bob(200,550,50)
	Bob2 = new Bob(300,550,50)
	Bob3 = new Bob(400,550,50)
	Bob4 = new Bob(500,550,50)
	Bob5 = new Bob(600,550,50)

	Rope1 = new Rope(Bob1.body,{x:200,y:125})
	Rope2 = new Rope(Bob2.body,{x:300,y:125})
	Rope3 = new Rope(Bob3.body,{x:400,y:125})
	Rope4 = new Rope(Bob4.body,{x:500,y:125})
	Rope5 = new Rope(Bob5.body,{x:600,y:125})

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  roof.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  
}

function keyPressed(){
	if(keyCode === 32){
       Body.setPosition(Bob1.body,{x:-100,y:-500})
	}
}

