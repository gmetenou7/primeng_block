import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './cardheading.component.html'
})
export class CardHeadingComponent implements OnInit {

    block1 = ``;

    block2 = ``;

    block3 = ``;

    block4 = ``;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
        {
            label: 'Options',
            items: [
                {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
                {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
            ]
        }];
    }
}
