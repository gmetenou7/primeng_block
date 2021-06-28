import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SettingScreenComponent } from './settingscreen.component';
import { SettingScreenRoutingModule } from './settingscreen-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { InputTextModule } from 'primeng/inputtext'; 
import { InputTextareaModule } from 'primeng/inputtextarea'; 
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { FileUploadModule } from 'primeng/fileupload'; 
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { StyleClassModule } from '../../../styleClass';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SettingScreenRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FileUploadModule,
    CheckboxModule,
    InputSwitchModule,
    StyleClassModule,
    BlockViewerModule
  ],
  declarations: [
    SettingScreenComponent
  ]
})
export class SettingScreenModule {}
