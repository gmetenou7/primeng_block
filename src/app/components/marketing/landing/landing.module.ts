import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AvatarModule } from 'primeng/avatar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { StyleClassModule } from '../../../styleClass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    InputTextModule,
    InputTextareaModule,
    AvatarModule,
    InputSwitchModule,
    StyleClassModule,
    ButtonModule,
    BlockViewerModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule {}