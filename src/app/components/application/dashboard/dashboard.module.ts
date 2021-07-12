import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from '../../../styleClass';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    BadgeModule,
    StyleClassModule,
    ButtonModule,
    MenuModule,
    DashboardRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboadModule {}