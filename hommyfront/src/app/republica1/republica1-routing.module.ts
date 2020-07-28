import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Republica1Page } from './republica1.page';

const routes: Routes = [
  {
    path: '',
    component: Republica1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Republica1PageRoutingModule {}
