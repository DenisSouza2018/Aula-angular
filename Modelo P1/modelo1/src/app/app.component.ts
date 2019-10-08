import { Component } from '@angular/core';
import { Order } from './servicos/order.service';
import { Tabela } from './servicos/tabela.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  

  title = 'Nome do Titulo';

  membros = ['Fernando', 'Paulo', 'Tais'];
  bebidas = ['café', 'chá', 'leite'];
  cafe = 'café'
  valorBebidas= [2,3,4];
  food = ['Pao de queijo', 'Torta', 'Bolo de cenoura']


  orderModel = new Order('', '', 0, '', 0, '', 0, false);


  mensagem: String = 'Sem pedido';
  Status: String = 'Tabela de Pedidos';
  orderTabela = new Tabela('', 0,0);
  solicitacao: any = [];

  confirma() {

    if(this.orderTabela.nome != '' && this.orderTabela.quantidade != 0 && this.orderModel.name != ''){
    this.Status = this.orderModel.name + ' fez o seguinte Pedido';}

  }

  addItem() {
     
    if (this.orderModel.quantidadebebida > 0 && this.orderModel.drink != "") {


      this.orderTabela= new Tabela(this.orderModel.drink, this.orderModel.quantidadebebida,0)


      var verifica = false;

      for (let index of this.solicitacao) {

        if (this.orderModel.drink == index.nome) {

          index.quantidade = Number(index.quantidade) + Number(this.orderModel.quantidadebebida)
          

          verifica = true;

        }

      }

      if (verifica != true ) { this.solicitacao.push(this.orderTabela); }
      var verifica = false;


    }

    if (this.orderModel.quantidadecomer > 0 && this.orderModel.comer != "") {

      this.orderTabela = new Tabela(this.orderModel.comer, this.orderModel.quantidadecomer,0);

      for (let index of this.solicitacao) {

        if (this.orderModel.comer == index.nome) {

          index.quantidade = Number(index.quantidade) + Number(this.orderModel.quantidadecomer)
          verifica = true;

        }

      }

      console.log(this.orderModel.comer)
      if (verifica != true ) { this.solicitacao.push(this.orderTabela); }
      var verifica = false;

    }

  }

}