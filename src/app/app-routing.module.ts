import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriosComponent } from './repositorios/repositorios.component';
import { RepositoriosUsuarioComponent } from './repositorios/repositorios-usuario/repositorios-usuario.component';
import { DetalheUsuarioComponent } from './repositorios/detalhe-usuario/detalhe-usuario.component';

const routes: Routes = [
  { path: '', component: RepositoriosComponent},
  { path: 'user/repositorios/:id', component:RepositoriosUsuarioComponent},
  { path: 'user/:id', component:DetalheUsuarioComponent},
    {
      path: 'search',
      loadChildren: './repositorios/search/search.module#SearchModule'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
