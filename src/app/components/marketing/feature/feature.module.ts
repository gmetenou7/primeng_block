import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    FeatureComponent
  ]
})
export class FeatureModule {}