import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOverComponent } from './slideover.component';
import { SlideOverRoutingModule } from './slideover-routing.module';
import { ButtonModule } from 'primeng/button';
import { TogglerModule } from '../../../toggler';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TogglerModule,
    SlideOverRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    SlideOverComponent
  ]
})
export class SlideOverModule {}
