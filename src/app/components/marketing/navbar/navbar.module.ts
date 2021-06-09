import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from '../../../styleClass';
import { NavBarRoutingModule } from './navbar-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    NavBarRoutingModule,
    ButtonModule,
    StyleClassModule,
    BlockViewerModule
  ],
  declarations: [
    NavBarComponent
  ]
})
export class NavBarModule {}