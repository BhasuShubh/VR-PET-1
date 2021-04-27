//Create variables here
var dog;
var dogHappy, database, foodS, foodStock;
function preload()
{
 dogSad = loadImage("images/dogImg.png");
 dogHappy = loadImage("images/dogImg1.png");
}

function setup() {

	createCanvas(500, 500);
  database = firebase.database();
  database.ref("/").set({Food :20})
  dog  = createSprite(250,350);
  dog.addImage(dogSad);
  dog.scale = 0.3
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  if (keyWentUp(UP_ARROW))
  dog.addImage(dogSad);
  fill("black");
  text("Note: Press UP_ARROW Key To Feed The Dog",150,30);
  text("Food Left : "+ foodS,200,200);
  //add styles here
  //console.log(foodS);
}

function readStock(data){
  foodS = data.val();

}
function writeStock(x){
  if(x!=0)
  //x = 0
    x = x-1;
     database.ref('/').update({Food:x})

}

