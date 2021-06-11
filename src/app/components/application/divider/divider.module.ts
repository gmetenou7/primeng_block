import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider.component';
import { ButtonModule } from 'primeng/button';
import { DividerRoutingModule } from './divider-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DividerRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DividerComponent
  ]
})
export class DividerModule {}
