import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './sectionheading.component.html'
})
export class SectionHeadingComponent implements OnInit {

    block1 = ``;

    block2 = ``;

    block3 = ``;

    block4 = ``;

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
