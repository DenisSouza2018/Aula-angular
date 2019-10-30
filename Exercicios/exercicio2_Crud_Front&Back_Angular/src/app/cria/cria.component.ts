import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cria',
  templateUrl: './cria.component.html',
  styleUrls: ['./cria.component.css']
})
export class CriaComponent implements OnInit {
  aluno: any;
  disciplina: any;
  resposta: any;
  resposta2:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.aluno = {};
    this.disciplina={};
    this.resposta = {};
    this.resposta2 = {};
  }

  salvar_aluno() {
  
    const req = this.httpClient.post("http://127.0.0.1:3000/add/alunos", this.aluno).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      //console.log(this.resposta);
    }).catch((erro) => {
      this.resposta = erro;
     // console.log(this.resposta.status);
      //console.log("Erro ao Cadastrar");
    });

  }

  salvar_disciplina(){
    //console.log(this.disciplina);
    const req2 = this.httpClient.post("http://127.0.0.1:3000/add/disciplinas", this.disciplina).toPromise();

    req2.then((resposta) => {
      this.resposta2 = resposta;
     // console.log("Sucesso");
    }).catch((erro) => {
      this.resposta2 = erro;
      //console.log("Erro ao cadastrar");
    });

  }

}
