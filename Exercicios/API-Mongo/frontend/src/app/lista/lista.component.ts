import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  constructor(private httpClient: HttpClient) { }

  clientes: any;
  teste: any;
  url = 'http://localhost:3000/api/cliente';
  invocation = new XMLHttpRequest();

  //https://medium.com/@gigioSouza/resolvendo-o-problema-do-cors-com-angular-2-e-o-angular-cli-7f7cb7aab3c2
  
  

  ngOnInit() {
    this.clientes = [];

   const req = this.httpClient.get(this.url).toPromise();
   req.then((clientes)=>{
      this.clientes = clientes
  })
  
  
  }

 

}
