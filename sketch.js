var hasDocked = false;

function preload(){
bg=loadImage("spacebg.jpg")
issImg=loadImage("iss.png")
scraftImg=loadImage("spacecraft1.1.png")
scraftuImg=loadImage("spacecraft1.png")
scraftlImg=loadImage("spacecraft3.png")
scraftrImg=loadImage("spacecraft4.png")
scraftdImg=loadImage("spacecraft2.png")
}
  function setup() {
  createCanvas(1366,657);

  
  spacecraft = createSprite(285,400)
  spacecraft.addImage(scraftImg)
  spacecraft.scale = 0.25
  
  iss = createSprite(330, 200);
   iss.addImage(issImg)
   iss.scale=0.75

}

function draw() {
  background(bg);
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(scraftlImg)
      // spacecraft.scale=0.15
spacecraft.x=spacecraft.x-1;
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(scraftrImg)
      // spacecraft.scale=0.15
spacecraft.x=spacecraft.x+1;
    }


    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(scraftdImg)
      // spacecraft.scale=0.35
// spacecraft.y=spacecraft.y+1;
    }

    if(keyDown(UP_ARROW)){
      // spacecraft.addImage(scraftuImg)
      //  spacecraft.scale=0.35
spacecraft.y=spacecraft.y-1;
// console.log(spacecraft.x)
    }
  }
  if(spacecraft.y <= (iss.y+103) && spacecraft.x <= (iss.x-15)){
    //  console.log(true)
    hasDocked = true;
    textSize(35)
    fill("white")
    text("Docking Successful!",550,500)
  }
  drawSprites();
}