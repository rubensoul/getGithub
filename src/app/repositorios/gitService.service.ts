import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { usuarios } from './model/usuario';
import { repositorios } from './model/repositorio';
import { catchError } from 'rxjs/operators';
import { RepositoriosSearch } from './model/repositorio-search';


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



  // Search
  search(term: string): Observable<RepositoriosSearch[]> {
    return this.http
      .get<RepositoriosSearch[]>(`https://api.github.com/search/repositories?q=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }


}
