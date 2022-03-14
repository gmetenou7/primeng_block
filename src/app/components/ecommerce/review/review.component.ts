import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './review.component.html'
})
export class ReviewComponent {

    reviewOrder: number = 0;

    reviewOrderOptions: SelectItem[] = [
        {label: 'Most recent', value: 0},
        {label: 'Most popular', value: 1},
        {label: 'Most viewed', value: 2}
    ]; 

    block1: string = `
`;

    block2: string = `
`;

    block3: string = `
`;

    block4: string = `
`;

}
