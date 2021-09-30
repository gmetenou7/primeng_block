import { Component } from '@angular/core';

@Component({
    templateUrl: './newsletter.component.html'
})
export class NewsletterComponent {

    block1 = `
<div class="surface-section">
    <div class="flex flex-column md:flex-row">
        <div class="flex flex-column flex-grow-1">
            <div class="text-900 font-bold text-2xl mb-3">Get our weekly updates and <span class="text-blue-500">free stuff!</span></div>
            <div class="text-600 text-xl line-height-3 md:mb-0 mb-4" style="max-width: 450px">Join our community to get weekly updates and unique gifts every friday.</div>
        </div>

        <div class="flex flex-grow-1 flex-wrap align-items-center md:justify-content-end">
            <input pInputText placeholder="Enter your email" class="p-3 md:mr-3 mr-0 md:mb-0 mb-3 border-400"
                style="min-width: 250px">
            <button pButton pRipple label="Subscribe" class="px-6 py-3 font-bold"></button>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-section text-center">
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

    block3 = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="p-6 shadow-2 text-center" style="background: linear-gradient(180deg, #6372C3 0%, #3F51B5 100%); border-radius: 1rem">
        <div class="text-white font-bold text-2xl mb-3">Stay in touch with us</div>
        <span class="block text-indigo-100 font-medium text-xl">Subscribe for updates to ensure that you don’t miss any important news from us.</span>
        <div class="mt-5 mb-3 relative w-20rem mx-auto">
            <input type="text" class="appearance-none bg-indigo-600 border-1 border-indigo-400 p-3 w-full p-component text-indigo-100 outline-none" style="border-radius: 35px" value="Enter your email">
            <button type="button" pButton class="absolute" label="Join Now" style="border-radius: 35px; top: 6px; right: 6px"></button>
        </div>
        <span class="text-indigo-200">We ensure to protect your privacy. <a tabindex="0" class="cursor-pointer text-white">Privacy Policy</a></span>
    </div>
</div>
`;

}
