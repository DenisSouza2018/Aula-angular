import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../url';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  path = 'produtos.php';

  constructor(private httpClient: HttpClient) { }

  GetProdutos() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${ApiUrl}/${this.path}`).subscribe(resolve, reject);
    });
  }

  GetProdutoById(id: number) {
    const params: any = { id };

    return new Promise((resolve, reject) => {
      this.httpClient.get(`${ApiUrl}/${this.path}`, { params }).subscribe(resolve, reject);
    });
  }

  GetProdutosByCategoria(categoryId: number) {
    const params: any = { category_id: categoryId };

    return new Promise((resolve, reject) => {
      this.httpClient.get(`${ApiUrl}/${this.path}`, { params }).subscribe(resolve, reject);
    });
  }

  PostProduto(categoryID: number, productCode: string, productName: string, listPrice: number){

    const body: any = { categoryID, productCode, productName, listPrice };

    return new Promise((resolve, reject) => {
      this.httpClient.post(`${ApiUrl}/${this.path}`, body).subscribe(resolve, reject);
    });
  }

}
