import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aluno-inserir',
  templateUrl: './aluno-inserir.component.html',
  styleUrls: ['./aluno-inserir.component.css']
})
export class AlunoInserirComponent implements OnInit {
  cliente: any;
  resposta: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
   this.cliente= {};
    this.resposta ={};
  }

  salvar() {
    const req = this.httpClient.post("http://127.0.0.1:3000/add/clientes", this.cliente).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
    }).catch((erro) => {
      this.resposta = erro;
    });

  }

}
