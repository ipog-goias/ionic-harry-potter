import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersDetailPage } from './characters-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersDetailPageRoutingModule {}
