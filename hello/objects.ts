// OBjects - instance of a class

class Point {
  x: number;
  y: number;

  draw() {
    console.log(`X : ${this.x} Y: ${this.y}`);
  }

  getDistance(anotherpoint: Point) {
    //..
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
