import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({selector:'logout',templateUrl:'logout.button.html'})

export class LogoutButton{
  constructor (private roteador:Router){

  }
  logout(){
    this.roteador.navigate(['/login'])
  }
}