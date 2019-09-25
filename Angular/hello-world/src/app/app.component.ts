import { Component } from '@angular/core';
import { Pessoas } from './pessoas';

// localhost:4200

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  umTexto = 'Guilherme';
  umNumero = 10;
  umBoolean = true;
  umObjeto = {
    name: 'Guilherme',
    idade: 25,
  };
  umaLista = [1, 2, 3];

  // lista de pessoas no arquivo pessoas.ts
  pessoas = Pessoas;


  pessoaSelecionada = null;
  mostraDetalhes(p) {
    this.pessoaSelecionada = p;
  }

  soma(a, b) {
    return a + b;
  }

  // addNaLista(  age, eyeColor, name, gender, company) {
  //     this.pessoas.push({
  //       age,
  //       eyeColor,
  //       name,
  //       gender,
  //       company,
  //     });
  //   }

}
