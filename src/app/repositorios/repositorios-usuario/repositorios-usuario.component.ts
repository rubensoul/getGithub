import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../gitService.service';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-repositorios-usuario',
  templateUrl: './repositorios-usuario.component.html',
  styleUrls: ['./repositorios-usuario.component.scss']
})
export class RepositoriosUsuarioComponent implements OnInit {

  constructor(private getservice: GitServiceService,private router: Router, private route: ActivatedRoute) { }

  user: string; 
  repositoriosUser: any;

  ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get('id');

    this.getservice.getRepositoriosUsuario(this.user).subscribe(res => this.repositoriosUser = res)
}

}

