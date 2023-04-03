import GameObject from "./gameobject.js";

export default class Tile extends GameObject{
	
	constructor(width,height,x,y,path){
		super(width,height,x,y,path);	
	}
	update(){

	};
	render(){
		super.render();
	};
}