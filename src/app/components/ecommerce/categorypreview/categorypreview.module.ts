import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryPreviewComponent} from './categorypreview.component';
import {CategoryPreviewRoutingModule} from './categorypreview-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {CarouselModule} from 'primeng/carousel';
@NgModule({
  imports: [
    CommonModule,
    BlockViewerModule,
    ButtonModule,
    RippleModule,
    CarouselModule,
    CategoryPreviewRoutingModule
  ],
  declarations: [
    CategoryPreviewComponent
  ]
})
export class CategoryPreviewModule { }
