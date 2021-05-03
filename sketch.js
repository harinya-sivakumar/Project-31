const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var world, engine;
var maxdrops = 100;
var drops = [];
var umbrella;
var lightning;
console.log();


function preload() {
    
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;


    //drop1 = new Drop(9, 9);

    for(var i=1; i <= maxdrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }

    umbrella = new Umbrella(200, 550);
    lightning = new Lightning(200, 0);
   
}

function draw(){
    background(0);
    Engine.update(engine);

   for(var i=0; i < maxdrops; i++){
       drops[i].display();
       drops[i].update();
   }
   
    umbrella.display();
    //drop1.display();
    if(frameCount % 100 == 0){
        
        lightning.display();
    }
    

      
}