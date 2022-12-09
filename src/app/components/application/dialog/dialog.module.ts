import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogModule as ModalModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    DialogRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DialogComponent
  ]
})
export class DialogModule {}
