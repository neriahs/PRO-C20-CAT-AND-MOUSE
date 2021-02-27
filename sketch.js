var cat
var mouse

function preload() {
    //load the images here
bgImg = loadImage("images/garden.png")
catImg = loadImage("images/cat1.png")
catRunningImg = loadAnimation("images/cat2.png", "images/cat3.png")
mouseImg = loadAnimation("images/mouse1.png", "images/mouse2.png", "images/mouse3.png", "images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800, 650)
    cat.addAnimation("catImg", catImg)
    cat.addAnimation("catRunningImg", catRunningImg)
    cat.scale = 0.2

    mouse = createSprite(100, 650)
    mouse.addAnimation("mouseImg", mouseImg)
    mouse.scale = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide


    if (keyDown(LEFT_ARROW)){
    cat.x = cat.x -2
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("space")){
    cat.changeAnimation("catRunningImg", catRunningImg)

  }
}
