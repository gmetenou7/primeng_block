import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { StepsRoutingModule } from './steps-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    StepsRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    StepsComponent
  ]
})
export class StepsModule {}
