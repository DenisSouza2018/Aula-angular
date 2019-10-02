import { Shape } from "./shape";

export class Rectangle extends Shape {
    draw(): void {
        console.log("Eu sou um Rectangle");
    }

    constructor(
        public altura: number,
        public largura: number,
        cor: string
    ){
        super(cor)
    }
}