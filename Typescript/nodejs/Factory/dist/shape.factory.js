"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var square_1 = require("./square");
var rectangle_1 = require("./rectangle");
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.getShape = function (shapeName, cor) {
        if (shapeName == 'Circle') {
            return new circle_1.Circle(10, cor);
        }
        else if (shapeName == 'Square') {
            return new square_1.Square(10, cor);
        }
        else {
            return new rectangle_1.Rectangle(10, 10, cor);
        }
    };
    return ShapeFactory;
}());
exports.ShapeFactory = ShapeFactory;
