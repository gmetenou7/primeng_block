import { Component } from '@angular/core';

@Component({
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    block1 = `
<div class="surface-section py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
    <div>
        <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40">
        <div class="mt-2 line-height-3">&copy; 2021 Bastion, Inc. All rights reserved</div>
    </div>
    <div class="mt-3 sm:mt-0">
        <a class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
            <i class="pi pi-twitter text-xl"></i>
        </a>
        <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
            <i class="pi pi-facebook text-xl"></i>
        </a>
        <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
            <i class="pi pi-github text-xl"></i>
        </a>
    </div>
</div>`;

    block2 = `
<div class="surface-section py-6 flex flex-column sm:flex-row align-items-center justify-content-between">
    <div class="flex flex-nowap font-medium">
        <a class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">HOME</a>
        <a class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">ABOUT</a>
        <a class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">CONTACT</a>
    </div>
    <div class="mt-3 sm:mt-0">
        <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40">
    </div>
</div>`;

}
