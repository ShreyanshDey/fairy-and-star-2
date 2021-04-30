var starImg,bgImg;
var star
var fairyImg,fairy
function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg= loadAnimation("fairyImage1.png","fairyImage2")
}
function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

    
	star = createSprite(400,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fairy = createSprite(400,500);
    fairy.addAnimation("f",fairyImg);
    fairy.scale = 0.5;

   
    
}
function draw() {
    background(bgImg);
  
    
    console.log(star.y);
    if (keyCode=== DOWN_ARROW) {
        star.velocityY=5
    }
    if (star.y===fairy.y) {
        star.velocityY=0
    }
    //write code to stop star in the hand of fairy
  
    drawSprites();
  
  }