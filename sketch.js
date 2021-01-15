//Create variables here

var dog,happydog,database,foods,foodstock;
var finaldog;


function preload()
{
  //load images here
  
dog = loadImage("images/sitting.png");
happydog = loadImage("images/happy.png");

}

function setup() {
  createCanvas(500,500);
  finaldog = createSprite(250,320,20,20);
  finaldog.addImage(dog);
  finaldog.scale = 0.2;

  database = firebase.database();

var  ballref = database.ref('food');
 ballref.on("value",readstock);

  
}


function draw() {  

  background(46, 139, 87);


foodstock = foods;

  fill("red");
  text("Press a key to feed coco",200,50);
  text ("food left :"+foodstock,220,200)


  if(keyWentDown(UP_ARROW)){

    writestock(foods);
    finaldog.addImage(happydog);
  }

  if(keyWentUp(UP_ARROW)){

    finaldog.addImage(dog);
  }

  drawSprites();
  //add styles here

}

function readstock(data){

foods = data.val();
console.log(foods);

}

function writestock(x){

foodstock = x-1;

database.ref('/').update({

'food': foodstock

})



}