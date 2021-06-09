import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from '../../../styleClass';
import { NavBarRoutingModule } from './navbar-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    NavBarRoutingModule,
    ButtonModule,
    BadgeModule,
    InputTextModule,
    StyleClassModule,
    BlockViewerModule
  ],
  declarations: [
    NavBarComponent
  ]
})
export class NavBarModule {}