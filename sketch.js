var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxpart1,boxpart2,boxpart3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{ restitution:0.62,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	boxpart1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	fill("red")
	World.add(world,boxpart1);


    boxpart2 = Bodies.rectangle(300,610,10,100,{isStatic:true});
	fill("red")
	World.add(world,boxpart2);

	boxpart3 = Bodies.rectangle(500,610,10,200,{isStatic:true});
    fill("red")
	World.add(world,boxpart3);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(boxpart1.position.x,boxpart1.position.y,200,20)
  rect(boxpart2.position.x,boxpart2.position.y,10,100)
  rect(boxpart3.position.x,boxpart3.position.y,10,100) 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Body.setStatic(packageBody,false)
	
    
  }
}



