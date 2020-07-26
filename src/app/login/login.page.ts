import { Component, OnInit } from '@angular/core'

import {LoginService} from './login.service'
import { Aluno } from '../interfaces/aluno'
import { Router } from '@angular/router'
import { isUndefined } from 'util'
import { Sessao } from '../sessao/sessao'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login: string
    senha: string
    aluno: Aluno
    aluno$: Observable<Aluno>

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  autenticar(){

    this.aluno$ = this.loginService.getAluno(this.login, this.senha)
    this.aluno$.subscribe( dados => this.aluno = dados,
                            err => {},
                            () => this.router.navigate(['/estagio']))                        
  }
  
}
