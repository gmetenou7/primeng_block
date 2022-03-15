import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {PasswordModule} from 'primeng/password';
import {StyleClassModule} from 'primeng/styleclass';
import {RippleModule} from 'primeng/ripple';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {CheckoutFormRoutingModule} from './checkoutform-routing.module';
import {CheckoutFormComponent} from './checkoutform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    DividerModule,
    CalendarModule,
    PasswordModule,
    DropdownModule,
    InputNumberModule,
    StyleClassModule,
    RippleModule,
    BlockViewerModule,
    CheckoutFormRoutingModule,
  ],
  declarations: [CheckoutFormComponent]
})
export class CheckoutFormModule { }
