import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavComponent } from './verticalnav.component';
import { VerticalNavRoutingModule } from './verticalnav-routing.module';
import { StyleClassModule } from 'primeng/utils';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    StyleClassModule,
    VerticalNavRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    VerticalNavComponent
  ]
})
export class VerticalNavModule {}
