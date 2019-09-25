import { Shape } from "./shape";
import { Circle } from "./circle";
import { Square } from "./square";
import { Rectangle } from "./rectangle";

export class ShapeFactory {

    getShape(
        shapeName: string,
        cor: string): Shape {

        if (shapeName == 'Circle') {
            return new Circle(10, cor);
        } else if (shapeName == 'Square') {
            return new Square(10, cor);
        } else {
            return new Rectangle(10, 10, cor);
        }
    }
}