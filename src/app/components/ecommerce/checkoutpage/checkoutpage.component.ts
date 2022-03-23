import { Component } from '@angular/core';

@Component({
    selector: 'app-checkoutpage',
    templateUrl: './checkoutpage.component.html',
})
export class CheckoutPageComponent {

    quantities: number[] = [1, 1, 1];

    value1: string;

    checked: boolean = true;
    
    cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    
    selectedCity: string;

    block1: string = `
<div class="surface-900 px-4 lg:px-8 lg:py-2 flex w-full justify-content-between align-items-center">
    <span class="text-0">Sign Up for 15% off your first order</span>
    <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center py-3 lg:py-0 px-3">
        <img src="assets/images/blocks/ecommerce/storefront/storefront-1-19.png" class="mr-2" alt="Flag">
        <span class="text-0">EUR</span>
    </a>
</div>

<div class="surface-overlay px-3 sm:px-8 flex flex-wrap align-items-stretch justify-content-between relative border-bottom-1 border-200">
    <a pRipple class="cursor-pointer flex align-items-center lg:hidden text-700 mr-3" pStyleClass="#nav-2" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div id="nav-2" class="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
        <ul class="list-none p-0 m-0 flex flex-column lg:flex-row">
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-primary 
                    py-3 lg:py-0 px-6 lg:px-0 text-700 select-none text-xl lg:text-base lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Women</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                    <div class="flex flex-column lg:flex-row lg:justify-content-between">
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Clothing</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="hidden lg:block">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-1.png" alt="Image" height="160" style="border-radius:12px">
                            </li>
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Clothing</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Dresses</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Jeans</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Pants</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Skirts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Blouses</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Shoes</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="hidden lg:block">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-2.png" alt="Image" height="160" style="border-radius:12px">
                            </li>
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Shoes</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Accessories</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="hidden lg:block">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-3.png" alt="Image" height="160" style="border-radius:12px">
                            </li>
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Accessories</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Beauty</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="hidden lg:block">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-2-4.png" alt="Image" height="160" style="border-radius:12px">
                            </li>
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Beauty</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Anklets</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Bracelets</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earrings</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Necklaces</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Rings</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Wedding</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Men</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Kids</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>
    <div class="flex align-items-center justify-content-center py-3">
        <img src="assets/images/blocks/logos/peak-700.svg" alt="Image" height="40">
    </div>
    <div class="flex w-full lg:w-auto border-top-1 surface-border lg:border-top-none py-3 lg:py-0">
        <ul class="list-none p-0 m-0 flex w-full">
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                    <i class="pi pi-search text-xl"></i>
                    <span class="hidden">Search</span>
                </a>
            </li>
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                    <i class="pi pi-heart text-xl"></i>
                    <span class="hidden">Favorites</span>
                </a>
            </li>
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                    <i class="pi pi-user text-xl"></i>
                    <span class="hidden">Sign In</span>
                </a>
            </li>
            <li class="flex flex-auto lg:flex-initial justify-content-center">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 text-700 hover:text-primary">
                    <i class="pi pi-shopping-cart text-xl" pBadge></i>
                    <span class="hidden">Cart</span>
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="surface-section">
    <div class="grid grid-nogutter">
        <div class="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
            <ul class="flex list-none flex-wrap p-0 mb-6">
                <li class="flex align-items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Information<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Shipping<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Payment</li>
            </ul>
            <div class="grid formgrid">
                <div class="col-12 field mb-6">
                    <span class="text-900 text-2xl block font-medium mb-5">Contact Information</span>
                    <input id="email" placeholder="Email" type="text" class="p-inputtext w-full mb-4">
                    <p-checkbox name="checkbox-1" [(ngModel)]="checked" [binary]="true" label="Email me with news and offers" class="text-900" inputId="id"></p-checkbox>
                </div>
                <div class="col-12 field mb-4">
                    <span class="text-900 text-2xl block font-medium mb-5">Shipping</span>
                    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Country / Region" optionLabel="name" [showClear]="true" styleClass="w-full"></p-dropdown>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="name" placeholder="Name" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 field mb-4">
                    <input id="address" placeholder="Address" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 field mb-4">
                    <input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="city" placeholder="City" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <p-checkbox name="checkbox-1" [(ngModel)]="checked" [binary]="true" label="Save for next purchase" class="text-900" inputId="id"></p-checkbox>
                </div>
                <div class="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                    <button pButton pRipple class="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1" label="Return to Cart"></button>
                    <button pButton pRipple class="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2" label="Continue to Shipping"></button>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
            <div class="border-bottom-1 pb-3 border-200">
                <span class="text-900 font-medium text-xl">Your Cart</span>
            </div>
            <div class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 border-200">
                <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-2.png" class="w-8rem h-8rem flex-shrink-0" />
                <div class="flex-auto mt-3 md:mt-0 md:ml-3">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <span class="text-900 font-medium">Product Name</span>
                        <span class="text-900 font-bold">$123.00</span>
                    </div>
                    <div class="text-600 text-sm mb-3">Black | Large</div>
                    <div class="flex flex-auto justify-content-between align-items-center">
                        <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" inputStyleClass="w-2rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities[0]" 
                        class="border-1 surface-border border-round" decrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                        <button pButton pRipple icon="pi pi-trash" class="text-600 p-button-text p-button-rounded"></button>
                    </div>
                </div>
            </div>
            <div class="py-2 mt-3 border-bottom-1 border-200">
                <div class="p-inputgroup mb-3">
                    <input type="text" [(ngModel)]="value1" pInputText placeholder="Promo code" class="w-full border-1 border-200 px-4">         
                    <button type="button" pButton pRipple label="Apply" [disabled]="!value1"></button>
                </div>
            </div>
            <div class="py-2 mt-3">
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-medium">Subtotal</span>
                    <span class="text-900">$123.00</span>
                </div>
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-medium">Shipping</span>
                    <span class="text-primary font-bold">Free</span>
                </div>
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-bold">Total</span>
                    <span class="text-900 font-medium text-xl">$123.00</span>
                </div>
            </div>
            <div class="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-3.png" class="mr-2" alt="Country Flag"><span class="text-black-alpha-90 font-medium">No additional duties or taxes.</span>
            </div>
        </div>
    </div>
</div>

<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mr-3 -ml-3">
        <div class="col-12 lg:col-4 p-3">
            <span class="text-900 font-bold block border-bottom-1 border-200 py-4 mb-4">COMPANY</span>
            <ul class="list-none p-0">
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">Factories</a>
                </li>
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">Careers</a>
                </li>
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">Environmental Initiatives</a>
                </li>
            </ul>
        </div>

        <div class="col-12 lg:col-4 p-3">
            <span class="text-900 font-bold block border-bottom-1 border-200 py-4 mb-4">ABOUT PEAK</span>
            <span class="text-500 mt-3">Urna molestie at elementum eu facilisis. Libero justo laoreet sit amet cursus. Ornare quam viverra orci sagittis eu volutpat odio. Id porta nibh venenatis cras sed felis eget velit. In hac habitasse platea dictumst quisque.</span>
        </div>

        <div class="col-12 lg:col-4 p-3">
            <span class="text-900 font-bold block border-bottom-1 border-200 py-4 mb-4">ACCOUNT</span>
            <ul class="list-none p-0">
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">Manage Account</a>
                </li>
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">Saved Items</a>
                </li>
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">My Cart</a>
                </li>
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">Wishlist</a>
                </li>
                <li class="mt-3">
                    <a tabindex="0" class="cursor-pointer text-500 hover:text-900">Orders & Returns</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="surface-100 px-4 py-4 md:px-6 lg:px-8 flex flex-column justify-content-between align-items-center">
    <span class="text-600">© 2022, Peak. Powered by PrimeBlocks.</span>
    <div class="col-fixed flex align-items-center mt-4">
        <i class="pi pi-twitter p-1 text-xl text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-facebook p-1 text-xl text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-youtube p-1 text-xl text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-google p-1 text-xl text-900 cursor-pointer mr-3"></i>
    </div>
</div>`;
}
