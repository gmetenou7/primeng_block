import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FooterRoutingModule} from './footer-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule,
    BlockViewerModule,
    InputTextModule,
  ],
  declarations: [
    FooterComponent
  ]
})
export class FooterModule {
}
