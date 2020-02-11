class Boid {
    constructor(x,y,speedX,speedY,id, xLambda, yLambda){
      this.loc= createVector(x,y);
      this.vel= createVector(speedX, speedY);
      this.acc= createVector(0, -5);

      speedX= 70;
      speedY= 40;
      this.xLambda = xLambda
  		this.yLambda = yLambda

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
        translate(cos(120)*HALF_PI);
        this.acc.sub(0.6/PI);
      }else{
        this.acc.normalize();
        this.acc.div(0.1*HALF_PI);
      }

      }
    }

    update(){
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.vel.limit(100);
      rotate(1.5*PI);


    }
    render(){

      //stroke(random(200), random(40), random(0));
      stroke(167, 156,5);
      //background(0);
      // fill(this.clr);
      //fill(random(245), random(75), random(0));
      line(this.loc.x, this.loc.y,width/1.5,height/1.5);

      if(this.loc.y <= this.loc.x){
        stroke(random(100), random(0), random(120));
      }else{
        shearX(1/PI);
        rotate(sin(60));
        strokeCap(ROUND);
        stroke(79, 56, 150);
        line(this.loc.x/ 1.5, 23, width/this.yLambda, height/0.1);
      }

      if(this.vel.x > 10){
        stroke(179,67,196);
        line(this.loc.x/4, 4, width/0.5, height/0.5);
      }else{
        strokeCap(ROUND);
        stroke(10,234,210);
        line(this.loc.x/4, 4, width/0.7, height/0.7);
        translate(HALF_PI/6);
        rotate(180/this.xLambda);
      }

    }

}
