import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    TabsRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    TabsComponent
  ]
})
export class TabsModule {}
