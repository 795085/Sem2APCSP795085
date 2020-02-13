let dot = [];
var boids = [];
let minR=40, maxR=600, N=48 ;

function setup() {
	createCanvas(1300, 1200);
	for (let n=0; n<N; n++) {
		let R = map(n, 0, N, minR, maxR);
		dot[n] = new Dot(R,n);
    loadBoids();
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
