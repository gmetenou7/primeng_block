import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './detailscreen.component.html'
})
export class DetailScreenComponent implements OnInit {

    block1 = ``;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Overview', icon: 'pi pi-home'},
            {label: 'Members', icon: 'pi pi-users'},
            {label: 'Jobs', icon: 'pi pi-search'},
            {label: 'Profile', icon: 'pi pi-user'},
            {label: 'Settings', icon: 'pi pi-cog'}
        ];
    }

}
