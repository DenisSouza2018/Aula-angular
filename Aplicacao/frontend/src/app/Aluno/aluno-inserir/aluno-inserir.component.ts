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
  mensagem: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
   this.cliente= {};
    this.resposta ={};
    this.mensagem =[];
  }

  salvar() {
    
  
    const req = this.httpClient.post("http://localhost:3000/add/aluno", this.cliente).toPromise();
    req.then((resposta) => {
      this.resposta = resposta;
      this.mensagem = "Cadastrado com Sucesso";
    }).catch((erro) => {
      this.resposta = erro;
      this.mensagem = "Erro ";
    });
 
  }

}
