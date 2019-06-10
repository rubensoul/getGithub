import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriosComponent } from './repositorios/repositorios.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './shared/filter.pipe';
import { GitServiceService } from './repositorios/gitService.service';

@NgModule({
   declarations: [
      AppComponent,
      RepositoriosComponent,
      FilterPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
   ],
   providers: [GitServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
