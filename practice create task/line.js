class Line{
    constructor(x,y,speedX,speedY,id, xLambda, yLambda){
      this.loc= createVector(x,y);
      this.vel= createVector(speedX, speedY);
      this.acc= createVector(0, 15);

      speedX= 100;
      speedY= -100;
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
    for(var i = 0; i < 20; i++){
      if(this.loc.x > 90){
        translate(sin(-10)/this.xLambda);
        rotate(this.loc.x/50);
      }else{
        rotate(tan(90)/cos(PI));
        translate(cos(48)*this.loc.y);
      }

      }
    }

    update(){
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.acc.limit(15);
      this.vel.limit(79);


    }
    render(){
      strokeWeight(3);
      stroke(23, 156, 234);
      line(20, sin(this.loc.x/ PI), this.loc.x, cos(87));

      //for loop making more lines
      for(var i = 0; i < 20; i++){
        if(this.vel.x > cos(this.loc.x/ 5)){
          strokeWeight(cos(145));
          stroke(256,27, 197);
          line(sin(this.loc.y), 100, 56, cos(90));
        }else{
          strokeWeight(cos(134));
          stroke(256, 27, 197);
          line(100, sin(this.loc.y), 67, cos(80));
        }
      }

    }

}
