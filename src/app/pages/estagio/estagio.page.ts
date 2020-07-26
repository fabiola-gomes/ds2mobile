import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estagio } from 'src/app/interfaces/estagio';
import { EstagioService } from './estagio.service';
import { Sessao } from 'src/app/sessao/sessao';
import { isUndefined } from 'util';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-estagio',
  templateUrl: './estagio.page.html',
  styleUrls: ['./estagio.page.scss'],
})
export class EstagioPage implements OnInit {

  estagio$: Observable<Estagio>

  constructor(private roteador: Router, private estagioService: EstagioService) {
    
    while (Sessao.usuario == null) { }

    this.estagio$ = this.estagioService.getEstagio(Sessao.usuario.matricula)
    this.estagio$.subscribe(dados => Sessao.estagio = dados)
    
  }

  sair() {
    Sessao.usuario = null
    Sessao.estagio = null
    this.roteador.navigate(['/login'])
  }

  ngOnInit() {

  }

}
