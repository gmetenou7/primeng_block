import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionListComponent } from './descriptionlist.component';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DescriptionListRoutingModule } from './descriptionlist-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ChipModule,
    DescriptionListRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DescriptionListComponent
  ]
})
export class DescriptionListModule {}
