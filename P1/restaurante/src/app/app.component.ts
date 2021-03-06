import { Component } from '@angular/core';
import { Bebidas } from './service/dados-bebidas.service';
import { Comida } from './service/dados-comidas.service';
import { Comanda } from './service/dados-comanda.service';
import { dadosFront } from './service/dados-front.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurante';

  cardapioBebidas: any = [
    new Bebidas('Agua', 2, 0),
    new Bebidas('Cerveja', 10, 0),
    new Bebidas('Refrigerante', 8, 0)
  ]

  cardapioComida: any = [
    new Comida('Refeicao', 0, 0),
    new Comida('Sobremesa', 0, 0),
  ]

  bebidas = ['Agua', 'Cerveja', 'Refrigerante'];
  comidas = ['Refeicao', 'Sobremesa'];

  ordemDadosComanda = new Comanda(0, '', 0, 0, 0);
  ordemDadosComanda2 = new Comanda(0, '', 0, 0, 0);
  dadosFront = new dadosFront('', '', '', '', 0,false,false)

  pedidos: any = [];
  notaFiscal: any = [];
  valorNota = 0;
  desconto = 0;
  valorFinal = 0;
  nomeCliente = '';
  addItem() {
    let achou: Boolean;

    // Item bebida comanda
    if (this.dadosFront.bebida != '' && this.dadosFront.quantidade != 0) {
      for (let index of this.cardapioBebidas) {

        if (this.dadosFront.bebida == index.descricao) {

          this.ordemDadosComanda = new Comanda(
            this.dadosFront.quantidade,
            this.dadosFront.bebida,
            index.preco,
            0,
            index.preco * this.dadosFront.quantidade
          )
        }
      }

      for (let i of this.pedidos) {
        if (i.descricao == this.ordemDadosComanda.descricao

        ) {
          i.quantidade = Number(this.dadosFront.quantidade) + Number(i.quantidade)

          i.valor_total = Number(i.quantidade) * Number(i.valor_unitario)

          achou = true;
        }
      }

      if (achou != true) this.pedidos.push(this.ordemDadosComanda);

      achou = false;
    }

    // item comida


    let valor = 50;
    let grama = Number(this.dadosFront.peso.substring(0, 3));
    let valor_real = valor * (grama / 1000);

    if (this.dadosFront.tipo != '' && this.dadosFront.peso != '') {
      for (let index of this.cardapioComida) {

        if (this.dadosFront.tipo == index.tipo) {

          this.ordemDadosComanda2 = new Comanda(
            1,
            this.dadosFront.tipo,
            valor,
            grama,
            valor_real
          )
        }
      }

      this.pedidos.push(this.ordemDadosComanda2);
    }

  }

  confirmOrder() {



    this.valorNota = 0;

    this.notaFiscal = this.pedidos;

    this.nomeCliente = this.dadosFront.nomeCliente;

    

    for (let index of this.pedidos) {

      this.valorNota = index.valor_total + this.valorNota;
    }

    // Desconto por convenio
    if (this.dadosFront.convenio1 != false){
      this.desconto = this.valorNota * 0.1
      
      
    }

    if (this.dadosFront.convenio2 != false){
      this.desconto = this.valorNota * 0.05
    }

    
    this.valorFinal = this.valorNota - this.desconto;
    

  }




}
