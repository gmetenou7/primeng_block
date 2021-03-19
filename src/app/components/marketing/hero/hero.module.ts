import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    ButtonModule,
    BlockViewerModule
  ],
  declarations: [
    HeroComponent
  ]
})
export class HeroModule {}