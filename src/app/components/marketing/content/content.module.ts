import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { TagModule } from 'primeng/tag';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    TagModule,
    BlockViewerModule
  ],
  declarations: [
    ContentComponent
  ]
})
export class ContentModule {}