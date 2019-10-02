import { Shape } from "./shape";

export class Square extends Shape {

    draw(): void {
        console.log("Eu sou um Square com lado: " + this.lado);
    }

    constructor(
        public lado: number,
        cor: string
        ){
            super(cor);
        }
}
