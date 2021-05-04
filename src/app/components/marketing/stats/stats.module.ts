import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { StatsRoutingModule } from './stats-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule,
    BlockViewerModule,
    ButtonModule,
    InputSwitchModule
  ],
  declarations: [
    StatsComponent
  ]
})
export class StatsModule {}
