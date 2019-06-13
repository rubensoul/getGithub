import { Component, OnInit } from '@angular/core';
import { RepositoriosSearch, items } from '../model/repositorio-search';
import { GitServiceService } from '../gitService.service';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[GitServiceService]

})
export class SearchComponent implements OnInit {
  public searchText: string;

  repositorios: any;
  private searchTerms: Subject<string> = new Subject<string>();

  

  constructor(private getrepositorioService: GitServiceService) {
  }

  search(term: string): void {
    // Envia o termo para o observador
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.repositorios = this.searchTerms.pipe(
      debounceTime(300), // tempo de pausa entre os eventos, assim não faz requisição enquanto o user ainda está escrevendo
      distinctUntilChanged(), // ignora se o próximo termo de pesquisa for o mesmo que o anterior
      switchMap(
        term => 
          term // switch to new observable each time
            ? // return the http search observable
            this.getrepositorioService.search(term)
            : // or the observable of empty heroes if no search term
            of<RepositoriosSearch[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<RepositoriosSearch[]>([]);
      })
    );
  }

}
