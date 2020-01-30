class Orbiter {
    constructor(x,y,speedX,speedY,id){
      this.loc= createVector(x,y);
      this.vel= createVector(speedX, speedY);
      this.acc= createVector(0, -5);

    }
    run(){
      this.checkEdges();
      this.update();
      this.render();
    }

    checkEdges(){
      //translate(this.speedX, this.speedY);
      //rotate(90);

      //if mouseClicked(){
        //rotateZ(180);
      //checks edges of the orbiter
        if (this.loc.x < 0){
          this.vel.x= -this.vel.x;
        }
        if (this.loc.x > width){
          this.vel.x= -this.vel.x;
        }
        if (this.loc.y < 0){
          this.vel.y= - this.vel.y;
        }
        if (this.loc.y > height ){
          this.vel.y= -this.vel.y;
        }
      }

  update(){
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.vel.limit(20);

//orbits the boid
var distToBoids;

//repels the boid
//if (this.id >= 0){
  distToBoids = this.loc.dist(boid.loc);
  console.log(distToBoids);
//}
  if (distToBoids< 145){
    this.acc= p5.Vector.sub (boid.loc, this.loc);
    this.acc.normalize();
    this.acc.mult();
  }
  if (distToBoids > 145){
    this.acc= p5.Vector.sub (boid.loc, mainBall.loc);
    this.acc.normalize();
    this.acc.mult();


    }
  }

  //end of the update function

  render(){

      //stroke(random(200), random(40), random(0));
      fill(146,34, 234);
      ellipse(this.loc.x, this.loc.y, 45, 45);
      //background(0);
      // fill(this.clr);
      //fill(random(245), random(75), random(0));


    }

}
