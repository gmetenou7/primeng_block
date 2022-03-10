import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './shoppingcart.component.html'
})
export class ShoppingCartComponent {

    quantities1: number[] = [1, 1, 1];

    quantities2: number[] = [1, 1];

    quantityOptions: SelectItem[] = [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}, {label: '4', value: 4}];

    visibleDialog: boolean;

    block1: string = `
`;

    block2: string = `
`;

    block3: string = `
`;

    block4: string = `
`;

    block5: string = `
`;

}
