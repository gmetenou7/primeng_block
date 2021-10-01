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

    block3 = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="border-top-1 border-300 pt-5 text-center">
        <img src="assets/images/blocks/logos/bastion-500.svg" alt="Image" height="36">
        <ul class="list-none p-0 mx-0 my-5 flex justify-content-center flex-column align-items-center lg:flex-row">
            <li><a class="text-600 cursor-pointer line-height-3 lg:mr-5">About Us</a></li>
            <li><a class="text-600 cursor-pointer line-height-3 lg:mr-5">News</a></li>
            <li><a class="text-600 cursor-pointer line-height-3 lg:mr-5">Investor Relations</a></li>
            <li><a class="text-600 cursor-pointer line-height-3 lg:mr-5">Careers</a></li>
            <li><a class="text-600 cursor-pointer line-height-3">Media Kit</a></li>
        </ul>
        <div class="flex align-items-center justify-content-center mb-5">
            <a class="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5" style="width:2.5rem; height: 2.5rem">
                <i class="pi pi-twitter"></i>
            </a>
            <a class="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5" style="width:2.5rem; height: 2.5rem">
                <i class="pi pi-facebook"></i>
            </a>
            <a class="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5" style="width:2.5rem; height: 2.5rem">
                <i class="pi pi-github"></i>
            </a>
        </div>
        <div class="text-center">
            <a class="mr-5 text-sm text-600 cursor-pointer">Privacy Policy</a>
            <a class="mr-5 text-sm text-600 cursor-pointer">Terms of Service</a>
        </div>
    </div>
</div>`;

    block4 = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex align-items-start lg:align-items-center lg:justify-content-between pb-5 border-bottom-1 border-300 flex-column lg:flex-row">
        <div class="pr-0 lg:pr-8">
            <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="50">
            <p class="text-600 line-height-3 text-xl mb-0 mt-5">Consequat nisl vel pretium lectus quam. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Integer quis auctor elit sed.</p>
        </div>
        <button pButton label="Get Started" class="mt-5 lg:mt-0 white-space-nowrap min-w-max"></button>
    </div>
    <div class="py-5 border-bottom-1 border-300">
        <div class="grid">
            <div class="col-12 sm:col-6 md:col-4 lg:col-2">
                <span class="text-900 block font-bold line-height-3 mb-3">Company</span>
                <ul class="list-none p-0 m-0">
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">About Us</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">News</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Investor Relations</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Careers</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Media Kit</a></li>
                </ul>
            </div>
            <div class="col-12 sm:col-6 md:col-4 lg:col-2">
                <span class="text-900 block font-bold line-height-3 mb-3">Resources</span>
                <ul class="list-none p-0 m-0">
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Get Started</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Learn</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Case Studies</a></li>
                </ul>
            </div>
            <div class="col-12 sm:col-6 md:col-4 lg:col-2">
                <span class="text-900 block font-bold line-height-3 mb-3">Developer</span>
                <ul class="list-none p-0 m-0">
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Courses</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Documentation</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">API Reference</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Status</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Papers</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Development Blog</a></li>
                </ul>
            </div>
            <div class="col-12 sm:col-6 md:col-4 lg:col-2">
                <span class="text-900 block font-bold line-height-3 mb-3">Community</span>
                <ul class="list-none p-0 m-0">
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Discord</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Events</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">FAQ</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Blog</a></li>
                </ul>
            </div>
            <div class="col-12 sm:col-6 md:col-4 lg:col-2">
                <span class="text-900 block font-bold line-height-3 mb-3">Connect</span>
                <ul class="list-none p-0 m-0">
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Newsletters</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Press</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Code of Conduct</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Security Guide</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Bug Bounty</a></li>
                </ul>
            </div>
            <div class="col-12 sm:col-6 md:col-4 lg:col-2">
                <span class="text-900 block font-bold line-height-3 mb-3">Legal</span>
                <ul class="list-none p-0 m-0">
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Brand Policy</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Privacty Policy</a></li>
                    <li class="mb-2"><a class="text-700 cursor-pointer line-height-3">Terms of Service</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="flex justify-content-between align-items-center py-5">
        <span>&copy; 2021 Bastion Tech</span>
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
 
    
}
