import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiColumnLayoutComponent } from './multicolumnlayout.component';
import { MultiColumnLayoutRoutingModule } from './multicolumnlayout-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from '../../../styleClass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    BadgeModule,
    StyleClassModule,
    MultiColumnLayoutRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    MultiColumnLayoutComponent
  ]
})
export class MultiColumnLayoutModule {}
