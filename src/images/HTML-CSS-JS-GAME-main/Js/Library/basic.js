export default class bs{
	static Rect = function(left,top,width,height){
		this.left = left;
		this.top = top;
		this.width = width; 
		this.height = height; 
	}

	static Vector2i = function (x = 0,y = 0) {
		this.x = x;
		this.y = y;
	}
}