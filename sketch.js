//Create variables here

var dog,happyDog;
var database;
var foodS,foodStock;

var happyDogImage,dogImage;

function preload()
{
  //load images here
  
  happyDogImage = loadImage("images/happydog.png");
  dogImage = loadImage("images/Dog.png");

}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.150

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(dogHappy);
    
  }

  drawSprites();
  //add styles here

}

function readStock(data){

  foodS = data.val();

}

function writeStock(x){

  if(x <= 0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    
    Food:x
  })
}



