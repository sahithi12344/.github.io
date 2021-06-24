const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var snow = [];
var snOw = [];

var bg ;
var backgroundImg

function preload() {
  getBackgroundImg();

}


function setup(){ 
  createCanvas(1000,400)

  engine = Engine.create();
  world = engine.world


  for (var j = 25; j <=width-10; j=j+50) 
  {
    snow.push(new Snow(j,375));
  }

  for (var j = 25; j <=width-10; j=j+50) 
  {
    snOw.push(new Snow2(j,375));
  }


 

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);

Engine.update(engine)


for(var p = 0; p < snow.length; p++){
 snow[p].display();
 }

 
for(var l = 0; l < snOw.length; l++){
  snOw[l].display();
  }

  if(frameCount%60===0){ 
  snow.push(new Snow(random(width/2-10,width/2+10),15,90))
  
  }

  if(frameCount%90===0){ 
    snow.push(new Snow(random(width-30,width/2+10),15,90))
    
    }

    if(frameCount%20===0){ 
      snow.push(new Snow(random(width/9+10,width/2-10),150,390))
      
      }

      
    if(frameCount%10===0){ 
      snOw.push(new Snow2(random(width/9-10,width/2-10),150,390))
      
      }
      Engine.run(engine)
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour)
  
  if(hour>=00 && hour<=06){
    bg = "snow1.jpg";
}
else
  if(hour>=06 && hour<=07){ 
  bg = "snow.gif"
}
else
if(hour>=07 && hour<=08){
  bg = "I.GIF"
}
else
if(hour>=08&&hour<=10){
  bg="images.jpg"
}
else
if(hour>=10&&hour<=12){
  bg="snow2.jpg"
}
else
if(hour>=12 && hour<15){
  bg="p.gif"
}
else
if(hour>=15 && hour<=18 ){
  bg="snow2.jpg"
}
else
if(hour>=18 && hour<=20){
  bg = "snow3.jpg"
}
else
if(hour>=20 && hour<=00){
  bg = "o.gif"
}

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

