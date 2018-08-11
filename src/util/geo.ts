import {Position} from "../Position";

export function pointBetween(p1 : Position,p2 : Position, ratio :number) : Position {
  return new Position(((p1.x - p2.x) * ratio) + p2.x , ((p1.y -  p2.y)*ratio) + p2.y);
}

export function pointOnCircle(center : Position, distance : number, phase : number) : Position{

  let position = new Position(0,0);

  position.update(
    center.x + (Math.cos(phase) * distance),
    center.y +(Math.sin(phase) * distance)
  );
  return position;
}

