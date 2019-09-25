import { IPessoa } from "./ipessoa";

export class Pessoa implements IPessoa {
    public Nome: string = '';
    Anda() {
        console.log('Estou andando, ' + this.Nome);
    }
}