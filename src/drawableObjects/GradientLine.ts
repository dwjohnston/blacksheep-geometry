import {adjustPosition} from "../util/adjust";

import {DrawableObject} from "./DrawableObject"
import {ColorPoint} from "../ColorPoint";

export class GradientLine extends DrawableObject {



	cp1: ColorPoint; 
	cp2: ColorPoint;
	size: number; 


	constructor(cp1 : ColorPoint, cp2 : ColorPoint, size = 1) {
		super();
		this.cp1 = cp1;
		this.cp2= cp2;

		this.size = size;
	}


	draw(context : CanvasRenderingContext2D){

		let p1 = adjustPosition(context, this.cp1.position);
		let p2 = adjustPosition(context, this.cp2.position);

		var gradient = context.createLinearGradient(p1.x,p1.y,p2.x,p2.y);

		gradient.addColorStop(0, this.cp1.color.toString());
		gradient.addColorStop(1, this.cp2.color.toString());


		context.strokeStyle = gradient;
		context.lineWidth = this.size;

		context.beginPath();
		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		context.stroke();

	}

}

