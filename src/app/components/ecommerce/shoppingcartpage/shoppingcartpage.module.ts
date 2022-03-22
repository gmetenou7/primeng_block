import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ShoppingCartPageRoutingModule } from './shoppingcartpage-routing.module';
import { ShoppingCartPageComponent } from './shoppingcartpage.component';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
@NgModule({
  imports: [
    CommonModule,
    ShoppingCartPageRoutingModule,
    BlockViewerModule,
    ButtonModule,
    DividerModule,
    RippleModule,
    DropdownModule,
    StyleClassModule
  ],
  declarations: [ShoppingCartPageComponent]
})
export class ShoppingCartPageModule { }
