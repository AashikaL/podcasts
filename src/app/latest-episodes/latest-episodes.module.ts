import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestEpisodesPageRoutingModule } from './latest-episodes-routing.module';

import { LatestEpisodesPage } from './latest-episodes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestEpisodesPageRoutingModule
  ],
  declarations: [LatestEpisodesPage]
})
export class LatestEpisodesPageModule {}
