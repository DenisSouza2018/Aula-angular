import { Shape } from "./shape";
import { ShapeFactory } from "./shape.factory";

const shapeFactory: ShapeFactory 
    = new ShapeFactory()

const shape: Shape = shapeFactory
    .getShape('Square', 'vermelho');

shape.draw();