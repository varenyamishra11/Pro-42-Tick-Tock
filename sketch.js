var hr,min,sec
var secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  textSize(20);
  fill(255);
  textFont("Comic sans MS");
  text("12",200,100);
  text("1",255,115);
  text("2",290,155);
  text("3",310,207);
  text("4",290,259);
  text("5",255,305);
  text("6",200,320);
  text("7",145,305);
  text("8",100,259);
  text("9",85,199);
  text("10",100,155);
  text("11",145,115);
  
  
  hr = hour();
  min = minute();
  sec = second();

  textFont("Comic sans MS");
  fill(255);
  textSize(25);
  text(hr + ":" + min + ":" + sec,400,500); 

  textFont("Gabriola");
  text("By Varenya Mishra",400,400)
  translate(200,200);
  rotate(-90);

  strokeWeight(2);
  stroke(164, 252, 172);
  noFill();
  secAngle = map(sec,0,59,0,360);
  arc(0,0,300,300,0,secAngle);

  push();
  rotate(secAngle);
  line(0,0,90,0)
  pop();

  strokeWeight(4);
  stroke(0, 199, 255);
  noFill(); 
  minAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minAngle);

  push();
  rotate(minAngle);;
  line(0,0,50,0)
  pop();

  strokeWeight(6);
  stroke(244, 75, 177);
  noFill();
  hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  line(0,0,50,0)
  pop();

  drawSprites();
  //Adreno Script Demo Regular
}