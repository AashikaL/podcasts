import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tap4',
    loadChildren: () => import('./tap4/tap4.module').then( m => m.Tap4PageModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./shows/shows.module').then( m => m.ShowsPageModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./saved/saved.module').then( m => m.SavedPageModule)
  },
  {
    path: 'downloaded',
    loadChildren: () => import('./downloaded/downloaded.module').then( m => m.DownloadedPageModule)
  },
  {
    path: 'latest-episodes',
    loadChildren: () => import('./latest-episodes/latest-episodes.module').then( m => m.LatestEpisodesPageModule)
  },
  {
    path: 'album',
    loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
