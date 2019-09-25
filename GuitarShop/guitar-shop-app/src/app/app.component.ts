import { Component } from '@angular/core';
import { ProdutosApiService } from './api/produtos-api.service';
import { CategoriasApiService } from './api/categorias-api.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public categoryID: number;
  public productCode: string;
  public productName: string;
  public listPrice: number;
  public nomeDaCategoria: string;
 
  public minhasCategorias: any;
  public categoriaSelecionada: any;
  public meuProduto: any;

  public novoProduto: any;
  

 
 
  constructor(
    private produtosApiService: ProdutosApiService,
    private categoriasApiService: CategoriasApiService,
  ) {
 
    this.nomeDaCategoria = 'preencher aquiii';
 
    /**
     * API DE PRODUTOS
     */
    this.produtosApiService.GetProdutos().then((produtos) => {
      // todos os produtos vem na variavel 'produtos'
      console.log({ GetProdutos: produtos });
    }).catch((error) => {
      console.log({ error });
    });
 
   
 
    this.produtosApiService.GetProdutoById(1).then((produto) => {
      // produtos do id 'x' vem na variavel 'produtos'
      console.log({ GetProdutoById: produto });
    }).catch((error) => {
      console.log({ error });
    });
 
    this.produtosApiService.PostProduto(

      this.categoryID = Math.round(Math.random() * 3),
      this.productName = `Produto ${Math.round(Math.random() * 1000)}`,
      this.productCode = `Code ${Math.round(Math.random() * 1000)}`,
      this.listPrice = Math.round(Math.random() * 1000)
      ).then((produto) => {
      // produto do id 'x' vem na variavel 'produto'
      
      console.log({ PostProduto: produto });
        
    

    }).catch((error) => {
      console.log({ error });
    }); 


 
    /**
     * API DE CATEGORIAS
     */
    this.categoriasApiService.GetCategorias().then((categorias) => {
      // todos as categorias vem na variavel 'categorias'
      console.log({ GetCategorias: categorias });
 
      this.minhasCategorias = categorias;
 
    }).catch((error) => {
      console.log({ error });
    });
 
    this.categoriasApiService.GetCategoriaById(1).then((categoria) => {
      // categoria do id 'x' vem na variavel 'categoria'
      console.log({ GetCategoriaById: categoria });
    }).catch((error) => {
      console.log({ error });
    });
 
  }
 
  clicaCategoria(categoria){
    
   
 
    const id = +categoria.categoryID;
 
    this.produtosApiService.GetProdutosByCategoria(id).then((produtos) => {
      // produtos da categoria vem na variavel 'produtos'
      console.log({ GetProdutosByCategoria: produtos });
 
      this.categoriaSelecionada = produtos;
      
      
    }).catch((error) => {
      console.log({ error });
    });
 
 
 
  }
 
  SelecionaProduto(produto){
    // console.log('produto ',produto);
    this.meuProduto=produto;
 
  }
  
  SalvarProduto(productName ,categoryID,productCode,listPrice){
   // console.log('Numero da categoria: ',categoryID);
   // console.log('Nome do produto: ',productName);
   // console.log('Codigo de Produto: ',productCode);
    //console.log('Valor do Produto: ',listPrice);

    this.novoProduto= categoryID+productCode+productName+listPrice;
    console.log('Novo Produto: ', this.novoProduto);
    
    this.produtosApiService.PostProduto(categoryID, productCode, productName, listPrice).then((produtos) => {
      // produtos da categoria vem na variavel 'produtos'
      console.log({ PostProduto: produtos });
 
      this.meuProduto= produtos;
      
      
    }).catch((error) => {
      console.log({ error });
    });
 
   
  }


  
 
 
}
 

