import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from './pageheading.component';
import { PageHeadingRoutingModule } from './pageheading-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    PageHeadingRoutingModule,
    ButtonModule,
    BlockViewerModule
  ],
  declarations: [
    PageHeadingComponent
  ]
})
export class PageHeadingModule {}
