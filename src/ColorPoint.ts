import {Position} from "./Position"; 
import { Color } from "./Color";

import {fullClone} from "davids-toolbox"; 

export class ColorPoint {
	position: Position; 
	color: Color; 

	constructor(position : Position, color : Color){
		this.position =  position.copy(); 
		this.color = fullClone<Color>(color); 
	}
}

