import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PricingComponent } from './pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PricingRoutingModule
  ],
  declarations: [
    PricingComponent
  ]
})
export class PricingModule { }