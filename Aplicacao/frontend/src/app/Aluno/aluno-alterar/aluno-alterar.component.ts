import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-alterar',
  templateUrl: './aluno-alterar.component.html',
  styleUrls: ['./aluno-alterar.component.css']
})
export class AlunoAlterarComponent implements OnInit {

  mensagem: any;
  aluno:any;
  constructor() { }

  ngOnInit() {
    this.mensagem = [];
    this.aluno=[];
  }

  deletar(){
    this.mensagem = "Falha";
    console.log(this.aluno.id)
    
  }

}
