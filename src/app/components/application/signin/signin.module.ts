import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin.component';
import { SignInRoutingModule } from './signin-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { InputTextModule } from 'primeng/inputtext'; 
import { ButtonModule } from 'primeng/button'; 
import { CheckboxModule } from 'primeng/checkbox'; 

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SignInRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    BlockViewerModule
  ],
  declarations: [
    SignInComponent
  ]
})
export class SignInModule {}
