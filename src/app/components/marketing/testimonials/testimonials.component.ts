import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit {

    company: any;

    block1 = `
<div class="surface-ground text-center">
    <div class="flex flex-column md:flex-row">
        <div class="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
            <div class="shadow-2 surface-card border-round relative">
                <img src="assets/images/blocks/testimonial/testimonials-1.png" width="100" height="100" class="absolute left-50" style="margin-left:-50px; top: -50px">

                <div class="px-4 pb-4 pt-8 relative">
                    <p class="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                        “Lorem ipsum dolor sit amet, sed tempor incididunt ut labore et dolore magna alique.”
                    </p>

                    <div class="text-900 font-semibold line-height-3 mt-4">Dave Williams</div>
                    <div class="text-600 line-height-3 text-sm">Company Title</div>
                </div>
            </div>
        </div>

        <div class="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
            <div class="shadow-2 surface-card border-round relative">
                <img src="assets/images/blocks/testimonial/testimonials-2.png" width="100" height="100" class="absolute left-50" style="margin-left:-50px; top: -50px">

                <div class="px-4 pb-4 pt-8 relative">
                    <p class="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                        “Lorem ipsum dolor sit amet, sed tempor incididunt ut labore et dolore magna alique.”</p>

                    <div class="text-900 font-semibold line-height-3 mt-4">Jane Watson</div>
                    <div class="text-600 line-height-3 text-sm">Company Title</div>
                </div>
            </div>
        </div>

        <div class="flex flex-grow-1 md:px-4 py-4 md:py-0">
            <div class="shadow-2 surface-card border-round relative">
                <img src="assets/images/blocks/testimonial/testimonials-3.png" width="100" height="100" class="absolute left-50" style="margin-left:-50px; top: -50px">

                <div class="px-4 pb-4 pt-8 relative">
                    <p class="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                        “Lorem ipsum dolor sit amet, sed tempor incididunt ut labore et dolore magna alique.”</p>

                    <div class="text-900 font-semibold line-height-3 mt-4">Annie Lanphear</div>
                    <div class="text-600 line-height-3 text-sm">Company Title</div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-ground text-center text-900" style="height: 500px">
    <p-carousel [value]="company">
        <ng-template let-person pTemplate="item">
            <div class="flex justify-content-center">
                <div class="surface-card shadow-2 px-2 md:px-6 py-5 border-round mb-4 text-900 text-2xl line-highlight-3"
                    style="max-width: 600px">{{person.text}}</div>
            </div>

            <img src="assets/images/blocks/testimonial/testimonials-{{person.image}}.png" width="56" height="56" [alt]="person.name" class="mb-3" />
            <div class="text-900 font-bold line-height-3">{{person.name}}</div>
            <div class="text-600 line-height-3 mb-4">Company Title</div>
        </ng-template>
    </p-carousel>
</div>`;

    ngOnInit() {
        this.company = [
            { name: 'Dave Williams', image: '1', text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”' },
            { name: 'Jane Watson', image: '2', text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”' },
            { name: 'Annie Lanphear', image: '3', text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”' }
        ];
    }

}
