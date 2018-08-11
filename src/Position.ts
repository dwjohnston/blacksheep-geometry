export interface PositionJson {
	x: number; 
	y: number; 
}

export class Position {


	x: number;
	y: number; 

	constructor(x : number, y : number){
		this.x = x;
		this.y = y;
	}

	update(x :number,y :number) {
		this.x = x;
		this.y =y;
	}

	updateFromPosition(pos : Position) {
		this.update(pos.x, pos.y);
	}

	copy() : Position {
		return new Position(this.x, this.y);
	}

	toJson() : PositionJson  {
		return {
			x: this.x, 
			y: this.y
		};
	}

}
