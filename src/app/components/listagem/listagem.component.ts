import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  usuariosPaginado = [];
  usuariosTotal = [];
  usuariosBusca = [];
  paginasTotais: number;
  paginaAtual: number = 1;
  itensPagina: number = 10;
  pagination = [];
  busca: string = "";


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.listar()
      .then(response => {
        this.usuariosTotal = response;
        this.usuariosBusca = response;
        this.usuariosPaginado = response.slice(0, this.itensPagina);
        this.paginasTotais = Math.ceil(response.length / this.itensPagina);
        for (let x = 0; x < this.paginasTotais; x++) {
          this.pagination.push(x + 1);
        }
      })
  }

  proximaPagina() {
    if (this.paginaAtual !== this.paginasTotais) {
      this.usuariosPaginado = this.usuariosBusca.slice(this.paginaAtual * this.itensPagina, (this.paginaAtual * this.itensPagina) + this.itensPagina);
      this.paginaAtual++;
    }
  }

  anteriorPagina() {
    if (this.paginaAtual !== 1) {
      this.paginaAtual--;
      this.usuariosPaginado = this.usuariosBusca.slice((this.paginaAtual - 1) * this.itensPagina, ((this.paginaAtual - 1) * this.itensPagina) + this.itensPagina);
    }
  }

  paginacao(pagina: number) {
    this.paginaAtual = pagina;
    this.usuariosPaginado = this.usuariosBusca.slice((this.paginaAtual - 1) * this.itensPagina, ((this.paginaAtual - 1) * this.itensPagina) + this.itensPagina);
  }

  buscaUsuario() {
    if (this.busca !== null) {
      this.usuariosBusca = this.usuariosTotal.filter((usuario) => {
        return usuario.name.toLowerCase().indexOf(this.busca.toLocaleLowerCase()) !== -1;
      });
      this.usuariosPaginado = this.usuariosBusca.slice(0, this.itensPagina);
      this.paginasTotais = Math.ceil(this.usuariosBusca.length / this.itensPagina);
      this.pagination = []
      for (let x = 0; x < this.paginasTotais; x++) {
        this.pagination.push(x + 1);
      }

    } else {

      this.usuariosPaginado = this.usuariosTotal.slice(0, this.itensPagina);
      this.paginasTotais = Math.ceil(this.usuariosTotal.length / this.itensPagina);
      this.pagination = [];
      for (let x = 0; x < this.paginasTotais; x++) {
        this.pagination.push(x + 1);
      }
      
    }
  }

}
