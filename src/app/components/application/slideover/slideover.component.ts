import { Component } from '@angular/core';

@Component({
    templateUrl: './slideover.component.html'
})
export class SlideOverComponent {

    block1 = ``;

    block2 = ``;

    block3 = ``;

    block4 = ``;

    block5 = ``;

    block6 = ``;

    block7 = ``;

    block8 = ``;

    block9 = ``;

    block10 = ``;

    users: { picture: string, name: string }[] = [
        { "picture": 'f-1.png', "name": "Jane Watson" },
        { "picture": 'm-1.png', "name": "David Wilford" },
        { "picture": 'f-2.png', "name": "Annette Black" },
        { "picture": 'f-3.png', "name": "Leslie Alexander" },
        { "picture": 'f-4.png', "name": "Savannah Nguyen" },
        { "picture": 'm-2.png', "name": "Alberto Flores" }
    ];

    user: number = 2;


}
