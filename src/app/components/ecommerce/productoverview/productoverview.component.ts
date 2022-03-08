import { Component, OnInit } from '@angular/core';

interface size {
    label: string,
    value: string
}

@Component({
    templateUrl: './productoverview.component.html'
})
export class ProductOverviewComponent implements OnInit {

    color1: string = 'cyan';

    size1: string = 'M';

    color2: string = 'pink';

    size2: string;

    color3: string = 'bluegray';

    size3: string = 'M';

    liked1: boolean;

    liked2: boolean;

    sizes: size[];

    images1: string[];

    selectedImageIndex1: number = 0;

    images2: string[];

    selectedImageIndex2: number = 0;

    quantity: number = 1;

    ngOnInit(): void {
        this.sizes = [
            {label: 'Small', value: 'S'},
            {label: 'Medium', value: 'M'},
            {label: 'Large', value: 'L'}
        ];

        this.images1 = [
            'product-overview-2-1.png',
            'product-overview-2-2.png',
            'product-overview-2-3.png',
            'product-overview-2-4.png'
        ];

        this.images2 = [
            'product-overview-3-1.png',
            'product-overview-3-2.png',
            'product-overview-3-3.png',
            'product-overview-3-4.png'
        ]
    }

    block1: string = `
`;

    block2: string = `
`;

    block3: string = `
`;

    block4: string = `
`;

}
