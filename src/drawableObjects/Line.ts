import {DrawableObject} from "./DrawableObject"
import {adjustPosition} from "../util/adjust";
import {fullClone} from "davids-toolbox"; 
import { Position } from "../Position";
import { Color } from "../Color";
/**
This one looks like it's likley broken. Remove this message if it's not.
*/
export class Line extends DrawableObject {


	p1: Position; 
	p2:Position;
	color: Color; 
	size: number; 


	constructor(
		p1 : Position,
		p2 : Position,
		color : Color,
		size = 1) {
		super();
		this.p1 =  fullClone<Position>(p1);
		this.p2 = fullClone<Position>(p2);
		this.color= fullClone(color);
		this.size = size;
	}

	setupContext(context : CanvasRenderingContext2D) {
		context.strokeStyle = this.color.toString();
		context.lineWidth = this.size;
		context.beginPath();
	}

	draw(context : CanvasRenderingContext2D){

		this.setupContext(context);
		this.place(context);
		this.finishContext(context);
	}

	finishContext(context : CanvasRenderingContext2D) {
		context.stroke();
	}


	place(context : CanvasRenderingContext2D) {

		let p1 = adjustPosition(context, this.p1);
		let p2 = adjustPosition(context, this.p2);

		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
	}
}

