import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriosComponent } from './repositorios/repositorios.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './shared/filter.pipe';
import { GitServiceService } from './repositorios/gitService.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriosUsuarioComponent } from './repositorios/repositorios-usuario/repositorios-usuario.component';


@NgModule({
   declarations: [
      AppComponent,
      RepositoriosComponent,
      RepositoriosUsuarioComponent,
      FilterPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      NgbModule
   ],
   providers: [GitServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
