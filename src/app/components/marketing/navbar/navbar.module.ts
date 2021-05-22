import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { NavBarRoutingModule } from './navbar-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    NavBarRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    NavBarComponent
  ]
})
export class NavBarModule {}