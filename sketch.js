var spaceShip;
var alien1
var alien2
var alien3
var planet

var  wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;
var wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25;
var wall26,wall27, wall28, wall29,wall30,wall31,wall32, wall33;

function preload() {
  spaceShipImage = loadImage("sprite_0.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  alien3Image = loadImage("alien3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceShip = createSprite(20, 45, 20, 20);
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale = 0.20;

  wall2 = createSprite(80, 82, 200, 15);
  wall2.shapeColor = "blue";

  wall3 = createSprite(260, 160, 15, 300);
  wall3.shapeColor = "green";

  wall4 = createSprite(175, 175, 175, 15);
  wall4.shapeColor = rgb(168, 50, 129);

  wall5 = createSprite(100, 325, 15, 150);
  wall5.shapeColor = rgb(0,14,15);

  wall6 = createSprite(225, 550, 15, 165);
  wall6.shapeColor = rgb(150,2,36);

  wall7 = createSprite(25, 400, 163, 15);
  wall7.shapeColor = rgb(200,30,25);

  wall8 = createSprite(335, 350, 15, 500);
  wall8.shapeColor = rgb(9,35,44);

  wall9 = createSprite(310, 390, 250, 15);
  wall9.shapeColor = rgb(35,80,100);

  wall10 = createSprite(500, 110, 350, 15);
  wall10.shapeColor = rgb(80,90,100);

  wall11 = createSprite(1000, 90, 325, 15);
  wall11.shapeColor = rgb(150,200,190);

  wall12 = createSprite(750, 100, 15, 550);
  wall12.shapeColor = rgb(50,100,250);

  wall14 = createSprite(1000, 700, 15, 700);
  wall14.shapeColor = rgb(55,130,250);

  wall15 = createSprite(1085, 350, 180, 15);
  wall15.shapeColor = rgb(90,40,30);

  wall16 = createSprite(1155, 430, 180, 15);
  wall16.shapeColor = rgb(10,50,70);

  wall17 = createSprite(1500, 500, 100, 15);

  wall18 = createSprite(1125, 185, 300, 15);

  wall19 = createSprite(845, 350, 15, 500);
  wall19.shapeColor = rgb(10,35,78);

  wall20 = createSprite(115, 500, 100, 15);
  wall21 = createSprite(590, 190, 325, 15);
  wall22 = createSprite(115, 500, 15, 100);
  wall22.shapeColor = rgb(27,89,250);

  wall23 = createSprite(490, 290, 300, 15);
  wall23.shapeColor = rgb(60,226,139);

  wall24 = createSprite(635,375,250,15);
  wall24.shapeColor = rgb(200,50,45);

  wall25  = createSprite(1,5,2520,20);
  wall26 = createSprite(1255,20,20,1140);
  wall27 = createSprite(1,600,2520,20);
  wall28 = createSprite(10,350,20,550);
  wall29 = createSprite(575,525,300,15);
  wall29.shapeColor = rgb(75,23,90);

  wall30 = createSprite(525,450,15,140);
  wall30.shapeColor = rgb(150,25,135);

  wall31 = createSprite(428,425,15,70);
  wall31.shapeColor = rgb(100,250,221);

  wall32 = createSprite(1000,275,300,15);
  wall33 = createSprite(1090,515,170,15);

  alien1 = createSprite(80,535,15,15);
  alien1.addImage(alien1Image);
  alien1.scale = 0.08;

  alien2 = createSprite(555,415,15,15);
  alien2.addImage(alien2Image);
  alien2.scale = 0.08;

  alien3 = createSprite(1210,470,15,15);
  alien3.addImage(alien3Image);
  alien3.scale = 0.08;

}

function draw() {
  background(51);

  if(keyDown("up")){
    spaceShip.y -= 3;
  }
  if(keyDown("down")){
    spaceShip.y += 3;
  }
  if(keyDown("left")){
    spaceShip.x -= 3;
  }
  if(keyDown("right")){
    spaceShip.x += 3;
  }
  spaceShip.bounce(wall2);
  spaceShip.bounce(wall3);
  spaceShip.bounce(wall4);
  spaceShip.bounce(wall5);
  spaceShip.bounce(wall6);
  spaceShip.bounce(wall7);
  spaceShip.bounce(wall8);
  spaceShip.bounce(wall9);
  spaceShip.bounce(wall10);
  spaceShip.bounce(wall11);
  spaceShip.bounce(wall12);
  spaceShip.bounce(wall14);
  spaceShip.bounce(wall15);
  spaceShip.bounce(wall16);
  spaceShip.bounce(wall18);
  spaceShip.bounce(wall19);
  spaceShip.bounce(wall20);
  spaceShip.bounce(wall21);
  spaceShip.bounce(wall22);
  spaceShip.bounce(wall23);
  spaceShip.bounce(wall24);
  spaceShip.bounce(wall25);
  spaceShip.bounce(wall26);
  spaceShip.bounce(wall27);
  spaceShip.bounce(wall28);
  spaceShip.bounce(wall29);
  spaceShip.bounce(wall30);
  spaceShip.bounce(wall31);
  spaceShip.bounce(wall32);
  spaceShip.bounce(wall33);
  spaceShip.bounce(alien1);
  spaceShip.bounce(alien2);
  spaceShip.bounce(alien3);

  drawSprites()
}