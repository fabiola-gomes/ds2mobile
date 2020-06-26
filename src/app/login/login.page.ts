import { Component, OnInit } from '@angular/core';

import {LoginService} from './login.service';
import { Aluno } from '../interfaces/aluno';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login: string;
    senha: string;
    aluno: Aluno;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  autenticar(){

    this.loginService.getAluno(this.login, this.senha)
                                .subscribe( dados => this.aluno = dados);
  }
  
}
