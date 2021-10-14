import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit {

    company: any;

    ngOnInit() {
        this.company = [
            { name: 'Dave Williams', image: '1', text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”' },
            { name: 'Jane Watson', image: '2', text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”' },
            { name: 'Annie Lanphear', image: '3', text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”' }
        ];
    }

    block1 = `
<div class="surface-ground text-center px-4 py-8 md:px-6 lg:px-8">
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
<div class="surface-ground text-center text- -4 py-8 md:px-6 lg:px-8" style="height: 500px">
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

    block3 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-orange-500 font-medium mb-3 text-center">Exclusive Community</div>
    <div class="text-2xl font-medium mb-5 text-center text-900">Join Our Developer Community</div>
    <div class="grid grid-nogutter">
        <div class="col-12 lg:col-6 xl:col-4 p-4">
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style="border-radius: 10px">
                <span>
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="w-5rem" />
                </span>
                <div class="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3 text-center md:text-left">No matter where you go, Blocks is the coolest, most happening thing around! We can't understand how we've been living without Blocks.</p>
                    <span class="text-900 font-medium mb-1 mt-auto">Jane Cooper</span>
                    <div class="text-600 text-sm">Belton, Inc</div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-4 p-4">
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style="border-radius: 10px">
                <span>
                    <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" class="w-5rem"/>
                </span>
                <div class="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3 text-center md:text-left">I use Blocks often. We can't understand how we've been living without Blocks. Keep up the excellent work.</p>
                    <div class="text-900 font-medium mb-1 mt-auto">Jacob Jones</div>
                    <div class="text-600 text-sm">Vailan Corp</div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-4 p-4">
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style="border-radius: 10px">
                <span>
                    <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="w-5rem"/>
                </span>
                <div class="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3 text-center md:text-left">Just what I was looking for. I would like to personally thank you for your outstanding product.</p>
                    <div class="text-900 font-medium mb-1 mt-auto">Leslie Alexander</div>
                    <div class="text-600 text-sm">Alfred, Ltd</div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-4 p-4">
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style="border-radius: 10px">
                <span>
                    <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" class="w-5rem"/>
                </span>
                <div class="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3 text-center md:text-left">Really good. If you want real marketing that works and effective implementation - Blocks's got you covered.</p>
                    <div class="text-900 font-medium mb-1 mt-auto">Kristin Watson</div>
                    <div class="text-600 text-sm">Charot</div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-4 p-4">
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style="border-radius: 10px">
                <span>
                    <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="w-5rem"/>
                </span>
                <div class="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3 text-center md:text-left">I will recommend you to my colleagues. Thanks guys, keep up the good work! Blocks is awesome! It's really wonderful.</p>
                    <div class="text-900 font-medium mb-1 mt-auto">Cody Fisher</div>
                    <div class="text-600 text-sm">Franki</div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-4 p-4">
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style="border-radius: 10px">
                <span>
                    <img src="assets/images/blocks/avatars/circle/avatar-m-5.png" class="w-5rem"/>
                </span>
                <div class="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3 text-center md:text-left">We can't understand how we've been living without Blocks. Blocks impressed me on multiple levels. It's really wonderful.</p>
                    <div class="text-900 font-medium mb-1 mt-auto">Floyd Miles</div>
                    <div class="text-600 text-sm">Hyper, Inc</div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block4 = `
<div style="background: url('assets/images/blocks/testimonial/testimonials-4.png') no-repeat; background-size: cover" class="px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column lg:flex-row">
        <div class="flex-1 pr-0 lg:pr-6 pb-6 lg:pb-0">
            <div class="mb-5 text-900 font-bold text-5xl">Cursus metus aliquam eleifend</div>
            <p class="line-height-3 text-600 text-2xl mb-5">Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Viverra vitae congue eu consequat ac felis. 
                Magna eget est lorem ipsum dolor sit. Bibendum enim facilisis gravida neque convallis a cras semper auctor. 
                Porttitor massa id neque aliquam vestibulum morbi. 
                Purus non enim praesent elementum facilisis leo vel fringilla est. Donec massa sapien faucibus et molestie ac feugiat.</p>
            <button pButton label="Learn More" class="text-2xl"></button>
        </div>
        <div class="flex-1">
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start mb-5" style="border-radius: 10px">
                <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="w-5rem" />
                <div class="ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3">No matter where you go, Blocks is the coolest, most happening thing around! We can't understand how we've been living without Blocks.</p>
                    <div class="text-900 font-medium mb-1 text-right">Jane Cooper</div>
                    <div class="text-600 text-sm text-right">Belton, Inc</div>
                </div>
            </div>
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start mb-5" style="border-radius: 10px">
                <img src="assets/images/blocks/avatars/circle/avatar-m-5.png" class="w-5rem" />
                <div class="ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3">We can't understand how we've been living without Blocks. Blocks impressed me on multiple levels. It's really wonderful.</p>
                    <div class="text-900 font-medium mb-1 text-right">Floyd Miles</div>
                    <div class="text-600 text-sm text-right">Belton, Inc</div>
                </div>
            </div>
            <div class="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start" style="border-radius: 10px">
                <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="w-5rem" />
                <div class="ml-4 mt-4 md:mt-0">
                    <p class="mt-0 mb-3 line-height-3">Just what I was looking for. I would like to personally thank you for your outstanding product.</p>
                    <div class="text-900 font-medium mb-1 text-right">Leslie Alexander</div>
                    <div class="text-600 text-sm text-right">Alfred, Inc</div>
                </div>
            </div>
        </div>
    </div>
</div>`;


}
