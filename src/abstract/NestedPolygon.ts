
import {pointOnCircle, pointBetween} from "../util/geo";
import {Position} from "../Position";

import {AbstractPolygon} from "./AbstractPolygon";

export class NestedPolygon extends AbstractPolygon{



  boundary : AbstractPolygon; 

  constructor(boundry :  AbstractPolygon, nsides=3, phase=0) {
    super();
    this.boundary=boundry;
    this.nSides=nsides;
    this.phase = phase;

    let points = [];
    for (let i = 1; i <= this.nSides; i++){
      let phase = this.phase + ((Math.PI * 2) * (i/ this.nSides));
      phase = phase % (Math.PI *2)

      let pp = this.boundary.getPoint(phase);
      points.push(pp);
    }

    this.points = points;
  }


}

