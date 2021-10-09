import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    AccordionModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    BlockViewerModule
  ],
  declarations: [
    FaqComponent
  ]
})
export class FaqModule {}