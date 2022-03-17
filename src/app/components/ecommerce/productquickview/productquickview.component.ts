import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './productquickview.component.html'
})
export class ProductQuickviewComponent implements OnInit {

    hovered: boolean;

    visibleDialog: boolean;

    color1: string = 'cyan';

    size1: string = 'M';

    images: string[];

    responsiveOptions:any[] = [
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 2
    }];

    ngOnInit(): void {
        this.images = [
            'product-quickview-2-1.png',
            'product-quickview-2-2.png',
            'product-quickview-2-3.png',
            'product-quickview-2-4.png',
            'product-quickview-2-5.png',
            'product-quickview-2-6.png'
        ];
    }

    block1: string = `
`;

    block2: string = `
`;

}
