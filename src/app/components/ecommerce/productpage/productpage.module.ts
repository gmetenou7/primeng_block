import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './productpage.component';
import { ProductPageRoutingModule } from './productpage-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ProductPageRoutingModule
  ],
  declarations: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
