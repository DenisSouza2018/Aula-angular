import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-deletar',
  templateUrl: './aluno-deletar.component.html',
  styleUrls: ['./aluno-deletar.component.css']
})
export class AlunoDeletarComponent implements OnInit {

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
