import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryFilterComponent} from './categoryfilter.component';
import {CategoryFilterRoutingModule} from './categoryfilter-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import {ChipModule} from 'primeng/chip';
import {GalleriaModule} from 'primeng/galleria';
import {DividerModule} from 'primeng/divider';
import {StyleClassModule} from 'primeng/styleclass';


@NgModule({
  imports: [
    CommonModule,
    BlockViewerModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    ChipsModule,
    ChipModule,
    SliderModule,
    CheckboxModule,
    AccordionModule,
    DividerModule,
    InputTextModule,
    BadgeModule,
    FormsModule,
    StyleClassModule,
    InputNumberModule,
    MultiSelectModule,
    GalleriaModule,
    CategoryFilterRoutingModule
  ],
  declarations: [
    CategoryFilterComponent
  ],
})
export class CategoryFilterModule { }
