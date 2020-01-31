import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'https://5e303054576f9d0014d63c26.mockapi.io/api/v1/users';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.api);
  }

//   listar(): Promise<any> {
//     return this.http.get(this.api)
//                     .then(response => response
//                     .catch(err => Observable.throw(err.message));
//  } 

  cadastrar(usuario: any): Promise<any> {
    return this.http.post(this.api, usuario)
    .toPromise()
    .then(response => response);
  }
}
