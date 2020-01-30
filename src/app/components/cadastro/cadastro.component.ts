import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  cadastrarUsuario(form: NgForm) {
    this.apiService.cadastrar(form)
    alert('Usuario cadastrado')
    form.reset();
  }

  salvar(form: NgForm){
    console.log(form);
  }

}
