export class Line {
  point1: number[];
  point2: number[];
  color: string;

  constructor(points: number[][], color: string) {
    [this.point1, this.point2] = points;
    this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.moveTo(this.point1[0], this.point1[1]);
    c.lineTo(this.point2[0], this.point2[1]);
    c.closePath();
    c.strokeStyle = this.color;
    c.stroke();
  }
};
