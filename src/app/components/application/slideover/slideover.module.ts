import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOverComponent } from './slideover.component';
import { SlideOverRoutingModule } from './slideover-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { StyleClassModule } from 'primeng/styleclass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    TabViewModule,
    StyleClassModule,
    SlideOverRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    SlideOverComponent
  ]
})
export class SlideOverModule {}
