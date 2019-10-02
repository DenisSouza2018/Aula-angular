"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_factory_1 = require("./shape.factory");
var shapeFactory = new shape_factory_1.ShapeFactory();
var shape = shapeFactory
    .getShape('Square', 'vermelho');
shape.draw();
