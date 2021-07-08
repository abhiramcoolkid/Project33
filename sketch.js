var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions;
var particle;

var divisionHeight=300;
var score =0;
var turn=0;
var gameState;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  text('Score : '+ score,900,50)

//hello maam i hope you seee this um, the divisions part right here is not working, i checked the class aswell as created a proper variable for divisions. it keeps on saying that divisions is not defined, so im really not able to do this part. you wont be able to see the displayed part of this project, until the Divisions part is properly defined. 
  divisions = new Divisions(k, divisionHeight/2, 10, divisionHeight);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions,{x: k, y: divisionHeight/2, w: 10, h: divisionHeight});
   }
   


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState !== 'end'){
    turn++;
    particle =new Particle(mouseX, 10, 10, 10);
  }
}

if(particle=null){
particle.display();

  if(this.particle.position.y>760){

    if(this.particle.position.x<300){
    score=score+500;
    particle=null;
  if (turn>=5) {
  gameState === "end";
}
}
  if(this.particle.position.x>301 && this.particle.position.x<600){
    score=score+100;
    particle=null;

    if(turn>=5){
      gameState === "end";

    }

  }

  if(this.particle.position.x>601 && this.particle.position.x<900){
    score=score+200;
    particle=null;

    if(turn>=5){
      gameState === "end";

    }

  }
}

}
if(gameState === "end"){
  text("Game Over",200,50)
}