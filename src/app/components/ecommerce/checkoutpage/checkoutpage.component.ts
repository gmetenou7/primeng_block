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
<div class="surface-900 px-4 lg:px-8 lg:py-3 flex w-full justify-content-between align-items-center">
    <span class="text-0">Sign Up for 15% off your first order</span>
    <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center py-3 lg:py-0 px-3">
        <img src="assets/images/blocks/ecommerce/storefront/storefront-1-19.png" class="mr-2" alt="Flag">
        <span class="text-0">EUR</span>
    </a>
</div>
<div class="surface-0 lg:px-8 flex relative lg:static justify-content-between border-bottom-1 border-200" style="min-height: 42px">
    <a pRipple class="cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-2xl"></i>
    </a>
    <div class="hidden lg:flex absolute lg:static w-full surface-0 left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="flex list-none h-auto lg:5rem p-0 m-0 flex-column lg:flex-row">
            <li class="h-full">
                <a pRipple class="text-600 hover:text-900 cursor-pointer h-full inline-flex align-items-center border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-gray-900 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span class="font-bold">Women</span>
                </a>
            </li>
            <li class="h-full">
                <a pRipple class="text-600 hover:text-900 cursor-pointer h-full inline-flex align-items-center border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent border-transparent hover:border-gray-900 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span class="font-bold">Men</span>
                </a>
            </li>
            <li class="h-full">
                <a pRipple class="text-600 hover:text-900 cursor-pointer h-full inline-flex align-items-center border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent border-transparent hover:border-gray-900 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span class="font-bold">Kids</span>
                </a>
            </li>
        </ul>
    </div>
    <a pRipple class="cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-ellipsis-v text-xl"></i>
    </a>
    <div class="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-0 left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="flex list-none p-0 m-0 flex-column lg:flex-row">
            <li class="h-full">
                <a pRipple class="text-900 cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-gray-900 transition-colors transition-duration-150">
                    <span class="pi pi-search mr-2 lg:mr-0"></span>
                    <span class="font-medium inline lg:hidden">Search</span>
                </a>
            </li>
            <li class="h-full">
                <a pRipple class="text-900 cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-gray-900 transition-colors transition-duration-150">
                    <span class="pi pi-user mr-2 lg:mr-0"></span>
                    <span class="font-medium inline lg:hidden">Profile</span>
                </a>
            </li>
            <li class="h-full">
                <a pRipple class="text-900 cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-gray-900 transition-colors transition-duration-150">
                    <span class="pi pi-heart mr-2 lg:mr-0"></span>
                    <span class="font-medium inline lg:hidden">Liked Products</span>
                </a>
            </li>
            <li class="h-full">
                <a pRipple class="text-900 cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-gray-900 transition-colors transition-duration-150">
                    <span class="pi pi-shopping-cart mr-2 lg:mr-0"></span>
                    <span class="font-medium inline lg:hidden">Shopping Cart</span>
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
