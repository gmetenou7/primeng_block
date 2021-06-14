import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebarlayout.component';
import { SidebarLayoutRoutingModule } from './sidebarlayout-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from '../../../styleClass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    BadgeModule,
    StyleClassModule,
    SidebarLayoutRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    SidebarLayoutComponent
  ]
})
export class SidebarLayoutModule {}
