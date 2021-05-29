import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedListComponent } from './stackedlist.component';
import { StackedListRoutingModule } from './stackedlist-routing.module';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    StackedListRoutingModule,
    ButtonModule,
    MenuModule,
    BlockViewerModule
  ],
  declarations: [
    StackedListComponent
  ]
})
export class StackedListModule {}
