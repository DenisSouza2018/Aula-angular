import { Injectable } from '@angular/core';
import { ApiUrl } from '../url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasApiService {

  path = 'categorias.php';

  constructor(private httpClient: HttpClient) { }

  GetCategorias() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${ApiUrl}/${this.path}`).subscribe(resolve, reject);
    });
  }

  GetCategoriaById(id: number) {
    const params: any = { id };

    return new Promise((resolve, reject) => {
      this.httpClient.get(`${ApiUrl}/${this.path}`, { params }).subscribe(resolve, reject);
    });
  }

}
