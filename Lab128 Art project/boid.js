class Boid {
    constructor(x,y,speedX,speedY,id){
      this.loc= createVector(x,y);
      this.vel= createVector(speedX, speedY);
      this.acc= createVector(0, -10);

      speedX= 50;
      speedY= 34;

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
    for(var i = 0; i < 50; i++){
      if (this.loc.x > 200){
        translate(45*HALF_PI);
        this.acc.sub(0.46/PI);
      }else{
        this.acc.normalize();
        this.acc.div(0.1/HALF_PI);
      }

      }
    }

    update(){
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.vel.limit(75);
      rotate(PI);


    }
    render(){

      //stroke(random(200), random(40), random(0));
      stroke(235,75,0);
      //background(0);
      // fill(this.clr);
      //fill(random(245), random(75), random(0));
      line(this.loc.x, this.loc.y,width/1.5,height/1.5);

      if(this.loc.y <= this.loc.x){
        stroke(random(100), random(0), random(120));
      }else{
        shearY(0.6/PI);
        rotate(0.75/HALF_PI);
        strokeCap(ROUND);
        stroke(234, 145, 9);
        line(this.loc.x/ HALF_PI, 23, width/0.1, height/0.1);
      }

      if(this.vel.x > 10){
        stroke(224,67,45);
        line(this.loc.x/PI, 4, width/0.5, height/0.5);
      }else{
        stroke(224,34,77);
        line(this.loc.x/4, 4, width/0.7, height/0.7);
        translate(HALF_PI/5);
        rotate(130);
      }

    }

}
