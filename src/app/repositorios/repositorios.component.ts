import { Component, OnInit } from '@angular/core';
import { GitServiceService } from './gitService.service';
import { repositorios } from './repositorio_model';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss'],
  providers:[GitServiceService]
})
export class RepositoriosComponent implements OnInit {
  public searchText: string;
  repositorios:repositorios[];

  constructor(private getservice: GitServiceService) { 
    this.getservice.getAll().subscribe(res => this.repositorios = res);
    
  }

  ngOnInit() {
  }

  respositoriosUser(){
    
  }

}
