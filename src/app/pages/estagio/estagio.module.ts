import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstagioPageRoutingModule } from './estagio-routing.module';

import { EstagioPage } from './estagio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstagioPageRoutingModule
  ],
  declarations: [EstagioPage]
})
export class EstagioPageModule {}
