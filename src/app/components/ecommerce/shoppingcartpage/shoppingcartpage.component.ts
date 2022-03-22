import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-shoppingcartpage',
    templateUrl: './shoppingcartpage.component.html',
})
export class ShoppingCartPageComponent {

    quantityOptions: SelectItem[] = [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}, {label: '4', value: 4}];

    block1: string = `
<div class="bg-orange-400 px-4 lg:px-8 lg:py-3 flex w-full justify-content-between align-items-center">
    <span class="text-0">Sign Up for <span class="text-900 font-bold">15%</span>off your first order</span>
    <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center py-3 lg:py-0 px-3">
        <img src="assets/images/blocks/ecommerce/storefront/storefront-1-19.png" class="mr-2" alt="Flag">
        <span class="text-0">EUR</span>
    </a>
</div>
<div class="surface-900 lg:px-8 flex relative lg:static justify-content-between border-y-1 border-surface-500" style="min-height: 42px">
    <a pRipple class="cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-2xl"></i>
    </a>
    <div class="hidden lg:flex absolute lg:static w-full surface-900 left-0 top-100 z-1 shadow-2 lg:shadow-none">
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
    <div class="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-900 left-0 top-100 z-1 shadow-2 lg:shadow-none">
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
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column align-items-center mb-6">
        <div class="text-900 text-4xl mb-4 font-medium">Your cart total is $82.00</div>
        <p class="text-600 font-medium text-xl mt-0 mb-4">FREE SHIPPING AND RETURN</p>
        <button pButton pRipple label="Check Out"></button>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
            <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-2-1.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0" />
            <div class="flex-auto py-5 md:pl-5">
                <div class="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                    <div class="w-full sm:w-6 flex flex-column">
                        <span class="text-900 text-xl font-medium mb-3">Product Name</span>
                        <span class="text-600">Medium</span>
                    </div>
                    <div class="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                        <div>
                            <p-dropdown [options]="quantityOptions"></p-dropdown>
                        </div>
                        <div class="flex flex-column sm:align-items-end">
                            <span class="text-900 text-xl font-medium mb-2 sm:mb-3">$20.00</span>
                            <a class="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300" tabindex="0">Remove</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column">
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-envelope text-600 mr-2"></i>
                        <span class="text-600 mr-2">Order today.</span>
                    </span>
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-send text-600 mr-2"></i>
                        <span class="text-600 mr-2">Delivery by <span class="font-bold">Dec 23.</span></span>
                    </span>
                    <span class="flex align-items-center">
                        <i class="pi pi-exclamation-triangle text-600 mr-2"></i>
                        <span class="text-600">Only 8 Available.</span>
                    </span>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
            <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0" />
            <div class="flex-auto py-5 md:pl-5">
                <div class="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                    <div class="w-full sm:w-6 flex flex-column">
                        <span class="text-900 text-xl font-medium mb-3">Product Name</span>
                        <span class="text-600">Medium</span>
                    </div>
                    <div class="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                        <div>
                            <p-dropdown [options]="quantityOptions"></p-dropdown>
                        </div>
                        <div class="flex flex-column sm:align-items-end">
                            <span class="text-900 text-xl font-medium mb-2 sm:mb-3">$62.00</span>
                            <a class="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300" tabindex="0">Remove</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column">
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-envelope text-600 mr-2"></i>
                        <span class="text-600 mr-2">Order today.</span>
                    </span>
                    <span class="inline-flex align-items-center mb-3">
                        <i class="pi pi-send text-600 mr-2"></i>
                        <span class="text-600 mr-2">Delivery by <span class="font-bold">Dec 23.</span></span>
                    </span>
                    <span class="flex align-items-center">
                        <i class="pi pi-exclamation-triangle text-600 mr-2"></i>
                        <span class="text-600">Only 2 Available.</span>
                    </span>
                </div>
            </div>
        </li>
    </ul>
    <div class="flex">
        <div class="w-12rem hidden md:block"></div>
        <ul class="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto">
            <li class="flex justify-content-between mb-4">
                <span class="text-xl text-900">Subtotal</span>
                <span class="text-xl text-900">$82.00</span>
            </li>
            <li class="flex justify-content-between mb-4">
                <span class="text-xl text-900">Shipping</span>
                <span class="text-xl text-900">Free</span>
            </li>
            <li class="flex justify-content-between mb-4">
                <span class="text-xl text-900">VAT</span>
                <span class="text-xl text-900">$8.00</span>
            </li>
            <li class="flex justify-content-between border-top-1 surface-border mb-4 pt-4">
                <span class="text-xl text-900 font-bold text-3xl">Total</span>
                <span class="text-xl text-900 font-bold text-3xl">$90.00</span>
            </li>
            <li class="flex justify-content-end">
                <button pButton pRipple label="Check Out"></button>
            </li>
        </ul>
    </div>
</div>
<p-divider styleClass="w-full border-gray-200 m-0"></p-divider>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid grid-nogutter flex-column lg:flex-row text-center lg:text-left">
        <div class="col flex flex-column mt-4">
            <span class="text-700 text-xl block">Company</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>
       
        <div class="col flex flex-column mt-4">
            <span class="text-700 text-xl block">Account</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
            </ul>
        </div>
       
        <div class="col flex flex-column mt-4">
            <span class="text-700 text-xl block">Legal</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>
       
        <div class="col flex flex-column mt-4">
            <span class="text-700 text-xl block">Legal</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>

    </div>
</div>
<div class="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
    <div class="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
       <span class="text-500">© 2022, Peak. Powered by PrimeBlocks.</span>
    </div>
    <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
        <i class="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
    </div>
</div>`;
}
