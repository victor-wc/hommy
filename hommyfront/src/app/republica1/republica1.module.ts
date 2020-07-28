import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Republica1PageRoutingModule } from './republica1-routing.module';

import { Republica1Page } from './republica1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Republica1PageRoutingModule
  ],
  declarations: [Republica1Page]
})
export class Republica1PageModule {}
