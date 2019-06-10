import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriosComponent } from './repositorios/repositorios.component';
import { RepositoriosUsuarioComponent } from './repositorios/repositorios-usuario/repositorios-usuario.component';

const routes: Routes = [
  { path: '', component: RepositoriosComponent},
  {path: 'user/:id', component:RepositoriosUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
