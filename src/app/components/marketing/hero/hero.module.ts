import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { BlockViewer } from '../../../blockviewer';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    ButtonModule
  ],
  declarations: [
    HeroComponent,
    BlockViewer
  ]
})
export class HeroModule {}