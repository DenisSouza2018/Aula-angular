import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {
  escolha: any;
  IdAluno: number;
  aluno: any;
  alunos: any;
  disciplinas: any;
  matriculas: any;
  body: any;
  
  resposta: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.aluno=[];
    this.alunos = [];
    this.disciplinas = [];
    this.escolha = [];

    this.body={};
    this.resposta = {};

    const req = this.httpClient.get('http://127.0.0.1:3000/aluno/').toPromise();
    req.then((alunos) => {
      this.alunos = alunos;
    })

    const req2 = this.httpClient.get('http://127.0.0.1:3000/disciplina/').toPromise();
    req2.then((disciplinas) => {
      this.disciplinas = disciplinas;
    })

  
    
  }


 

  salvar(){
    
    this.body = {
      "cod_aluno":`${this.aluno.codigo}`,
      "cod_disc":`${this.escolha.codigo}`,
    }

    console.log(this.body);
    const req4 = this.httpClient.post("http://localhost:3000/add/matriculas", this.body).toPromise();

    req4.then((resposta) => {
      this.resposta = resposta;
      console.log("Sucesso");
    }).catch((erro) => {
      this.resposta = erro;
      console.log("Erro ao Cadastrar");
    });

    
    
    
  }

  atualiza(){
    const req5 = this.httpClient.get('http://localhost:3000/matricula/'+this.escolha.codigo).toPromise();
    req5.then((matriculas) => {
      this.matriculas = matriculas;
    })

  }

  desvincular(aluno: any){
    console.log(aluno);
    this.body = {
      "cod_disc":`${this.escolha.codigo}`,
      "cod_aluno":`${aluno.codigo}`,
    }

    console.log(this.body);

    const req6 = this.httpClient.post("http://localhost:3000/remove/matriculas", this.body).toPromise();

    req6.then((resposta) => {
      this.resposta = resposta;
      console.log("Sucesso");
    }).catch((erro) => {
      this.resposta = erro;
      console.log("Erro ao Cadastrar");
    });
   
  }


}
