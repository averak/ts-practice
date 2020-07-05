"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up);
console.log(Direction.down);
console.log(Direction.left);
console.log(Direction.right);
var Ports;
(function (Ports) {
    Ports["USER_SERVISE"] = "8080";
    Ports["REGISTER_SERVISE"] = "8080";
    Ports["MEDIA_SERVISE"] = "8080";
})(Ports || (Ports = {}));
console.log(Ports.USER_SERVISE);
console.log(Ports.REGISTER_SERVISE);
console.log(Ports.MEDIA_SERVISE);
