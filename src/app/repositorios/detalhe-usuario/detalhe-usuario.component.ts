import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../gitService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {
  user: string; 
  infoUser:any


  constructor(
    private getservice: GitServiceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // Pega o Id do user
    this.user = this.route.snapshot.paramMap.get('id');

    // Manda pro serviço o id e retorna a solicitação.
    this.getservice.getDetalheUsuario(this.user).subscribe(res => this.infoUser = res)
  }

}
