import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedLayoutComponent } from './stackedlayout.component';
import { StyleClassModule } from '../../../styleClass';
import { InputTextModule } from 'primeng/inputtext';
import { StackedLayoutRoutingModule } from './stackedlayout-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    StackedLayoutRoutingModule,
    StyleClassModule,
    InputTextModule,
    BlockViewerModule
  ],
  declarations: [
    StackedLayoutComponent
  ]
})
export class StackedLayoutModule {}
