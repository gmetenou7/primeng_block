import { Component } from '@angular/core';

@Component({
    templateUrl: './newsletter.component.html'
})
export class NewsletterComponent {

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap align-items-center">
        <div class="w-full lg:w-6 lg:pr-6">
            <div class="text-900 font-bold text-2xl mb-3">Get our weekly updates and <span class="text-blue-500">free stuff!</span></div>
            <div class="text-600 text-xl line-height-3 lg:mb-0 mb-4" style="max-width: 450px">Join our community to get weekly updates and unique gifts every friday.</div>
        </div>

        <div class="w-full lg:w-6">
            <div class="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end">
                <input pInputText placeholder="Enter your email" class="p-3 mr-3 border-400 mb-3 md:mb-0">
                <button pButton pRipple label="Subscribe" class="py-3 font-bold"></button>
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
    <div class="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3" style="max-width: 350px">
        🔥&nbsp;3,907 businesses already subscribed</div>
    <div class="text-2xl text-900 font-bold mb-3">Subscribe to our newsletter today</div>
    <p class="text-600 line-height-3 mb-6">Join our community to receieve the latest updates and special promotions.
    </p>

    <div class="flex align-items-center justify-content-center">
        <input pInputText placeholder="Enter your email" class="p-3 border-noround border-round-left" style="min-width: 250px">
        <button pButton pRipple icon="pi pi-chevron-right" class="border-noround border-round-right p-3 w-auto"></button>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="py-6 px-3 md:px-6shadow-2 text-center" style="background: linear-gradient(180deg, #6372C3 0%, #3F51B5 100%); border-radius: 1rem">
        <div class="text-white font-bold text-2xl mb-3">Stay in touch with us</div>
        <span class="block text-indigo-100 font-medium text-xl">Subscribe for updates to ensure that you don’t miss any important news from us.</span>
        <div class="mt-5 mb-3 relative sm:w-20rem mx-auto">
            <input type="text" class="appearance-none bg-indigo-600 border-1 border-indigo-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none" style="border-radius: 35px; padding-right:6rem" value="Your email">
            <button type="button" pButton pRipple class="absolute" label="Join" style="border-radius: 35px; top: .5rem; right: .5rem"></button>
        </div>
        <span class="text-indigo-200">We ensure to protect your privacy. <a tabindex="0" class="cursor-pointer text-white">Privacy Policy</a></span>
    </div>
</div>`;

    block4: string = `
<section class="flex flex-column lg:flex-row justify-content-between overflow-hidden gap-4 surface-section py-8">
    <div class="flex flex-column gap-5 pl-4 md:pl-6 lg:pl-8">
        <h2 class="m-0 font-bold text-900 text-4xl line-height-3">Interactively Enpower <br/> Installed Base Users</h2>
        <article class="flex flex-column gap-4">
            <p class="flex align-items-center gap-3 text-base text-700 mb-0 mt-0"><i class="pi pi-check-circle text-primary-500 text-2xl"></i>Fully responsive sections.</p>
            <p class="flex align-items-center gap-3 text-base text-700 mb-0 mt-0"><i class="pi pi-check-circle text-primary-500 text-2xl"></i>Clean code blocks.</p>
            <p class="flex align-items-center gap-3 text-base text-700 mb-0 mt-0"><i class="pi pi-check-circle text-primary-500 text-2xl"></i>Lifetime accessing to source code.</p>
        </article>
        <form class="flex flex-column gap-4 lg:gap-2" (submit)="$event.preventDefault();">
            <div class="flex flex-column align-items-start md:flex-row md:align-items-center gap-3">
                <input pInputText placeholder="Email address" class="w-20rem">
                <button pButton pRipple label="Subscribe"></button>
            </div>
            <div>
                <span class="text-base text-600">We exist to protect your privacy. <a class="text-base text-primary-500 cursor-pointer">Privacy Policy</a></span>
            </div>
        </form>
    </div>
    <img src="assets/images/blocks/newsletter/with-image.png" alt="Image" class="-mb-8 ml-4 md:ml-6 lg:ml-0">
</section>`;
}
