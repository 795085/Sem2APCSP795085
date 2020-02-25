class Particle{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.vel = createVector(random(-.5, -.5), random(-.5, -.5));
    this.acc = createVector(0,0);
    this.rad = random(13, 24);
    this.radians = Math.random *Math.PI*2;
    this.lifespan = random(1500);
    this.orbiters = [];
    this.loadOrbiters(5);
    this.angle = random(TWO_PI);
  }


  run(){
    this.update();
    this.render();

  }


  loadOrbiters(){
    for(var i = 0; i < 5; i++){
     this.orbiter[i].push(new Orbiter(createVector(width/2, height/2)));
      this.runOrbiters();
      }
  }

  runOrbiters(){
      for(var i = 0; i < orbiters.length; i++){
        orbiter[i].run();
      }

  }

  update(){
    this.radians += this.vel;
    this.loc.x = x + Math.cos(this.radians)*100;
    this.loc.y= y + Math.sin(this.radians)*100;
  }

  render(){
    fill(255,0,0)
    stroke(255);
    ellipse(this.loc.x, this.loc.y, 20, 20);
  }
}
