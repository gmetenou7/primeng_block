import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebarnav.component';
import { SidebarNavRoutingModule } from './sidebarnav-routing.module';
import { StyleClassModule } from 'primeng/styleclass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarNavRoutingModule,
    StyleClassModule,
    BlockViewerModule
  ],
  declarations: [
    SidebarNavComponent
  ]
})
export class SidebarNavModule {}
