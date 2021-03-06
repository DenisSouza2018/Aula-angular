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


  
  

  ngOnInit() {
    this.clientes = [];

   const req = this.httpClient.get(this.url).toPromise();
   req.then((clientes)=>{
      this.clientes = clientes
  })
  
  
  }

 

}
