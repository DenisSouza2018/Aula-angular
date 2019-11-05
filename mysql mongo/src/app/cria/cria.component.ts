import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cria',
  templateUrl: './cria.component.html',
  styleUrls: ['./cria.component.css']
})
export class CriaComponent implements OnInit {
  cliente: any;
  resposta: any;
  clientes: any;
  flag: boolean;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cliente = {};
    this.resposta = {};
    this.flag = false;

    const req = this.httpClient.get('http://127.0.0.1:3000/clientes/').toPromise();

    req.then((clientes) => {
      this.clientes = clientes;
    })
  }

  salvar() {

    for (let pessoa of this.clientes) {

      if (parseInt(pessoa.id) == parseInt(this.cliente.id)) {
        this.flag = true;
      }
    }

    console.log(this.flag)
    if (this.flag == false) {
      const req = this.httpClient.post("http://127.0.0.1:3000/clientes", this.cliente).toPromise();
      req.then((resposta) => {
        this.resposta = resposta;
        console.log("Resposta 1: " + this.resposta);
      }).catch((erro) => {
        this.resposta = erro;
        console.log("Resposta 2: " + this.resposta);
      });
    }

    const req2 = this.httpClient.get('http://127.0.0.1:3000/clientes/').toPromise();

    req2.then((clientes) => {
      this.clientes = clientes;
    })
    this.flag = false;

  }
}
