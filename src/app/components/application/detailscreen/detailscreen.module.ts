import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailScreenComponent } from './detailscreen.component';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { DetailScreenRoutingModule } from './detailscreen-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    TabMenuModule,
    TagModule,
    AvatarModule,
    DetailScreenRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DetailScreenComponent
  ]
})
export class DetailScreenModule {}
