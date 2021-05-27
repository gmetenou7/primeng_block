import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeadingComponent } from './cardheading.component';
import { CardHeadingRoutingModule } from './cardheading-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    CardHeadingRoutingModule,
    ButtonModule,
    MenuModule,
    BlockViewerModule
  ],
  declarations: [
    CardHeadingComponent
  ]
})
export class CardHeadingModule {}