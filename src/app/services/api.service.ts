import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get('https://5e303054576f9d0014d63c26.mockapi.io/api/v1/users')
    .toPromise()
    .then(response => response)
  }
}
