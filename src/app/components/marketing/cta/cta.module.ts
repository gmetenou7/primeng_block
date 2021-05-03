import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from './cta.component';
import { CtaRoutingModule } from './cta-routing.module';
import { ButtonModule} from 'primeng/button';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    CtaRoutingModule,
    ButtonModule,
    BlockViewerModule
  ],
  declarations: [
    CtaComponent
  ]
})
export class CtaModule {}