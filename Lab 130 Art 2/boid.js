class Boid {
    constructor(x,y,speedX,speedY,id){
      this.loc= createVector(x,y);
      this.vel= createVector(speedX, speedY);
      this.acc= createVector(0, -10);



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
    }

    update(){
      //adds vel and acc
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.vel.limit(75);
    }
    render(){
      //push and pop
      push();
      rotate(this.loc.x/COSIN);
      stroke(120,45,275);
      line(this.loc.x, this.loc.y, 45, 45);
      pop();
      //stroke(random(200), random(40), random(0));

    }
  }
