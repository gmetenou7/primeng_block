import { Component } from '@angular/core';

@Component({
    templateUrl: './newsletter.component.html'
})
export class NewsletterComponent {

    block1 = `
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

    block2 = `
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

    block3 = `
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

    block4 = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="w-full lg:hidden mb-5">
    <div class="text-900 text-4xl font-bold">Interactively Enpower
  Installed Base Users</div>
    </div>
    <div class="grid justify-content-center flex-column lg:flex-row">
        <div class="col-12 lg:col-6 py-4 lg:pr-4 flex-order-2 lg:flex-order-1">
            <div class="w-full hidden lg:block mb-5">
                <div class="text-900 text-3xl font-medium">Interactively Enpower
                  Installed Base Users</div>
            </div>
            <ul class="p-0 m-0 list-none">
              <li class="flex align-items-center py-2">
                  <div class="flex align-items-center justify-content-center mr-3">
                      <i class="pi pi-check-circle text-xl text-primary"></i>
                  </div>
                  <span class="text-700 text-base line-height-3 font-normal">Fully responsive sections.
                  </span>
              </li>
              <li class="flex align-items-center py-2">
                  <div class="flex align-items-center justify-content-center mr-3">
                      <i class="pi pi-check-circle text-xl text-primary"></i>
                  </div>
                  <span class="text-700 text-base line-height-3 font-normal">Clean code blocks.
                  </span>
              </li>
              <li class="flex align-items-center py-2">
                  <div class="flex align-items-center justify-content-center mr-3">
                      <i class="pi pi-check-circle text-xl text-primary"></i>
                  </div>
                  <span class="text-700 text-base line-height-3 font-normal">Lifetime accessing to source code.
                  </span>
              </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <input pInputText type="text" placeholder="Enter your email">
            <button pButton pRipple label="Subscribe" type="button" class="p-button-raised"></button>
        </div>
        <div class="text-600 font-normal text-base text-xs mt-1">We exist to protect your privacy. <span class="text-primary">Privacy Policy</span></div>
        </div>
        <div class="col-12 lg:col-6 flex-order-1 lg:flex-order-2">
            <img src="assets/images/blocks/newsletter/newsletter-1.png" class="border-round w-full" alt="product">
        </div>
    </div>
</div>`;

}
