import { Component, OnInit, AfterContentInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Estagio } from 'src/app/interfaces/estagio';
import { EstagioService } from './estagio.service';
import { Sessao } from 'src/app/sessao/sessao';
import { isUndefined } from 'util';



@Component({
  selector: 'app-estagio',
  templateUrl: './estagio.page.html',
  styleUrls: ['./estagio.page.scss'],
})
export class EstagioPage implements OnInit, AfterContentInit {

  estagio: Estagio

  constructor(private roteador: Router, private estagioService: EstagioService) {

  }

  exibir(){
    if (Sessao.usuario != null)
      this.estagioService.getEstagio(Sessao.usuario.matricula)
        .subscribe(dados => this.estagio = dados)
    if (!isUndefined(this.estagio))
      Sessao.estagio = this.estagio
  }

  sair(){
    this.roteador.navigate(['/login'])
  }

  ngOnInit() {
    
  }

  ngAfterContentInit(){

  }






}
