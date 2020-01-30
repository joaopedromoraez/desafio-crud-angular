import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  usuarios = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.listar()
    .then(response => {
      this.usuarios = response;
    })
  }

}
