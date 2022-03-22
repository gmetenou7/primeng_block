import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { OrderDetailPageRoutingModule } from './orderdetailpage-routing.module';
import { OrderDetailPageComponent } from './orderdetailpage.component';

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
