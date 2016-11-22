var balls = [];
var ball;
var howmany = 10;

function setup() {
  createCanvas(800, 600);
  
for (var i = 0; i< howmany ; i++) {  
balls[i] = new GavinsBall(random(width),random(height),random(8),random(15,80));  
  // balls[0] = ball;
  // // balls[1] = ball2;
  // console.log(balls.length);
  

}
}

function draw() {
  background(0, 200, 150);
  fill(255);
  

for (var i = 0; i< howmany ; i++) {  
  balls[i].drawball();
  balls[i].move();
  balls[i].detectEdge();
} 
}
  // balls[1].drawball();
  // balls[1].move();
  // balls[1].detectEdge();

  // displayCircles();
  // detectBounce();
  
// ellipse(ball1.x, ball1.y, 20, 20);
// // ellipse(ball2.x, ball2.y, 20, 20);
// detectBounce();
// }

// the CONSTRUCTOR FUNCTION

function GavinsBall(x, y, speed, size, col){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.size = size;
  
this.drawball = function() {
  stroke(255,0,255);
  fill(250,250,250);
  ellipse(this.x, this.y, this.size, this.size);
}  
  this.move = function(){
    this.x=this.x+this.speed;
  }
  
  this.detectEdge = function(){
    if(this.x >= width|| this.x <=0){
      this.speed = this.speed*-1;
    }
    if(this.x >= width|| this.x <=0){
      this.size = this.size*1.5;
    }
  }
}


// function detectBounce() {
//   ball1.x = ball1.x + ball1.speed;
//   ball2.x = ball2.x + ball2.speed;
  
//     if (ball2.x >= width || ball2.x <= 0) {
//     ball2.speed = ball2.speed * -1
//   }

//   if (ball1.x >= width || ball1.x <= 0) {
//     ball1.speed = ball1.speed * -1
//   }
// }


// function displayCircles() {

//   for (var i = 0; i < 30; i++) {
//     for (var j = 0; j < 30; j++) {
//       stroke(0);
//       ellipse((i*20)+ xpos,(j*20)+ypos, 10, 10);
//     }
//   }
// }