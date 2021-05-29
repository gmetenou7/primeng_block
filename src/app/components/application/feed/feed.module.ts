import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    FeedComponent
  ]
})
export class FeedModule {}
