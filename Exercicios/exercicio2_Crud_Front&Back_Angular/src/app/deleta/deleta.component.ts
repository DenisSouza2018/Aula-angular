import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deleta',
  templateUrl: './deleta.component.html',
  styleUrls: ['./deleta.component.css']
})
export class DeletaComponent implements OnInit {
  aluno: any;
  disciplina:any;
  resposta: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.aluno = {};
    this.disciplina={};
    this.resposta = {};
  }

  deleta_aluno() {
    const req = this.httpClient.delete("http://127.0.0.1:3000/delete/aluno/" + this.aluno.codigo).toPromise();
    req.then((resposta) => {
      this.resposta = resposta;
      console.log("Deletou");
    }).catch((erro) => {
      this.resposta = erro;
      console.error("Erro:"+erro);
    });

  }

  deleta_disciplina() {
    const req = this.httpClient.delete("http://127.0.0.1:3000/delete/disciplina/" + this.disciplina.codigo).toPromise();
    req.then((resposta) => {
      this.resposta = resposta;
      console.log("Deletou");
    }).catch((erro) => {
      this.resposta = erro;
      console.log("Erro ao deletar");
    });

  }
}
