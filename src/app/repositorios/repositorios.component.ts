import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {
  public searchText: string;

  name = 'Angular';
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]

  constructor() { }

  ngOnInit() {
  }



}
