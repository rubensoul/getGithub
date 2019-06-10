import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { repositorios } from './repositorio_model';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  url = "https://api.github.com";

constructor(private http: HttpClient) { }

 public getAll():Observable<any>{
   return this.http.get(this.url + '/repositories');
  }

  public getRepositoriosUsuario(user):Observable<any>{
      return this.http.get(this.url + '/users/{{user}}/repos')
  }



}
