import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    BlockViewerModule,
    CarouselModule
  ],
  declarations: [
    TestimonialsComponent
  ]
})
export class TestimonialsModule {}
