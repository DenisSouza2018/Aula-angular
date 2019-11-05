import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atualiza',
  templateUrl: './atualiza.component.html',
  styleUrls: ['./atualiza.component.css']
})
export class AtualizaComponent implements OnInit {

  cliente: any;
  resposta: any;
  Todosclientes:any;
  chave:any;
  Selecionado:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cliente = {};
    this.resposta = {};
    this.Todosclientes = [];
    const req = this.httpClient.get('http://127.0.0.1:3000/clientes/').toPromise();

    req.then((clientes) => {
      this.Todosclientes = clientes;
    })

    
  }

  salvar() {

    for(let pessoa of this.Todosclientes){
      
      if(parseInt(pessoa.id) == parseInt(this.cliente.id)){
        this.chave = pessoa._id
        this.Selecionado = pessoa;
      }
    }
   
    const req = this.httpClient.put(`http://127.0.0.1:3000/clientes/${this.chave}`,this.Selecionado).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
      
    }).catch((erro) => {
      this.resposta = erro;
      
    });

  }

}
