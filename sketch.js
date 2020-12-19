
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1,bin2,bin3;

function preload(){
//Dustbin = loadImage("dustbin.png");

}

function setup() {
	createCanvas(1300,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground (450,430,1700,20);
paper = new Paper(100,390);
bin1=new Dustbin (1200,350,20,150);
bin2= new Dustbin(950,350,20,150);
bin3= new Dustbin(1075,425,250,20);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("orange");
  
 
ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();

//image(Dustbin,505,430,200,238);

    drawSprites();

}
function keyPressed(){
     
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



	



