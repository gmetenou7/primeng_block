import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    AlertRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    AlertComponent
  ]
})
export class AlertModule {}
