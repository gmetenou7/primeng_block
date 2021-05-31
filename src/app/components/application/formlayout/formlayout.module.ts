import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormLayoutComponent } from './formlayout.component';
import { FormLayoutRoutingModule } from './formlayout-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { InputTextModule } from 'primeng/inputtext'; 
import { InputTextareaModule } from 'primeng/inputtextarea'; 
import { ButtonModule } from 'primeng/button'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { FileUploadModule } from 'primeng/fileupload'; 
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormLayoutRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    FileUploadModule,
    CheckboxModule,
    BlockViewerModule
  ],
  declarations: [
    FormLayoutComponent
  ]
})
export class FormLayoutModule {}
