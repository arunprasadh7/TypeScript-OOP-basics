// TypeScript Types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "hello"];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
