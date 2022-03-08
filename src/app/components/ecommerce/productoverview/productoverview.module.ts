import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductOverviewComponent } from './productoverview.component';
import { ProductOverviewRoutingModule } from './productoverview-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    DropdownModule,
    ProductOverviewRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ProductOverviewComponent
  ]
})
export class ProductOverviewModule {}
