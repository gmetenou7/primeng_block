import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PricingComponent } from './pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PricingRoutingModule,
    HttpClientModule
  ],
  declarations: [
    PricingComponent
  ]
})
export class PricingModule { }