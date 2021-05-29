import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './gridlist.component';
import { GridListRoutingModule } from './gridlist-routing.module';
import { ButtonModule } from 'primeng/button';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    GridListRoutingModule,
    ButtonModule,
    BlockViewerModule
  ],
  declarations: [
    GridListComponent
  ]
})
export class GridListModule {}
