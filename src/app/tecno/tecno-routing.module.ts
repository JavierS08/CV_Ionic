import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnoPage } from './tecno.page';

const routes: Routes = [
  {
    path: '',
    component: TecnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnoPageRoutingModule {}
