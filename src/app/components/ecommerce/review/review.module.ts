import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review.component';
import { ReviewRoutingModule } from './review-routing.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ProgressBarModule,
    DropdownModule,
    ReviewRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ReviewComponent
  ]
})
export class ReviewModule {}
