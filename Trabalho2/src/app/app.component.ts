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


  estoqueProduto: dadosProdutos[] = [
    new dadosProdutos(50, "Calça Preta", 52, 0),
    new dadosProdutos(40, 'Blusa Azul', 42.50, 0),
    new dadosProdutos(30, 'Shot nike', 12, 0),
    new dadosProdutos(20, 'Camiseta Cinza M', 25, 0),
    new dadosProdutos(10, 'Saia M Violeta', 20, 0)
  ]
  ordemdadosNotaFiscal: dadosNotaFiscal[];
  ordemProduto = new dadosProdutos(0, '', 0, 0);
  ordemDadosCliente = new dadosCliente('', '', 0);
  orNotaFical = new dadosNotaFiscal(0, "", 0, 0);





  listaProdutos: any[];

  addItem() {

    let verifica = false;

    // Criando o produto novo
    if (this.ordemProduto.nome != '' && this.ordemProduto.quantidade != 0) {

      this.ordemProduto = new dadosProdutos(0, this.ordemProduto.nome, 0, this.ordemProduto.quantidade)

      for (let index of this.estoqueProduto) {
        if (this.ordemProduto.nome == index.nome) {
          this.ordemProduto.codigo = index.codigo;
          this.ordemProduto.valor = index.valor;
        }
      }
      console.log(this.ordemProduto)
      this.listaProdutos.push(this.ordemProduto);
    }





  }


}
