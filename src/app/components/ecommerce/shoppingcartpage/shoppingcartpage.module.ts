import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartPageRoutingModule } from './shoppingcartpage-routing.module';
import { ShoppingCartPageComponent } from './shoppingcartpage.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartPageRoutingModule
  ],
  declarations: [ShoppingCartPageComponent]
})
export class ShoppingCartPageModule { }
