import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestEpisodesPage } from './latest-episodes.page';

const routes: Routes = [
  {
    path: '',
    component: LatestEpisodesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestEpisodesPageRoutingModule {}
