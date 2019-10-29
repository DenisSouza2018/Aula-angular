import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aluno-consultar',
  templateUrl: './aluno-consultar.component.html',
  styleUrls: ['./aluno-consultar.component.css']
})
export class AlunoConsultarComponent implements OnInit {

  aluno: any;
  resposta: any;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.aluno = [];
    this.resposta=[];
  }

  consultar(){
    
    
    const req = this.httpClient.get(`http://localhost:3000/aluno/${this.aluno.id}`).toPromise();

    req.then((aluno) => {
      this.aluno = aluno;
     
     
    }).catch((erro) => {
      this.resposta = erro;
      
    });
   
    



  }

}
