import { Position } from "../Position";


export function adjustX(context :CanvasRenderingContext2D, value : number) {
	let sizeX = context.canvas.width;
  return sizeX * value;
}

export function adjustY(context : CanvasRenderingContext2D, value : number) {
	let sizeY = context.canvas.height;
  return sizeY * value;
}

export function adjustSize (context : CanvasRenderingContext2D, size : number)  :Position {
	return new Position(adjustX(context, size), adjustY(context, size)); 
}

export  function adjustPosition(context : CanvasRenderingContext2D, position : Position) : Position {
  return new Position(adjustX(context, position.x), adjustY(context, position.y));  
}

