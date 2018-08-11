import {DrawableObject} from "./DrawableObject"
import { Color } from "../Color";
import {Position} from "../Position"; 

export class Rect extends DrawableObject  {


	size: number;
	color: Color; 
	position: Position;
	constructor(size :number, color : Color, position :Position){
		super();
		this.size = size;
		this.color = color;
		this.position = position;

	}

	draw(context : CanvasRenderingContext2D){


		let sizeX = context.canvas.width;
		let sizeY = context.canvas.height;

		context.fillStyle = this.color.toString();


		context.fillRect(this.position.x * sizeX, this.position.y * sizeY, (this.position.x + this.size) * sizeX,  (this.position.y + this.size) * sizeY );

	}

}


