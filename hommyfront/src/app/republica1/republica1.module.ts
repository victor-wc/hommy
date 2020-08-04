import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Republica1PageRoutingModule } from './republica1-routing.module';

import { Republica1Page } from './republica1.page';

import { CardComponent } from '../component/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Republica1PageRoutingModule
  ],
  declarations: [Republica1Page, CardComponent]
})
export class Republica1PageModule {}
