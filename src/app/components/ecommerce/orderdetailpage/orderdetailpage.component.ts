import { Component } from '@angular/core';

@Component({
    selector: 'app-orderdetailpage',
    templateUrl: './orderdetailpage.component.html',
})
export class OrderDetailPageComponent {
  
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

<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <span class="text-700 text-xl">Thanks!</span>
    <div class="font-bold text-4xl my-2">Successful Order 🚀</div>
    <p class="text-700 text-xl mt-0 mb-4 p-0">Your order is on the way. It'll be shipped today. We'll inform you.</p>
    <div style="height:3px;background:linear-gradient(90deg, #2196F3 0%, rgba(33, 150, 243, 0) 50%);"></div>

    <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5">
        <div class="mb-3 sm:mb-0">
            <span class="font-medium text-xl text-900 mr-2">Order number:</span>
            <span class="font-medium text-xl text-blue-500">451234</span>
        </div>
        <div>
            <button pButton pRipple label="Details" icon="pi pi-list" class="p-button-outlined p-button-secondary mr-2"></button>
            <button pButton pRipple label="Print" icon="pi pi-print" class="p-button-outlined p-button-secondary"></button>
        </div>
    </div>
    <div class="border-round surface-border border-1">
        <ul class="list-none p-0 m-0">
            <li class="p-3 border-bottom-1 surface-border flex align-items-start sm:align-items-center">
                <img src="assets/images/blocks/ecommerce/ordersummary/order-summary-1-1.png" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2" />
                <div class="flex flex-column">
                    <span class="text-900 font-medium text-xl mb-2">Product Name</span>
                    <span class="text-600 font-medium mb-3">Blue | Medium</span>
                    <span class="text-900 font-medium">Quantity 1</span>
                </div>
                <span class="text-900 font-medium text-lg ml-auto">$12.00</span>
            </li>
            <li class="p-3 flex align-items-center">
                <img src="assets/images/blocks/ecommerce/ordersummary/order-summary-1-2.png" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2" />
                <div class="flex flex-column">
                    <span class="text-900 font-medium text-xl mb-2">Product Name</span>
                    <span class="text-600 font-medium mb-3">Yellow | Large</span>
                    <span class="text-900 font-medium">Quantity 1</span>
                </div>
                <span class="text-900 font-medium text-lg ml-auto">$24.00</span>
            </li>
        </ul>
    </div>
    <div class="flex flex-wrap mt-5 pb-3">
        <div class="w-full lg:w-6 pl-3">
            <span class="font-medium text-900">Shipping Address</span>
            <div class="flex flex-column text-900 mt-3 mb-5">
                <span class="mb-1">Celeste Slater</span>
                <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                <span>(786) 713-8616</span>
            </div>

            <span class="font-medium text-900">Payment</span>
            <div class="flex align-items-center mt-3">
                <img src="assets/images/blocks/ecommerce/ordersummary/visa.png" class="w-4rem mr-3" />
                <div class="flex flex-column">
                    <span class="text-900 mb-1">Visa Debit Card</span>
                    <span class="text-900 font-medium">**** **** **** 1234</span>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
            <ul class="list-none p-0 m-0 w-full">
                <li class="mb-3"><span class="font-medium text-900">Summary</span></li>
                <li class="flex justify-content-between mb-3">
                    <span class="text-900">Subtotal</span>
                    <span class="text-900 font-medium text-lg">$36.00</span>
                </li>
                <li class="flex justify-content-between mb-3">
                    <span class="text-900">Shipping</span>
                    <span class="text-900 font-medium text-lg">$5.00</span>
                </li>
                <li class="flex justify-content-between mb-3">
                    <span class="text-900">Tax</span>
                    <span class="text-900 font-medium text-lg">$4.00</span>
                </li>
                <li class="flex justify-content-between border-top-1 surface-border py-3">
                    <span class="text-900 font-medium">Total</span>
                    <span class="text-900 font-bold text-lg">$41.00</span>
                </li>
            </ul>
        </div>
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
            <span class="text-700 text-xl block">Connect</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Instagram</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Twitter</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Facebook</a></li>
                <li><a tabindex="0" pRipple class="text-500 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Pinterest</a></li>
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
