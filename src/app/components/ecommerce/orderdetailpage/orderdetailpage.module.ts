import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailPageRoutingModule } from './orderdetailpage-routing.module';
import { OrderDetailPageComponent } from './orderdetailpage.component';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [
    CommonModule,
    BlockViewerModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    StyleClassModule,
    CheckboxModule,
    OrderDetailPageRoutingModule
  ],
  declarations: [OrderDetailPageComponent]
})
export class OrderDetailPageModule { }
