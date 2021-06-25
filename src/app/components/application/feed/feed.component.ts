import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './feed.component.html'
})
export class FeedComponent {

    block1 = ``;

    block2 = ``;

    block3 = ``;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
        {
            label: 'Options',
            items: [
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'},
                {label: 'Search', icon: 'pi pi-fw pi-search'}
            ]
        }];
    }

}
