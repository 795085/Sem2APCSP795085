//  First Constructor Function
// eettlin
// March 10, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
    this.clr = this.getColor();//random(255), random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 getColor(){
   if(this.id < 0){
    //mainBall === blue
    this.clr = color(0,0,255);
  }else if(this.id%2 === 0){
     //green
     this.clr = color(0,255,0);
   }else{
     // red
     this.clr = color(255,0,0);
 }
}

 run(){
   this.checkEdges();
 }


  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    }
     this.update();
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;
    for(var i = 0; i < 32; i++){
    if(this.id < 0){//  if  mainBall
      if (this.loc[i].x > this.paddle.loc.x &&
          //this.loc[i].x < paddle.loc[i].x + w &&
          this.loc[i].x < this.paddle.loc.x + this.paddle.w &&
          this.loc[i].y > this.paddle.loc.y &&
          //this.loc[i].y < paddle.loc[i].y + h){
          this.loc[i].y < this.paddle.loc.y + this.paddle.h) {
          this.vel.y = -this.vel.y;
        }
      }else if(this.id%2 === 0){
         //green
         if (this.loc[i].x > this.paddle.loc.x &&
             //this.loc[i].x < paddle.loc[i].x + w &&
             this.loc[i].x < this.paddle.loc.x + this.paddle.w &&
             this.loc[i].y > this.paddle.loc.y &&
             //this.loc[i].y < paddle.loc[i].y + h){
             this.loc[i].y < this.paddle.loc.y + this.paddle.h) {
             this.vel.y = -this.vel.y;
           }
       }else{
         if (this.loc[i].x > this.paddle.loc[i].x &&
             //this.loc[i].x < paddle.loc[i].x + w &&
             this.loc[i].x < this.paddle.loc.x + this.paddle.w &&
             this.loc[i].y > this.paddle.loc.y &&
             //this.loc[i].y < paddle.loc[i].y + h){
             this.loc[i].y < this.paddle.loc.y + this.paddle.h) {
             this.vel.y = -this.vel.y;
           }
    }
  }

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.render();
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 render(){
  //  **************************************************************
   if(this.id < 0){
    //mainBall === blue
    this.clr = color(0,0,255);
  }else if(this.id%2 === 0){
     //green
    this.clr = color(0,255,0);
   }else{
     // red
    this.clr = color(255,0,0);
   }
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************
}//  end Ball class
