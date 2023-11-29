import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersDetailPageRoutingModule } from './characters-detail-routing.module';

import { CharactersDetailPage } from './characters-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersDetailPageRoutingModule
  ],
  declarations: [CharactersDetailPage]
})
export class CharactersDetailPageModule {}
