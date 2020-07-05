"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creature = /** @class */ (function () {
    function Creature(numberOfHands, numberOfFeets) {
        this.numberOfHands = numberOfHands;
        this.numberOfFeets = numberOfFeets;
    }
    return Creature;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(bark) {
        var _this = _super.call(this, 0, 4) || this;
        _this.bark = bark;
        return _this;
    }
    Dog.prototype.barking = function () {
        return this.bark + "! " + this.bark + "!";
    };
    Dog.prototype.shakeTail = function () {
        console.log(this.barking());
    };
    return Dog;
}(Creature));
var creature = new Creature(10, 20);
var dog = new Dog("bow-wow");
dog.shakeTail();
