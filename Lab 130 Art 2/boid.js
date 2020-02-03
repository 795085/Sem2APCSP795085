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
        for(var i = 0; i > 50; i++){
          if(this.vel.x >= 10){
            translate(44);
            rotate(45);
          }
        }
    }

    update(){
      //adds vel and acc
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.vel.limit(100);
    }
    render(){
      //push and pop
      push();
      rotate(this.loc.x/cos(150));
      translate(45);
      stroke(120,45,275);
      line(this.loc.x, this.loc.y, 75, 75);
      pop();

      if(this.loc.y >= 50){
        stroke(95, 20, 138);
        line(this.loc.x/cos(5), this.loc.y/cos(5), 45, 45);
        rotate(90);
        shearY(4);
      }else{
        stroke(95, 20, 138);
        line(this.loc.x * tan(35), this.loc.y * tan(35), 45, 45);
        translate(250);
        rotate(60);
      }

      if(this.loc.x <= 45){
          stroke(103, 145, 235);
          line(this.loc.x * sin(150), this.loc.y* sin(150), 55, 55);
          rotate(this.loc.x/cos(150));
        } else{
          stroke(103, 145, 235);
          line(this.loc.x * sin(10), this.loc.y * sin(10), 55, 55);
          rotate(PI);
          this.vel.sub(this.loc.x);
          this.acc.sub(2);
          shearY(0.75);
        }

      //stroke(random(200), random(40), random(0));


    }
  }
