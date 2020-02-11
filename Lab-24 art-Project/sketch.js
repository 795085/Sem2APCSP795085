const bins = 15
const particleCount = 500
const particleLifeTime = 100
let vecField
let counter = 0
let particles = []
let xLambda, yLambda
//calls the boids
var boids = [];

function setup() {
	createCanvas(800, 800);
	background(0,0,27);
	noStroke();
	// Simplex noise by Jonas Wagner
	// https://github.com/jwagner/simplex-noise.js?files=1
	simplex = new SimplexNoise()
	xLambda = (i,j) => simplex.noise2D((i + j*bins)/bins, counter/100)
	yLambda = (i,j) => simplex.noise2D(counter/-100, (j - i*bins)/-bins)
	vecField = new ParamVectorField(xLambda, yLambda, bins)
	initParticles()
	vecField.update()
	loadBoids();
}

function draw() {
	drawFlow()
	runBoids();
}

function initParticles() {
	for(let j=0; j<particleCount+1; j++) {
		particles.push(new Particle(bins, particleLifeTime))
	}
}

function drawFlow() {
	for(let j=0; j<particleCount; j++) {
		particles[j].move(vecField.u, vecField.v)
		particles[j].render(0, 0, (width+100)/bins)
	}
}

function IX(i,j) {
		return i + bins * j
}

function mousePressed() {
	setup()
}

//new code linking boid file (loads boids)
function loadBoids(){
	for(var i = 0; i < 50; i++){
    var loc = createVector(i* width, height);
    boids[i]= new Boid(random(width), random(height),random(-10,10),random(-10,10));
  }

}

//runs the boids
function runBoids(){
  for(var i = 0; i < 50; i++){
    boids[i].run();
  }
}
