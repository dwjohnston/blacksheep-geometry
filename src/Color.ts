/**
  Probably replace this with an existing library
*/

import {random, randomInt} from "davids-toolbox"; 

export interface ColorJson {
	r: number; 
	g: number;
	b: number; 
	a: number; 
}

export class Color {

	r: number;
	g: number; 
	b: number; 
	a: number; 

	constructor(r : number, g : number, b :number, a: number){
		this.r = r;
    this.g = g;
    this.b = b;
		this.a = a;
	}

	randomize() {
		this.r = randomInt(0, 255); 
		this.g = randomInt(0, 255); 
		this.b = randomInt(0, 255); 
		this.a = random(0, 1); 
	}

  toString() :string {
    return ["rgba(",this.r,",",this.g,",",this.b,",", this.a,")"].join("");
	}
	
	toJson() : ColorJson{
		return {
			r: this.r, 
			g: this.g, 
			b: this.b, 
			a: this.a
		};
	}

	shift(v :number,w :number) {

		return new Color(
			Math.floor(this.r +v),
			 Math.floor(this.g +v),
			  Math.floor(this.b +v),
				this.a + w
		);

}
}


