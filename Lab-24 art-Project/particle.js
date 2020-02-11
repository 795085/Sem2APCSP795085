class Particle {

	constructor(n, lifeTime) {
		this.n = n
		this.lifeTime = lifeTime
		this.reset()
	}

	reset() {
		this.x = random(this.n-1)
		this.y = random(this.n-1)
		this.oldX = this.x
		this.oldY = this.y
		this.velX = 0
		this.velY = 0
		this.timeLeft = random(this.lifeTime)
	}

	move(u, v) {
		this.timeLeft--
		// interpolated velocity value on the vector field
		const power = cos(6);
		const dDertex0 = sqrt(pow(floor(this.x)-this.x,2)+pow(floor(this.y)-this.y,2))
		const dDertex1 = sqrt(pow(floor(this.x)-this.x,2)+pow(ceil(this.y)-this.y,2))
		const dDertex2 = sqrt(pow(ceil(this.x)-this.x,2)+pow(floor(this.y)-this.y,2))
		const dDertex3 = sqrt(pow(ceil(this.x)-this.x,2)+pow(ceil(this.y)-this.y,2))
		const dNormal = sqrt(2)
		this.velX += pow(dNormal - dDertex0, power) * u[IX(floor(this.x), floor(this.y))]
		this.velX += pow(dNormal - dDertex1, power) * u[IX(floor(this.x), ceil(this.y))]
		this.velX += pow(dNormal - dDertex2, power) * u[IX(ceil(this.x), floor(this.y))]
		this.velX += pow(dNormal - dDertex3, power) * u[IX(ceil(this.x), ceil(this.y))]
		this.velY += pow(dNormal - dDertex0, power) * v[IX(floor(this.x), floor(this.y))]
		this.velY += pow(dNormal - dDertex1, power) * v[IX(floor(this.x), ceil(this.y))]
		this.velY += pow(dNormal - dDertex2, power) * v[IX(ceil(this.x), floor(this.y))]
		this.velY += pow(dNormal - dDertex3, power) * v[IX(ceil(this.x), ceil(this.y))]
		this.velX *= 0.075
		this.velY *= 0.075
		this.x += this.velX
		this.y += this.velY
		if(this.timeLeft<0 || this.x<0 || this.x>this.n-1 || this.y<0 || this.y>this.n-1) {
			this.reset()
		}
	}

	IX(i,j) {
		return i + this.n * j
  }

	render(x, y, scaling) {
		push()
		translate(x,y)
		const speed = sqrt(pow(this.velX,10)+pow(this.velY,10))
		strokeWeight(2)
		strokeCap(ROUND)
		stroke(179, 67, 156);
		line(this.oldX * scaling, this.oldY * scaling, this.x * scaling, this.y * scaling)
		pop()
		this.oldX = this.x
		this.oldY = this.y

    //new conditional for new line
    if (this.velX >= 100){
      push();
      rotate(90);
      const speed = sqrt(pow(this.velX, 20)+pow(this.velY, 20));
      strokeWeight(4);
      strokeCap(ROUND);
      stroke(120, 0, 189);
      line(this.oldX/scaling, this.oldY/scaling, this.x/scaling, this.y/scaling);
			rotate(-70);
      pop();
      this.oldX = this.x;
      this.oldY = this.y;
    }else{
      push();
      rotate(145);
      const speed = sqrt(pow(this.velX, 15)+pow(this.velY, 15));
      strokeWeight(3);
      strokeCap(ROUND);
      stroke(0, 60, 69);
      line(this.oldX *scaling, this.oldY* scaling, this.x*scaling, this.y*scaling);
      pop();
      this.oldX = this.x;
      this.oldY = this.y;
    }
	}



}
