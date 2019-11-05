import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deleta',
  templateUrl: './deleta.component.html',
  styleUrls: ['./deleta.component.css']
})
export class DeletaComponent implements OnInit {
  cliente: any;
  clientes:any;
  resposta: any;
  chave:any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cliente = {};
    this.resposta = [];
    const req = this.httpClient.get('http://127.0.0.1:3000/clientes/').toPromise();

    req.then((clientes) => {
      this.clientes = clientes;
    })

  }

  deleta() {
   

    for(let pessoa of this.clientes){
      
      if(parseInt(pessoa.id) == parseInt(this.cliente.id)){
        this.chave = pessoa._id}
    }

    const req = this.httpClient.delete("http://127.0.0.1:3000/clientes/" + this.chave).toPromise();

    req.then((resposta) => {
      this.resposta = resposta;
     // console.log("Resposta 1: "+this.resposta);
    }).catch((erro) => {
      this.resposta = erro;
    //  console.log("Resposta 2: "+this.resposta);
    });

    const req1 = this.httpClient.get('http://127.0.0.1:3000/clientes/').toPromise();

    req1.then((clientes) => {
      this.clientes = clientes;
    })

  }

}
