import { Shape } from "./shape";

//  é filho de shape
export class Circle extends Shape {

    draw(): void {
        console.log("Eu sou um Circle");
    }
    
    constructor (
        public raio: number, 
        cor: string
    ) {
        // Precisa chamar o super 
        // poir é filho SEMPRE
        super(cor);
    }

}