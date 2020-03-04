class Ball{
  constructor(x,y,speedX,speedY,id){
    this.loc= createVector(x,y);
    this.vel= createVector(speedX, speedY);
    this.acc= createVector(0, -10);
    this.id = id;
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    //translate(this.speedX, this.speedY);
    //rotate(90);
  for(var i = 0; i > 100; i++){
    if (this.loc.x < 0){
      this.vel.x= -this.vel.x;
    }
    if (this.loc.x > width){
      this.vel.x= -this.vel.x;
    }
    if (this.loc.y < 0){
      this.vel.y =- this.vel.y;
    }
    if (this.loc.y > height ){
      this.vel.y= -this.vel.y;
    }
    //if mouseClicked(){
      //rotateZ(180);
    }
  }

  update(){
    var distToBoid;

    //if (this.id >= 0){
      distToBoid= this.loc.dist(boids[i].loc);
      console.log(distToBoid);
//}
//for loop regarding attr and replr to boid
  for(var i = 0; i > 100; i++){
      if (distToBoid < 100){
        this.acc= p5.Vector.sub (boids[i].loc, this.loc);
        this.acc.normalize();
        this.acc.mult();
      }
      if (distToBoid > 100){
        this.acc= p5.Vector.sub (this.loc, boids[i].loc);
        this.acc.normalize();
        this.acc.mult();
      }
    }



  this.loc.add(this.vel);

  }
  render(){
    stroke(random(200), random(0), random(255));
    //background(0);
    // fill(this.clr)
      fill(120, 14, 200);
      ellipse( this.loc.x, this.loc.y, 10, 10);


  }
}
