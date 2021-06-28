import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterRoutingModule } from './footer-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    FooterComponent
  ]
})
export class FooterModule {}
