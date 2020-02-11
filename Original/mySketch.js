// Franz Flückiger 2020
// thecescobauer@hotmail.com

const bins = 15
const particleCount = 500
const particleLifeTime = 100
let vecField
let counter = 0
let particles = []
let xLambda, yLambda

function setup() {
	createCanvas(600, 600);
	background(0)
	noStroke();
	// Simplex noise by Jonas Wagner
	// https://github.com/jwagner/simplex-noise.js?files=1
	simplex = new SimplexNoise()
	xLambda = (i,j) => simplex.noise2D((i + j*bins)/bins, counter/100)
	yLambda = (i,j) => simplex.noise2D(counter/-100, (j - i*bins)/-bins)
	vecField = new ParamVectorField(xLambda, yLambda, bins)
	initParticles()
	vecField.update()
}

function draw() {
	drawFlow()
}

function initParticles() {
	for(let j=0; j<particleCount+1; j++) {
		particles.push(new Particle(bins, particleLifeTime))
	}
}

function drawFlow() {
	for(let j=0; j<particleCount; j++) {
		particles[j].move(vecField.u, vecField.v)
		particles[j].show(0, 0, (width+100)/bins)
	}
}

function IX(i,j) {
		return i + bins * j
}

function mousePressed() {
	setup()
}
