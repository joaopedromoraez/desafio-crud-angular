import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  usuarios = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.listar()
    .then(response => {
      this.usuarios = response;
    })
  }

  title = 'desafio-web-angular';
}
