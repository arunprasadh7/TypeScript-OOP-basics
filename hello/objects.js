// OBjects
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X : ".concat(this.x, " Y: ").concat(this.y));
    };
    Point.prototype.getDistance = function (anotherpoint) {
        //..
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
