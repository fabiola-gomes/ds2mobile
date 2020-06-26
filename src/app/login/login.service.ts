import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Aluno } from '../interfaces/aluno';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService{

    API: string = environment.API;

    constructor(private http: HttpClient){

    }
    
    getAluno(login: string, senha:string){
        return this.http.get<Aluno>(this.API+'/login/'+login+'/'+senha);
    }
}