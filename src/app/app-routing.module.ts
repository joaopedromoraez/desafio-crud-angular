import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';


const routes: Routes = [
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  { path:'cadastro', component: CadastroComponent},
  { path:'usuarios', component: ListagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
