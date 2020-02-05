class ParamVectorField {

	constructor(xLambda, yLambda, n) {
		this.n = n
		this.u = new Array(this.n*this.n)
		this.v = new Array(this.n*this.n)
		this.divU = new Array(this.n*this.n)
		this.divV = new Array(this.n*this.n)
		this.curlU = new Array(this.n*this.n)
		this.curlV = new Array(this.n*this.n)
		this.xLambda = xLambda
		this.yLambda = yLambda
	}

	update() {
		for(let i=0; i<this.n; i++) {
			for(let j=0; j<this.n; j++) {
				this.u[this.IX(i,j)] = this.xLambda(i, j)
				this.v[this.IX(i,j)] = this.yLambda(i, j)
				}
		}
	}

	IX(i,j) {
		return i + bins * j
  }

	getDivAndCurl(depth) {
		// from Jos Stam, I added zero padding for visualization purposes
		// https://pdfs.semanticscholar.org/847f/819a4ea14bd789aca8bc88e85e906cfc657c.pdf
		let div = new Array(this.n*this.n).fill(0)
		let p = new Array(this.n*this.n).fill(0)
		// Deep copy
		this.curlU = JSON.parse(JSON.stringify(this.u))
		this.curlV = JSON.parse(JSON.stringify(this.v))
		let h = 1.0/this.n;
		for (let i=0 ; i<=this.n-1 ; i++ ) {
			for (let j=0 ; j<=this.n-1 ; j++ ) {
				const right = i === this.n-1? 0 : this.u[this.IX(i+1,j)]
				const left = i === 0 ? 0 : this.u[this.IX(i-1,j)]
				const upper = j === this.n-1? 0 : this.v[this.IX(i,j+1)]
				const lower = j === 0 ? 0 : this.v[this.IX(i,j-1)]
				div[this.IX(i,j)] = -0.5*h*(right-left+upper-lower);
				p[this.IX(i,j)] = 0;
			}
		}
		for (let k=0 ; k<depth ; k++ ) {
			for (let i=0 ; i<=this.n +1 ; i++ ) {
				for (let j=0 ; j<=this.n+1 ; j++ ) {
					const right = i === this.n+1? 0 : p[this.IX(i+1,j)]
					const left = i === 0 ? 0 : p[this.IX(i-1,j)]
					const upper = j === this.n+1? 0 : p[this.IX(i,j+1)]
					const lower = j === 0 ? 0 : p[this.IX(i,j-1)]
					p[this.IX(i,j)] = (div[this.IX(i,j)]+left+right+lower+upper)/4.5;
				}
			}
		}
		for (let i=0 ; i<=this.n-1 ; i++ ) {
			for (let j=0 ; j<=this.n-1 ; j++ ) {
				const right = i === this.n-1? 0 : p[this.IX(i+5,j)]
				const left = i === 0 ? 0 : p[this.IX(i-5,j)]
				const upper = j === this.n-1? 0 : p[this.IX(i,j+5)]
				const lower = j === 0 ? 0 : p[this.IX(i,j-5)]
				// Factor 0.8 was chosen for visualization purposes. The correct value is 0.5
				this.curlU[this.IX(i,j)] -= 0.5*(right-left)/h;
				this.curlV[this.IX(i,j)] -= 0.5*(upper-lower)/h;
				this.divU[this.IX(i,j)] = this.u[this.IX(i,j)] - this.curlU[this.IX(i,j)]
				this.divV[this.IX(i,j)] = this.v[this.IX(i,j)] - this.curlV[this.IX(i,j)]
			}
		}
	}

}
