import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './sectionheading.component.html'
})
export class SectionHeadingComponent implements OnInit {

    block1 = `
<div class="surface-section">
    <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div class="flex align-items-center">
            <i class="pi pi-inbox text-2xl mr-3 text-500"></i>
            <span class="text-3xl font-medium text-900">Messages</span>
        </div>
        <div class="mt-3 md:mt-0">
            <button pButton pRipple label="Settings" class="p-button-outlined mr-3" icon="pi pi-cog"></button>
            <button pButton pRipple label="Compose" icon="pi pi-plus"></button>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-section">
    <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div class="mb-3 lg:mb-0">
            <div class="text-3xl font-medium text-900 mb-3">Messages</div>
            <div class="text-500 mr-0 md:mr-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <span class="p-input-icon-left w-full md:w-auto">
            <i class="pi pi-search"></i>
            <input type="text" pInputText placeholder="Search" class="w-full md:w-auto"/>
        </span>
    </div>
</div>`;

    block3 = `
<div class="surface-section">
    <div class="text-3xl font-medium text-900 mb-4">Application</div>
    <p-tabMenu [model]="items" [activeItem]="items[0]"></p-tabMenu>
</div>`;

    block4 = `
<div class="surface-section">
    <div class="flex lg:align-items-center flex-column lg:flex-row">
        <div class="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">Application</div>
        <p-tabMenu [model]="items" [activeItem]="items[0]" class="flex-grow-1"></p-tabMenu>
    </div>
</div>`;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Overview', icon: 'pi pi-home'},
            {label: 'Members', icon: 'pi pi-users'},
            {label: 'Sales', icon: 'pi pi-shopping-cart'},
            {label: 'Profile', icon: 'pi pi-user'},
            {label: 'Settings', icon: 'pi pi-cog'}
        ];
    }
    
}
