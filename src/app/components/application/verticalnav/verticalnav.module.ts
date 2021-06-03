import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavComponent } from './verticalnav.component';
import { VerticalNavRoutingModule } from './verticalnav-routing.module';
import { TogglerModule } from '../../../toggler';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    TogglerModule,
    VerticalNavRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    VerticalNavComponent
  ]
})
export class VerticalNavModule {}
