import {
	adjustPosition,
	adjustSize
} from "../util/adjust";
import {
	DrawableObject
} from "./DrawableObject"
import {
	Position
} from "../Position";
import {
	Color
} from "../Color";


export class Circle extends DrawableObject {


	size: number;
	color: Color;
	position: Position;
	solid: boolean;
	lineWidth: number;

	constructor(
		size : number,
		color : Color,
		position : Position,
		solid = true,
		lineWidth = 2) {
		super();
		this.size = size;
		this.color = color;
		this.position = position;
		this.lineWidth = lineWidth;

		this.solid = solid;



	}

	draw(context: CanvasRenderingContext2D) {

	if (this.solid) {
			context.fillStyle = this.color.toString();
		} else {
			context.strokeStyle = this.color.toString();
			context.lineWidth = this.lineWidth;
		}
		context.beginPath();

		this.place(context);

		context.closePath();

		if (this.solid) {
			context.fill();

		} else {
			context.stroke();
		}
	}

	place(context : CanvasRenderingContext2D) {


		let p = adjustPosition(context, this.position);
		let s = adjustSize(context, this.size);


		context.moveTo(p.x + s.x, p.y);
		context.ellipse(p.x, p.y, s.x, s.y, 0, 0, 2 * Math.PI, false);

	}

}