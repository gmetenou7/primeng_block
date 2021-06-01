import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radiogroup.component';
import { RadioGroupRoutingModule } from './radiogroup-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    RadioGroupRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    RadioGroupComponent
  ]
})
export class RadioGroupModule {}
