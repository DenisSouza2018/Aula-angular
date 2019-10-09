import { Component } from '@angular/core';
import { dadosCliente } from './servico/dados-cliente.service';
import { dadosNotaFiscal } from './servico/dados-nota-fiscal.service';
import { dadosProdutos } from './servico/dados-produtos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabalho2';

  totalNotaSemDesconto = 0;
  totaldoDesconto = 0;
  totaldaNota = 0;

  estoqueProduto: dadosProdutos[] = [
    new dadosProdutos(50, "Calça Preta", 10, 0, 20),
    new dadosProdutos(40, 'Blusa Azul', 42.50, 0, 30),
    new dadosProdutos(30, 'Shot nike', 12, 0, 20),
    new dadosProdutos(20, 'Camiseta Cinza M', 25, 0, 20),
    new dadosProdutos(10, 'Saia M Violeta', 20, 0, 10)
  ]
  ordemdadosNotaFiscal: any = [];
  listaCompra: any = [];
  ordemProduto = new dadosProdutos(0, '', 0, 0, 0);
  ordemDadosCliente = new dadosCliente('', '', 0);
  orNotaFical = new dadosNotaFiscal(0, '', 0, 0, 0);





  addItem() {

    let verifica = false;

    

    // Criando o produto novo
    if (this.ordemProduto.nome != '' && this.ordemProduto.quantidade > 0 && this.ordemDadosCliente.nome != '') {

      this.orNotaFical = new dadosNotaFiscal(0, this.ordemProduto.nome, 0, 0, 0)

      for (let index of this.estoqueProduto) {
        if (this.orNotaFical.descricao == index.nome) {
          this.orNotaFical.codigo = index.codigo;
          this.orNotaFical.valor_unitario = index.valor;
          this.orNotaFical.quantidade = this.ordemProduto.quantidade;
          for (let index of this.estoqueProduto) {
            if (this.orNotaFical.codigo == index.codigo)
              this.orNotaFical.desconto = index.desconto
          }
        }
      }



      for (let index of this.listaCompra) {
        if (index.descricao == this.orNotaFical.descricao) {
          index.quantidade = Number(this.orNotaFical.quantidade) + Number(index.quantidade);
          verifica = true;
        }
      }

      if (verifica != true) this.listaCompra.push(this.orNotaFical);

      verifica = false;



    }




  }

  confirma() {

    this.totalNotaSemDesconto = 0;
    this.totaldoDesconto = 0;
    this.totaldaNota = 0;

    let valor;
    for (let index of this.listaCompra) {
      valor = index.desconto / 100
      this.totalNotaSemDesconto += index.valor_unitario * index.quantidade
      this.totaldoDesconto = this.totalNotaSemDesconto * valor
      index.desconto = index.quantidade * index.valor_unitario * valor
    }

    this.totaldaNota = this.totalNotaSemDesconto - this.totaldoDesconto




  }





}