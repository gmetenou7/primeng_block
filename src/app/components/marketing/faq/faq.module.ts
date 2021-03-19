import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    AccordionModule,
    BlockViewerModule
  ],
  declarations: [
    FaqComponent
  ]
})
export class FaqModule {}