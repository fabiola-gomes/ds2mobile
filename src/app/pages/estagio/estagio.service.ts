import { Injectable } from '@angular/core';
import { Estagio} from '../../interfaces/estagio';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class EstagioService{
    
    API: string = environment.API

    constructor(private http: HttpClient){

    }
    
    getEstagio(login: string){
        return this.http.get<Estagio>(this.API+'/estagio/ativo'+login)
    }
}

