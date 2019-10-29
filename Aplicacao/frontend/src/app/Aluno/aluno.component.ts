import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  

  alunos: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.alunos = [];
    const req = this.httpClient.get('http://localhost:3000/alunos/').toPromise();
    req.then((alunos) => {
      this.alunos = alunos;
    })
  }
}
