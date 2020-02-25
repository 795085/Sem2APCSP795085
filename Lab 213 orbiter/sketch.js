
var particles = [];
var count = 0;
function setup() {
	createCanvas(1300, 1200);

}

//draws the dot
function draw() {
  background(10);
  if(count%30 === 0){
		loadParticle(1);
	}
	count++;
}

//loadBoids function
 function loadParticle(){
	for(var i = 0; i < 1; i++){
   particles.push(new Particle(createVector(width/2, height/2)));
 		}
 }

//runBoids function
 function runParticles(){
   for(var i = 0; i < particles.length; i++){
     particles[i].run();
   }
 }
