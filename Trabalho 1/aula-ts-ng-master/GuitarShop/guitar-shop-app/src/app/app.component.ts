import { Component } from '@angular/core';
import { ProdutosApiService } from './api/produtos-api.service';
import { CategoriasApiService } from './api/categorias-api.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  // Preenchido com o NGMODEL
  public categoryID: number;
  public productCode: string;
  public productName: string;
  public listPrice: number;
 
  // vai ter minhas categorias
  public minhasCategorias: any;
  public minhaCategoria: any;
  public categoriaNome: string;
 
  // vai ter meus produtos
  public meusProdutos: any;
  public detalhesProduto: any;

  //
  public valor: number;
 
  constructor(
    private produtosApiService: ProdutosApiService,
    private categoriasApiService: CategoriasApiService,
  ) {
    this.listaCategorias();
 
 
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
  }
 
  listaCategorias() {
 
    /**
     * API DE CATEGORIAS
     */
    this.categoriasApiService.GetCategorias()
      .then((categorias) => {
        // guardando no componente as categorias
        this.minhasCategorias = categorias;
      }).catch((error) => {
        console.log({ error });
      });
  }
 
 
 
  clicaCategoria(categoria) {
    const id = +categoria.categoryID;
 
    // MARCA NO FORMULÁRIO QUAL É A CATEGORIA
    this.minhaCategoria = categoria;
    this.categoryID = id;
 
    this.produtosApiService.GetProdutosByCategoria(id)
      .then((produtos) => {
        // guardando no componente os produtos da categoria
        this.meusProdutos = produtos;
      }).catch((error) => {
        console.log({ error });
      });
 
  }
 
  clicaProduto(produto) {
    const id = +produto.productID;
 
    this.produtosApiService.GetProdutoById(id)
      .then((detalhesProduto) => {
        // guardando no componente os produtos da categoria
        this.detalhesProduto = detalhesProduto;
      }).catch((error) => {
        console.log({ error });
      });
  }
 
  adiciona(productCode,productName,listPrice) {
    this.produtosApiService.PostProduto(
      this.categoryID,
      this.productCode,
      this.productName,
      this.listPrice,
    ).then(() => {
      this.clicaCategoria(this.minhaCategoria);
    }).catch((error) => {
      console.log({ error });
    });
 
    this.productCode = productCode;
    this.productName = productName;
    this.listPrice = listPrice;
  }
 
  adicionaCategoria(categoriaNome){
 
    this.categoriasApiService.PostCategoria(categoriaNome)
    .then((detalhesCategoria) => {
      // guardando no componente os produtos da categoria
      this.minhaCategoria = detalhesCategoria;
    }).catch((error) => {
      console.log({ error });
    });
 
 
    console.log("Categoria: ",categoriaNome); 
 
  }
 
  filtro(value){
    
    this.produtosApiService.GetProdutos()
    .then((Produtos) => {
      // guardando no componente os produtos da categoria
      this.detalhesProduto = Produtos;
    }).catch((error) => {
      console.log({ error });
    });
    this.valor = value;
    console.log("Valor Button: ",value);
    
  }
 
 
}
 
 

