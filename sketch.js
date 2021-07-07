const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   cbase= new Computerbase(width-400,height-300,230,230);
   pbase= new Playerbase(400,height-295,230,230);
   cplayer=new Player('assets/robot-waving.gif',380,290,100,180);
   pplayer=new Player('assets/girl.png',width-400,280,100,180);


 }

function draw() {

  background('#a5e5ff');

  Engine.update(engine);

  // Title
  fill("#510620");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
      cbase.display();
      pbase.display();

   //display Player and computerplayer
      cplayer.display();
      pplayer.display();


}
