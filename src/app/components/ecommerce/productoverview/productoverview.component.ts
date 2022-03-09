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

    color4: string = 'blue';

    liked1: boolean;

    liked2: boolean;

    sizes: size[];

    images1: string[];

    selectedImageIndex1: number = 0;

    images2: string[];

    selectedImageIndex2: number = 0;

    quantity1: number = 1;

    quantity2: number = 1;

    galleriaImages: string[];

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
        ];

        this.galleriaImages = [
            'product-overview-4-1.png',
            'product-overview-4-2.png',
            'product-overview-4-3.png'
        ];
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
