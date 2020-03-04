let dot = [];
var boids = [];
var lines = [];
var balls = [];
let minR=40, maxR=600, N=48 ;

function setup() {
	createCanvas(1300, 1200);
	for (let n=0; n<N; n++) {
		let R = map(n, 0, N, minR, maxR);
		dot[n] = new Dot(R,n);
    loadBoids();
		loadLines();
		loadBalls();
	}
}

//draws the dot
function draw() {
  background(10);
  translate(width>>1, height>>1);
  for (let i=0; i< dot.length; i++) {
    let D = dot[i];
    D.render();
    D.R += 1.6;
    if (D.R >maxR) {
      D.R =minR;
    }
  }
    runBoids();
		runLines();
		runBalls();
}


//loadBoids function
 function loadBoids(){
   for(var i = 0; i < 50; i++){
     var loc = createVector(i* width, height);
     boids[i]= new Boid(random(width), random(height),random(-10,10),random(-10,10));
   }
 }


//runBoids function
 function runBoids(){
   for(var i = 0; i < 50; i++){
     boids[i].run();
   }
 }

//loadLines function
 function loadLines(){
	 for(var i = 0; i < 20; i++){
		 var loc = createVector(i*width, height);
		 lines[i] = new Line(random(width), random(height), random(-20,20), random(-20,20));
	 }
 }

 //runLines function
 function runLines(){
	 for(var i = 0; i < 20; i++){
		 lines[i].run();
	 }
 }

 //loadBalls function
 function loadBalls(){
	 for(var i= 0; i < 100; i++){
	 var loc = createVector(i*width, height);
		 balls[i]= new Ball(random(width), random(height), random(-20, 20), random(-20,20));
	 }
 }

 //runBalls function
function runBalls(){
	for(var i = 0; i < 100; i++){
		balls[i].run();
	}
}
