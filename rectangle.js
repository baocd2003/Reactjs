class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}

	getPerimeter(){
		let peri = (this.width + this.height)*2
		console.log(peri)
	}

	getArea(){
		let area = (this.width * this.height)
		console.log(area);
	}
}

let rec = new Rectangle(2,3);
rec.getPerimeter();
rec.getArea();