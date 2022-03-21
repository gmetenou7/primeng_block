import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';
import { StoreNavigationComponent } from './storenavigation.component';
import { StoreNavigationRoutingModule } from './storenavigation-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BadgeModule,
    StyleClassModule,
    StoreNavigationRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    StoreNavigationComponent
  ]
})
export class StoreNavigationModule {}
