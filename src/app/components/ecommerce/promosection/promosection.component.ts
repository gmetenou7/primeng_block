import { Component } from '@angular/core';

@Component({
    templateUrl: './promosection.component.html'
})
export class PromoSectionComponent {

    block1: string = `
<div class="bg-no-repeat bg-cover px-4 py-8 md:px-6 lg:px-8 text-center" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/images/blocks/ecommerce/promosection/promo-section-1-1.jpg')">
    <div class="text-white text-5xl font-bold mb-4 text-white z-1">Promo Title Placeholder</div>
    <p class="line-height-3 mt-0 mb-6 p-0 text-white text-3xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
    <button pButton pRipple label="VIEW THE SHOP" class="p-button-rounded text-2xl"></button>
</div>`;

    block2: string = `
<div class="flex flex-wrap">
    <div class="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), linear-gradient(246.36deg, #007261 15.22%, #005347 65.22%);">
        <div class="text-4xl text-white mb-3 font-medium">Promo Title Placeholder</div>
        <p class="line-height-3 mt-0 mb-7 p-0 text-white text-2xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
        <button pButton pRipple label="READ STORY" class="p-button-secondary text-2xl"></button>
    </div>
    <div class="w-full md:w-6 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/ecommerce/promosection/promo-section-2-1.jpg'); min-height: 400px;"></div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6 px-4 py-8 md:px-6 lg:px-8" style="background: linear-gradient(116.38deg, #DD364A 0%, #E34D60 28%, #EEEEEE 28.01%, #F0F1F3 64.54%);">
            <div class="text-4xl text-gray-900 mb-3 font-medium">Promo Title Placeholder</div>
            <p class="line-height-3 mt-0 mb-7 p-0 text-gray-900 text-2xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
            <button pButton pRipple label="BUY NOW" class="p-button-secondary text-2xl"></button>
        </div>
        <div class="hidden lg:block w-6 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/ecommerce/promosection/promo-section-3-1.jpg')"></div>
    </div>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column sm:flex-row sm:align-items-center mb-5">
        <span class="text-2xl font-medium text-900">Deal of the Week</span>
        <div class="flex align-items-center flex-auto mt-5 sm:mt-0">
            <div class="bg-indigo-50 w-4rem mx-2" style="height: 7px"></div>
            <div class="flex align-items-center p-2 bg-indigo-50 border-round">
                <span class="text-indigo-500 text-xl font-medium">Ends in</span>
                <span class="block bg-indigo-500 text-white border-round px-3 py-2 ml-2">12:30:00</span>
            </div>
            <div class="bg-indigo-50 ml-2 flex-auto" style="height: 7px"></div>
        </div>
    </div>
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div class="p-2">
                <div class="font-medium mb-3">SUBTITLE</div>
                <div class="mb-3">
                    <span class="line-through mr-3 text-600 text-xl">120.00</span>
                    <span class="font-medium text-xl text-pink-500">80.00</span>
                </div>
                <img src="assets/images/blocks/ecommerce/promosection/promo-section-4-1.jpg" class="block mb-3 w-full" />
                <div class="mb-4 surface-300 border-round overflow-hidden" style="height: .5rem">
                    <div class="surface-900 w-6 h-full"></div>
                </div>
                <div class="flex align-items-center justify-content-between">
                    <span class="text-600">Sold: 35</span>
                    <span class="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div class="p-2">
                <div class="font-medium mb-3">SUBTITLE</div>
                <div class="mb-3">
                    <span class="line-through mr-3 text-600 text-xl">56.00</span>
                    <span class="font-medium text-xl text-pink-500">39.00</span>
                </div>
                <img src="assets/images/blocks/ecommerce/promosection/promo-section-4-2.jpg" class="block mb-3 w-full" />
                <div class="mb-4 surface-300 border-round overflow-hidden" style="height: .5rem">
                    <div class="surface-900 w-6 h-full"></div>
                </div>
                <div class="flex align-items-center justify-content-between">
                    <span class="text-600">Sold: 35</span>
                    <span class="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div class="p-2">
                <div class="font-medium mb-3">SUBTITLE</div>
                <div class="mb-3">
                    <span class="line-through mr-3 text-600 text-xl">96.00</span>
                    <span class="font-medium text-xl text-pink-500">45.00</span>
                </div>
                <img src="assets/images/blocks/ecommerce/promosection/promo-section-4-3.jpg" class="block mb-3 w-full" />
                <div class="mb-4 surface-300 border-round overflow-hidden" style="height: .5rem">
                    <div class="surface-900 w-6 h-full"></div>
                </div>
                <div class="flex align-items-center justify-content-between">
                    <span class="text-600">Sold: 35</span>
                    <span class="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
                <div class="font-medium mb-3">SUBTITLE</div>
                <div class="mb-3">
                    <span class="line-through mr-3 text-600 text-xl">84.00</span>
                    <span class="font-medium text-xl text-pink-500">72.00</span>
                </div>
                <img src="assets/images/blocks/ecommerce/promosection/promo-section-4-4.jpg" class="block mb-3 w-full" />
                <div class="mb-4 surface-300 border-round overflow-hidden" style="height: .5rem">
                    <div class="surface-900 w-6 h-full"></div>
                </div>
                <div class="flex align-items-center justify-content-between">
                    <span class="text-600">Sold: 35</span>
                    <span class="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="p-2 w-full xl:w-6">
            <div class="bg-no-repeat bg-cover p-3 border-round pr-2" style="background: url('assets/images/blocks/ecommerce/promosection/promo-section-5-1-x.jpg')">
                <div class="border-2 border-round border-gray-900 flex flex-column sm:flex-row overflow-hidden">
                    <div class="flex-1 text-center bg-white-alpha-60 font-medium" style="backdrop-filter: blur(15px)">
                        <div class="p-6 flex flex-column align-items-center">
                            <span class="text-xl text-gray-900 mb-5">Up To</span>
                            <span class="text-xl text-gray-900 mb-5 text-5xl">25 <span class="text-xl text-gray-900">% OFF</span></span>
                            <span class="text-xl text-gray-900">Exclusive JEWELRY</span>
                        </div>
                    </div>
                    <div class="flex-1 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/ecommerce/promosection/promo-section-5-1.jpg'); min-height:200px"></div>
                </div>
            </div>
        </div>
        <div class="p-2 w-full xl:w-6">
            <div class="bg-no-repeat bg-cover p-3 border-round pr-2" style="background: url('assets/images/blocks/ecommerce/promosection/promo-section-5-2-x.jpg')">
                <div class="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                    <div class="flex-1 text-center bg-dark-alpha-60 font-medium" style="backdrop-filter: blur(15px)">
                        <div class="p-6 flex flex-column align-items-center">
                            <span class="text-xl text-gray-100 mb-5">Up To</span>
                            <span class="text-xl text-gray-100 mb-5 text-5xl">25 <span class="text-xl text-gray-100">% OFF</span></span>
                            <span class="text-xl text-gray-100">Exclusive JEWELRY</span>
                        </div>
                    </div>
                    <div class="flex-1 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/ecommerce/promosection/promo-section-5-2.jpg'); min-height:200px"></div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}
