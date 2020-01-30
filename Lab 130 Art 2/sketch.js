var boids = [];
var orbiter;
var i,j,n,temp;
//var i,j,n,temp

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids([50]);
  loadOrbiter();
}

function draw(){
  runBoids();
  runOrbiter();
}
//swap code
function loadBoids(){
  for(var i = 0; i < 50; i++){
    var loc = createVector(i* width, height);
    boids[i]= new Boid(random(width), random(height),random(-10,10),random(-10,10));
  }
}

function loadOrbiter(){
  orbiter= new Orbiter(20, 20, 20, 20);
}

function runBoids(){
  for(var i = 0; i < 50; i++){
    boids[i].run();
  }
}

function runOrbiter(){
  orbiter.run();
}
