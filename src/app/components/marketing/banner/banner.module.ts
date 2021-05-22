import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutingModule } from './banner-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    BannerRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    BannerComponent
  ]
})
export class BannerModule {}