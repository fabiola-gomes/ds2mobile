import { Component, OnInit } from '@angular/core'

import {LoginService} from './login.service'
import { Aluno } from '../interfaces/aluno'
import { Router } from '@angular/router'
import { isUndefined } from 'util'
import { Sessao } from '../sessao/sessao'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login: string
    senha: string
    aluno: Aluno

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  autenticar(){

    this.loginService.getAluno(this.login, this.senha)
                                .subscribe( dados => this.aluno = dados)
      if (!isUndefined(Sessao.usuario = this.aluno)){                       
        this.router.navigate(['/estagio'])
        
      }                         
  }
  
}
