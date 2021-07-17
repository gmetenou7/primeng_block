import { Component } from '@angular/core';

@Component({
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    block1 = `
<div class="surface-section">
    <div class="grid pb-6 border-bottom-1 border-300">
        <div class="col-12 md:col-3">
            <div class="text-900 font-bold line-height-3 mb-3">Company</div>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">About Us</a>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">News</a>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">Investor Relations</a>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">Careers</a>
            <a class="text-700 block cursor-pointer line-height-3">Media Kit</a>
        </div>
        <div class="col-12 md:col-3">
            <div class="text-900 font-bold line-height-3 mb-3">Resourses</div>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">Get Started</a>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">Learn</a>
            <a class="text-700 block cursor-pointer line-height-3">Case Studies</a>
        </div>
        <div class="col-12 md:col-3">
            <div class="text-900 font-bold line-height-3 mb-3">Community</div>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">Discord</a>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">Events</a>
            <a class="text-700 block cursor-pointer line-height-3 mb-2">FAQ</a>
            <a class="text-700 block cursor-pointer line-height-3">Blog</a>
        </div>
        <div class="col-12 md:col-3">
            <div class="text-700 line-height-3 mb-3">Join our community to get weekly updates and unique gifts every
                friday.</div>
            <input pInputText placeholder="Enter your email" class="border-round border-400 p-3 mb-3 w-full">
            <button pButton pRipple label="Join" class="px-5 py-3"></button>
        </div>
    </div>
    <div class="flex flex-wrap align-items-center justify-content-between mt-6">
        <div class="flex align-items-center justify-content-start md:mb-0 mb-3">
            <img src="assets/images/blocks/logos/alfred-700.svg" alt="Image">
        </div>
        <div class="flex align-items-center justify-content-between md:mb-0 mb-3">
            <a class="text-700 cursor-pointer md:ml-5 ml-2">Brand Policy</a>
            <a class="text-700 cursor-pointer md:ml-5 ml-2">Privacy Policy</a>
            <a class="text-700 cursor-pointer md:ml-5 ml-2">Terms of Service</a>
        </div>
        <div class="flex align-items-center justify-content-between">
            <a class="cursor-pointer text-500 md:ml-3 ml-2">
                <i class="pi pi-twitter text-xl"></i>
            </a>
            <a class="cursor-pointer text-500 md:ml-3 ml-2">
                <i class="pi pi-facebook text-xl"></i>
            </a>
            <a class="cursor-pointer text-500 md:ml-3 ml-2">
                <i class="pi pi-github text-xl"></i>
            </a>
        </div>
    </div>
</div>`;

    block2 = `
<div class="bg-gray-900">
    <div class="grid">
        <div class="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3">
            <img src="assets/images/blocks/logos/alfred-300.svg" alt="Image">
        </div>
        <div class="col-12 md:col-3">
            <div class="text-white text-lg mb-4 flex flex-wrap" style="max-width: 290px">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</div>
            <div class="text-white mb-3"><i class="pi pi-phone border-round p-1 mr-2"></i>(31) 20 779 8986</div>
            <div class="text-white mb-3"><i class="pi pi-inbox border-round p-1 mr-2"></i>hello@alfred.co</div>
        </div>
        <div class="col-12 md:col-3 text-gray-200">
            <div class="text-white font-bold line-height-3 mb-3">Company</div>
            <a class="line-height-3 block cursor-pointer mb-2">About Us</a>
            <a class="line-height-3 block cursor-pointer mb-2">News</a>
            <a class="line-height-3 block cursor-pointer mb-2">Investor Relations</a>
            <a class="line-height-3 block cursor-pointer mb-2">Careers</a>
            <a class="line-height-3 block cursor-pointer">Media Kit</a>
        </div>
        <div class="col-12 md:col-3 text-gray-200">
            <div class="text-white font-bold line-height-3 mb-3">Resourses</div>
            <a class="line-height-3 block cursor-pointer mb-2">Get Started</a>
            <a class="line-height-3 block cursor-pointer mb-2">Learn</a>
            <a class="line-height-3 block cursor-pointer">Case Studies</a>
        </div>
    </div>
</div>`;
    
}
