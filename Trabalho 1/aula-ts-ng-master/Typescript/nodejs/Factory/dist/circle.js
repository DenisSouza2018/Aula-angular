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
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
//  é filho de shape
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(raio, cor) {
        var _this = 
        // Precisa chamar o super 
        // poir é filho SEMPRE
        _super.call(this, cor) || this;
        _this.raio = raio;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log("Eu sou um Circle");
    };
    return Circle;
}(shape_1.Shape));
exports.Circle = Circle;
