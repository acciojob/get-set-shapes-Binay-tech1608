//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
		// this._width = side;
		// this._height = side;
		// this.side = side;
	}
	// get width(){
	// 	this.width = side;
	// }
	// get height(){
	// 	this.height = side;
	// }
	// get side(){
	// 	this._side = side;
	// }
	getPerimeter(){
		return (4 * this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
