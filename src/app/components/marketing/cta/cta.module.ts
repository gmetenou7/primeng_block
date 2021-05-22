import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from './cta.component';
import { CtaRoutingModule } from './cta-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CtaRoutingModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    BlockViewerModule
  ],
  declarations: [
    CtaComponent
  ]
})
export class CtaModule {}