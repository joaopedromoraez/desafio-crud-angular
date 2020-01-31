import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  name: string;
  mail: string;
  password: string;
  login: string;
  age: number;
  status: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  cadastrarUsuario(form: NgForm) {
    this.apiService.cadastrar(form)
      .subscribe(response => {
        console.log(response);
        alert(`O usuario ${response.name} foi cadastrado com sucesso!`)
        this.name = "";
        this.mail = "";
        this.password = "";
        this.login = "";
        this.age = null;
      },
        error => {
          console.log(error);
          switch (error.status) {
            case 401: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 402: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 403: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 404: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 406: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 422: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 429: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 400: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
            case 500: alert(`Usuario não cadastrado. ${error.status}: ${error.error}`); break;
          }
        });
  }

}
