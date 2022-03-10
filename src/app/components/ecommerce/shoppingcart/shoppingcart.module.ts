import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shoppingcart.component';
import { ShoppingCartRoutingModule } from './shoppingcart-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ShoppingCartRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule {}
