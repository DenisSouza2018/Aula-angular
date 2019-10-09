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


  estoqueProduto: dadosProdutos[] =[
    new dadosProdutos(50,'Calça Preta',52,0),
    new dadosProdutos(40,'Blusa Azul',42.50,0),
    new dadosProdutos(30,'Shot nike',12,0),
    new dadosProdutos(20,'Camiseta Cinza M',25,0),
    new dadosProdutos(10,'Saia M Violeta',20,0)
  ]
  ordemdadosNotaFiscal: dadosNotaFiscal[];

  ordemProduto=new dadosProdutos(0,'',0,0);
  ordemDadosCliente = new dadosCliente('','',0);
  orNotaFical = new dadosNotaFiscal(0,"",0,0);
  
  


 

  public addItem(){


    if(this.ordemProduto.nome != '' && this.ordemProduto.quantidade != 0){
     
      this.ordemProduto = new dadosProdutos(0,this.ordemProduto.nome,0,this.ordemProduto.quantidade)
    
      let verifica: Boolean;

      for(let index of this.ordemdadosNotaFiscal){
        if(index.descricao == this.ordemProduto.nome && index.descricao == this.estoqueProduto[0].nome){

          index.descricao = this.ordemProduto.nome;
          index.codigo = this.estoqueProduto[0].codigo;
          index.valor_unitario = this.estoqueProduto[0].valor ;
          index.desconto = 1
          this.orNotaFical = new dadosNotaFiscal(index.codigo,index.descricao,index.valor_unitario,index.desconto)
          verifica =true;
        }
      }
    
      if(!verifica){this.ordemdadosNotaFiscal.push(this.orNotaFical)}

      console.log(this.ordemdadosNotaFiscal)

    }



    
    

  }

  confirma(){

  }
}
