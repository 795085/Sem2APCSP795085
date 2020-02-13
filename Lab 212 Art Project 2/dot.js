class Dot {
	constructor(R, N){
		this.R = float(R);
		this.N = int(N);
	}

  run(){
    update();
    render();
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(70);
    translate(50);
    shearY(-2);
  }


	render() {
		noStroke();
		for (let i=0; i<360; i+=8) {
			let x = float(this.R*sin(radians(i+this.N*5)));
			let y = float(this.R*cos(radians(i+this.N*5)));
			let t = float(map(this.R, minR, maxR, -180, 180));
			let r = 6*sin(radians(t));
			fill(160+(x/2), 50-(x/2), 178-(y/2));
			ellipse(x, y, 2*r, 2*r);
			ellipse(x/2, y/2, 0.8*r, 0.8*r);
			ellipse(x/4, y/4, 0.3*r, 0.3*r);
		}
	}
}
