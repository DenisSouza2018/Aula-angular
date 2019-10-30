import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atualiza',
  templateUrl: './atualiza.component.html',
  styleUrls: ['./atualiza.component.css']
})
export class AtualizaComponent implements OnInit {
  aluno: any;
  disciplina: any;
  lista_aluno:any;
  lista_disciplina:any;
  resposta: any;
  resposta2: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.aluno = {};
    this.disciplina = {};
    this.lista_disciplina={};
    this.resposta = {};
    this.resposta2 = {};
    const req = this.httpClient.get('http://127.0.0.1:3000/aluno/').toPromise();
    req.then((alunos) => {
      this.lista_aluno = alunos;
    })

    const req2 = this.httpClient.get('http://127.0.0.1:3000/disciplina/').toPromise();
    req2.then((disciplinas) => {
      this.lista_disciplina= disciplinas;
    })
    
  }

  alterar_aluno() {
    const req = this.httpClient.post("http://127.0.0.1:3000/alterar/aluno", this.aluno).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
    
    }).catch((erro) => {
      this.resposta = erro;
      console.log("Erro ao Cadastrar");
    });


  }

  alterar_disciplina() {
    const req2 = this.httpClient.post("http://127.0.0.1:3000/alterar/disciplina", this.disciplina).toPromise();
    
    req2.then((resposta) => {
      this.resposta2 = resposta;
      console.log(resposta);
    }).catch((erro) => {
      this.resposta2 = erro;
      console.log(erro);
    });

  }


}