import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPanelComponent } from './actionpanel.component';
import { ActionPanelRoutingModule } from './actionpanel-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    ActionPanelRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ActionPanelComponent
  ]
})
export class ActionPanelModule {}
