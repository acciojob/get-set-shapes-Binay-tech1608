//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	get width(){
		this._width = width;
	}
	get height(){
		this._height = height;
	}
	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(width, height);
		this._width = side;
		this._height = side;
		this.side = side;
	}
	get side(){
		this._side = side;
	}
	getPerimeter(){
		return (4 * this.side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
