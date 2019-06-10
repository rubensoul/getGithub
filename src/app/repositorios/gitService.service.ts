import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuarios } from './model/usuario';


// Passa o cabeçalho de forma opcional
const httpOptions = {
  // opcional passar application/json tendo em vista que ele é default
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  url = "https://api.github.com";

constructor(private http: HttpClient) { }

  // retorna todos os respositórios públicos
 public getAll():Observable<any>{
   return this.http.get(this.url + '/repositories');
  }

  //retorna os repositórios de usuarios selecionados
  public getRepositoriosUsuario(user: string):Observable<any>{
      const endPoint = this.url + '/users/'+ user +'/repos';
      return this.http.get(endPoint , httpOptions)
  }

  // Retorna as informações do usuario
  public getDetalheUsuario(user: string):Observable<usuarios[]>{
      const endPoint = this.url + '/users/'+ user;
      return this.http.get<usuarios[]>(endPoint , httpOptions);
  }


}
