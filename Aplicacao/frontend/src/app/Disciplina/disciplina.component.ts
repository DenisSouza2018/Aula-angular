import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  disciplinas: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.disciplinas = [];
    const req = this.httpClient.get('http://localhost:3000/disciplinas/').toPromise();
    req.then((disciplinas) => {
      this.disciplinas = disciplinas;
    })

    console.log(this.disciplinas);
  }

}
