const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var plinkos = [];
var partacles = [];
var engine, world;

function setup() {
  createCanvas(420,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height,1200,20);
  deivider1 = new Divider(1,755,10,300);
  deivider2 = new Divider(100,755,10,300);
  deivider3 = new Divider(199,755,10,300);
  deivider4 = new Divider(298,755,10,300);
  deivider5 = new Divider(397,755,10,300);
  for (var j = 40; j <=440; j=j+50)
{
  plinkos.push(new palinko(j,300,10));
  plinkos.push(new palinko(j,200,10));
  plinkos.push(new palinko(j,100,10));

}
    
}



function draw() {
  background(0,0,0);

  Engine.update(engine)

  deivider1.display();
  deivider2.display();
  deivider3.display();
  deivider4.display();
  deivider5.display();
  ground.display();
 for(var i = 0; i <plinkos.length; i++)
  {plinkos[i].display()}

  if (frameCount%30===0){
    partacles.push(new Particle(random(150, 250),10,10));
   }

  for(var o = 0; o <partacles.length; o++)
  {
    partacles[o].display()
  }
}


