import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    BlockViewerModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule {}