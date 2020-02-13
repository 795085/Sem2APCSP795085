class Particle{
  constructor(loc){
    this.loc = loc;
    this.vel = createVector(random(-.5, -.5), random(-.5, -.5));
    this.rad = random(13, 24);
    this.lifespan = random(1500);
    this.orbiters = [];
    this.loadOrbiters(5);
    this.angle = random(TWO_PI);
  }
}
