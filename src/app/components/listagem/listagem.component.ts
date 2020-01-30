import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  usuarios = [];
  usuariosTotal = [];
  paginasTotais: number;
  paginaAtual: number = 1;
  itensPagina: number = 10;
  pagination = [];
  busca: string = ""


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.listar()
      .then(response => {
        this.usuariosTotal = response;
        this.usuarios = response.slice(0, this.itensPagina);
        this.paginasTotais = Math.ceil(response.length / this.itensPagina);3
        for (let x = 0; x < this.paginasTotais; x++){
          this.pagination.push(x+1);
        }
      })
  }

  proximaPagina() {
    if (this.paginaAtual !== this.paginasTotais) {
      this.usuarios = [];
      this.usuarios = this.usuariosTotal.slice(this.paginaAtual * this.itensPagina, (this.paginaAtual * this.itensPagina) + this.itensPagina);
      this.paginaAtual++;
    }
  }

  anteriorPagina() {
    if (this.paginaAtual !== 1) {
      this.usuarios = [];
      this.paginaAtual--;
      this.usuarios = this.usuariosTotal.slice((this.paginaAtual - 1) * this.itensPagina, ((this.paginaAtual - 1) * this.itensPagina) + this.itensPagina);
    }
  }

  paginacao(pagina: any){
    this.usuarios = [];
    this.paginaAtual = pagina;
    this.usuarios = this.usuariosTotal.slice((this.paginaAtual - 1) * this.itensPagina, ((this.paginaAtual - 1) * this.itensPagina) + this.itensPagina);
  }

  buscaUsuario() {
    this.usuarios = this.usuariosTotal.filter((pokemon)=>{
      return pokemon.name.indexOf(this.busca) !== -1;
    });
    // console.table(this.listaDepokemons);
  }
}
