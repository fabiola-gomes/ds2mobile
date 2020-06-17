import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstagioPage } from './estagio.page';

const routes: Routes = [
  {
    path: '',
    component: EstagioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstagioPageRoutingModule {}
