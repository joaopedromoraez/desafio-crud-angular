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
    alert('Usuario cadastrado')
    this.name = "";
    this.mail = "";
    this.password = "";
    this.login = "";
    this.age = null;
  }

}
