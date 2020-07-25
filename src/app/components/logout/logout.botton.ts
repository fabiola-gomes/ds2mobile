import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({selector:'logout',templateUrl:'logout.botton.html'})

export class LogoutBotton{
  constructor (private roteador:Router){

  }
  logout(){
    this.roteador.navigate(['/login'])
  }
}