import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'characters-list',
    pathMatch: 'full'
  },
  {
    path: 'characters-list',
    loadChildren: () => import('./characters/characters-list/characters-list.module').then( m => m.CharactersListPageModule)
  },
  {
    path: 'characters-detail',
    loadChildren: () => import('./characters/characters-detail/characters-detail.module').then( m => m.CharactersDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
