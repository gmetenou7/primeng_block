import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FooterRoutingModule} from './footer-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import {RippleModule} from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule,
    BlockViewerModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [
    FooterComponent
  ]
})
export class FooterModule {
}
