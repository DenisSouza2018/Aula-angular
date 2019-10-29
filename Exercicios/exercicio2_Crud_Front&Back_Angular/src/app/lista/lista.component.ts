import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  alunos: any;
  disciplinas: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.alunos = [];
    this.disciplinas = [];
    const req = this.httpClient.get('http://127.0.0.1:3000/aluno/').toPromise();
    req.then((alunos) => {
      this.alunos = alunos;
    })

    const req2 = this.httpClient.get('http://127.0.0.1:3000/disciplina/').toPromise();
    req2.then((disciplinas) => {
      this.disciplinas = disciplinas;
    })
  }

}
