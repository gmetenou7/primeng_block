import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebarlayout.component';
import { SidebarLayoutRoutingModule } from './sidebarlayout-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarLayoutRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    SidebarLayoutComponent
  ]
})
export class SidebarLayoutModule {}
