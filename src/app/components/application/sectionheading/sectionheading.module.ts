import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from './sectionheading.component';
import { SectionHeadingRoutingModule } from './sectionheading-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    SectionHeadingRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TabMenuModule,
    BlockViewerModule
  ],
  declarations: [
    SectionHeadingComponent
  ]
})
export class SectionHeadingModule {}
