const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var boy,render;
var boyImg,treeImg;

function preload(){

    treeImg = loadImage("sprites/tree.png")
    boyImg = loadImage("sprites/boy.png");
    backgroundImg = loadImage("sprites/bg.png")

}

function setup(){
    createCanvas(1200,550);
    engine = Engine.create();
    world = engine.world;

   

    ground = new Base(600,540,1200,30);
    stone = new Stone(144,406,30);

    mango1 = new Mango(870,40,30)
    mango2 = new Mango(770,50,30)
    mango3 = new Mango(700,100,30)

    mango4 = new Mango(900,100,30)
    mango5 = new Mango(880,160,30)
    mango6 = new Mango(950,150,30)
    mango7 = new Mango(820,100,30)
    mango8 = new Mango(640,150,30)
    mango9 = new Mango(710,200,30)
   mango10 = new Mango(780,150,30)
   
    sling = new Launcher(stone.body,{x:144,y:406}); 

    tree = new Tree(800,530);
    
    boy = createSprite(200,460);
    boy.addImage(boyImg);
    boy.scale=0.1;

     render = Render.create({ element: document.body, engine: engine, options: { width: 1300, height: 30, wireframes: false } }); Engine.run(engine);

}

function draw(){
background(backgroundImg)

fill("white");
textSize(20)
text("Press Space to get a second Chance to Play!!",50 ,50);

tree.display();
sling.display();
stone.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);


drawSprites();
}


function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
 
    sling.fly();

}

function detectCollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lmango.body.position;
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body,false);
    }
    
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:144,y:406});
		sling.attach(stone.body);
	}
}
