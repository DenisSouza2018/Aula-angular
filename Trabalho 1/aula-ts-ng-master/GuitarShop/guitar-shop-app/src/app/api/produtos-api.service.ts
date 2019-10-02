import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const host = '127.0.0.1';
const host = 'ec2-18-222-131-39.us-east-2.compute.amazonaws.com';
const port = 8081;
const ApiUrl = `http://${host}:${port}/api`;

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  path = 'produtos.php';

  constructor(private httpClient: HttpClient) { }

  GetProdutos() {
    return this.httpClient.get(`${ApiUrl}/${this.path}`).toPromise();
  }

  GetProdutoById(id: number) {
    const params: any = { id };
    return this.httpClient.get(`${ApiUrl}/${this.path}`, { params }).toPromise();
  }

  GetProdutosByCategoria(categoryId: number) {
    const params: any = { category_id: categoryId };
    return this.httpClient.get(`${ApiUrl}/${this.path}`, { params }).toPromise();
  }

  PostProduto(categoryID: number, productCode: string, productName: string, listPrice: number){
    const body: any = { categoryID, productCode, productName, listPrice };
    return this.httpClient.post(`${ApiUrl}/${this.path}`, body).toPromise();
  }

}
