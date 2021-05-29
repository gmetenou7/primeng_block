import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './stackedlist.component.html'
})
export class StackedListComponent {

    block1 = ``;

    block2 = ``;

    block3 = ``;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Add New', icon: 'pi pi-fw pi-plus'},
            {label: 'Remove', icon: 'pi pi-fw pi-minus'}
        ];
    }

}
