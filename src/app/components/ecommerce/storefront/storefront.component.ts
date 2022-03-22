import { Component } from '@angular/core';

@Component({
    selector: 'app-storefront',
    templateUrl: './storefront.component.html',
})
export class StoreFrontComponent{

    block1: string =`
<div class="surface-section">
    <div class="surface-900 px-4 lg:px-6 lg:py-2 flex w-full justify-content-between align-items-center">
        <span class="text-0">Sign Up for 15% off your first order</span>
        <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center py-3 lg:py-0 px-3">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-19.png" class="mr-2" alt="Flag">
            <span class="text-0">EUR</span>
        </a>
    </div>
    <div class="surface-section shadow-2 lg:px-6 flex relative lg:static justify-content-between" style="min-height: 42px">
        <a pRipple class="cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars text-2xl"></i>
        </a>
        <div class="hidden lg:flex absolute lg:static w-full surface-section left-0 top-100 z-1 shadow-2 lg:shadow-none">
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
        <div class="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-section left-0 top-100 z-1 shadow-2 lg:shadow-none">
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
    <div class="surface-section h-30rem bg-no-repeat bg-cover bg-center flex align-items-center" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(assets/images/blocks/ecommerce/storefront/storefront-1-18.png);">
        <div class="px-4 mx-4 lg:px-6 lg:mx-6">
            <span class="block text-3xl text-white mb-4">New Trend</span>
            <span class="block text-4xl font-medium text-white mb-4">Woo Special Collection</span>
            <a tabindex="0" pRipple class="py-2 w-13rem text-center block mb-4 text-xl text-white font-medium border-2 cursor-pointer border-surface-0 border-round bg-white-alpha-30">Explore Collection</a>
        </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 text-4xl font-medium mb-4 text-center lg:text-left">Seasonal Collection</div>
        <p class="mt-0 p-0 mb-5 text-2xl text-600 text-center lg:text-left">Mata tincidunt dui ut ornare</p>

        <div class="grid -mt-3 -ml-3 -mr-3 flex-wrap">
            <div class="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-1.png" class="w-full h-full" alt="product">
                <p class="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div class="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-2.png" class="w-full h-full" alt="product">
                <p class="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div class="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-3.png" class="w-full h-full" alt="product">
                <p class="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div class="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-4.png" class="w-full h-full" alt="product">
                <p class="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div class="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="assets/images/blocks/ecommerce/categorypreview/category-preview-1-5.png" class="w-full h-full" alt="product">
                <p class="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabindex="0" class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
        </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-medium text-4xl mb-4">Popular Items</div>
        <p class="mt-0 p-0 mb-5 text-600 text-2xl">From Brand</p>
        <div class="grid -mt-3 -ml-3 -mr-3">
            <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div class="p-2">
                    <div class="relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-1-1.png" class="w-full" />
                        <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                            <i class="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div class="flex align-items-center justify-content-between mt-3 mb-2">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="text-900 text-xl ml-3">$14</span>
                    </div>
                    <span class="text-600">Black</span>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div class="p-2">
                    <div class="relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-1-2.png" class="w-full" />
                        <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                            <i class="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div class="flex align-items-center justify-content-between mt-3 mb-2">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="text-900 text-xl ml-3">$24</span>
                    </div>
                    <span class="text-600">Beige</span>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div class="p-2">
                    <div class="relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-1-3.png" class="w-full" />
                        <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                            <i class="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div class="flex align-items-center justify-content-between mt-3 mb-2">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="text-900 text-xl ml-3">$42</span>
                    </div>
                    <span class="text-600">White</span>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <div class="p-2">
                    <div class="relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-1-4.png" class="w-full" />
                        <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                            <i class="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div class="flex align-items-center justify-content-between mt-3 mb-2">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="text-900 text-xl ml-3">$20</span>
                    </div>
                    <span class="text-600">Black</span>
                </div>
            </div>
        </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="surface-900 text-0 p-4" style="border-radius:10px">
            <div class="flex flex-column md:flex-row md:justify-content-between xl:justify-content-evenly">
                <span class="inline-flex align-items-center mb-3 md:mb-0">
                    <i class="pi pi-shopping-cart text-base xl:text-2xl mr-3"></i>
                    <span class="text-base xl:text-2xl font-medium">Free Shipping</span>
                </span>
                <span class="inline-flex align-items-center mb-3 md:mb-0">
                    <i class="pi pi-refresh text-base xl:text-2xl mr-3"></i>
                    <span class="text-base xl:text-2xl font-medium">120 Days Return Policy</span>
                </span>
                <span class="inline-flex align-items-center">
                    <i class="pi pi-star text-base xl:text-2xl mr-3"></i>
                    <span class="text-base xl:text-2xl font-medium">10 Year Warranty</span>
                </span>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap px-4 py-8 md:px-6 lg:px-8">
        <div class="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8 surface-900">
            <div class="text-4xl text-0 mb-3 font-medium">Promo Title Placeholder</div>
            <p class="line-height-3 mt-0 mb-7 p-0 text-0 text-2xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
            <a tabindex="0" class="text-xl cursor-pointer surface-card w-10rem text-center px-5 py-3 hover:text-primary transition-duration-150">Read Story</a>
        </div>
        <div class="w-full md:w-6 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/ecommerce/storefront/storefront-1-17.png'); min-height: 400px;"></div>
    </div>
    <div class="surface-50 px-4 py-8 md:px-6 lg:px-8">
        <span class="text-900 text-3xl font-medium block text-center lg:text-left">Get 25% Discount Today!</span>
        <span class="text-600 text-2xl block mt-4 text-center lg:text-left">Sign up our email list and know all about new collections of Peak</span>
        <div class="mt-4 mx-auto lg:mx-0" style="max-width:38rem;">
            <div class="p-inputgroup">
                <input type="text" pInputText placeholder="Keyword">         
                <button type="button" pButton pRipple label="Subscribe" class="surface-900 px-5 border-none"></button>
            </div>
        </div>
        <p-divider layout="horizontal" class="border-200"></p-divider>
        <div class="grid grid-nogutter text-center lg:text-left">
        <div class="col-12 lg:col-3 mt-4 lg:mt-8 flex flex-column ">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-20.svg" class="w-9rem mx-auto lg:mx-0" alt="Peak logo">
            <div class="flex align-items-center w-full mt-5 justify-content-center lg:justify-content-start">
                <a tabindex="0" class="cursor-pointer mr-3">
                    <i class="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
                </a>
                <a tabindex="0" class="cursor-pointer mr-3">
                    <i class="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
                </a>
                <a tabindex="0" class="cursor-pointer mr-3">
                    <i class="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
                </a>
                <a tabindex="0" class="cursor-pointer">
                    <i class="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
                </a>
            </div>
            <span class="text-600 block mt-4"><i class="pi pi-phone mr-2"></i>1234 / 12 34 567</span>
            <span class="text-600 block mt-4"><i class="pi pi-map-marker mr-2"></i>Contact Us</span>
        </div>
        <div class="col-12 lg:col-3 mt-8 flex flex-column">
            <span class="text-900 text-xl font-medium block">Company</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>
        <div class="col-12 lg:col-3 mt-8 flex flex-column">
            <span class="text-900 text-xl font-medium block">Account</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
            </ul>
        </div>
        <div class="col-12 lg:col-3 mt-8 flex flex-column">
            <span class="text-900 text-xl font-medium block">Legal</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>
        </div>
    </div>
</div>`;

    block2: string =`
<div class="surface-section">
    <div class="surface-50 px-4 lg:px-6 lg:py-2 flex w-full justify-content-between align-items-center">
        <span class="text-700">Sign Up for <span class="text-orange-500">15%</span> off your first order</span>
        <a tabindex="0" class="cursor-pointer h-full inline-flex align-items-center py-3 lg:py-0 px-3">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-19.png" class="mr-2" alt="Flag">
            <span class="text-700">EUR</span>
        </a>
    </div>
    <div class="surface-section lg:px-6 flex relative lg:static justify-content-between" style="min-height: 42px">
        <a pRipple class="cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars text-2xl"></i>
        </a>
        <div class="hidden lg:flex absolute lg:static w-full surface-section left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul class="flex list-none h-auto lg:h-5rem p-0 m-0 flex-column lg:flex-row">
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
        <div class="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-section left-0 top-100 z-1 shadow-2 lg:shadow-none">
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
    <div class="surface-section grid grid-nogutter">
        <div class="col-12 lg:col-6" style="min-height:60rem;">
            <div class="grid grid-nogutter h-full">
                <div class="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column justify-content-end" style="background: url(assets/images/blocks/ecommerce/storefront/storefront-1-9.png);">
                    <span class="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabindex="0" pRipple class="text-white font-medium cursor-pointer py-2 flex align-items-center border-round">Explore Category <i class="pi pi-arrow-right ml-3"></i></a>
                </div>
                <div class="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start lg:align-items-end justify-content-end" style="background: url(assets/images/blocks/ecommerce/storefront/storefront-1-12.png);">
                    <span class="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabindex="0" pRipple class="text-white font-medium cursor-pointer py-2 flex align-items-center border-round">Explore Category <i class="pi pi-arrow-right ml-3"></i></a>
                </div>
                <div class="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column justify-content-end" style="background: url(assets/images/blocks/ecommerce/storefront/storefront-1-13.png);">
                    <span class="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabindex="0" pRipple class="text-white font-medium cursor-pointer py-2 flex align-items-center border-round">Explore Category <i class="pi pi-arrow-right ml-3"></i></a>
                </div>
                <div class="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start lg:align-items-end justify-content-end" style="background: url(assets/images/blocks/ecommerce/storefront/storefront-1-10.png);">
                    <span class="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabindex="0" pRipple class="text-white font-medium cursor-pointer py-2 flex align-items-center border-round">Explore Category <i class="pi pi-arrow-right ml-3"></i></a>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column justify-content-end lg:justify-content-start" style="background: url(assets/images/blocks/ecommerce/storefront/storefront-1-11.png); min-height:60rem;">
            <span class="text-0 block text-2xl font-bold mb-2">Category Title</span>
            <a tabindex="0" pRipple class="text-white font-medium cursor-pointer w-11rem py-2 flex align-items-center border-round">Explore Category <i class="pi pi-arrow-right ml-3"></i></a>
        </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="grid">
            <div class="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                <span class="inline-flex align-items-center justify-content-center bg-blue-500 border-circle w-3rem h-3rem mb-4">
                    <i class="pi pi-arrow-right text-white text-2xl"></i>
                </span>
                <span class="text-900 text-xl font-medium mb-4">Pay Later in 30 Days</span>
                <p class="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
            <div class="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                <span class="inline-flex align-items-center justify-content-center bg-cyan-500 border-circle w-3rem h-3rem mb-4">
                    <i class="pi pi-shopping-cart text-white text-2xl"></i>
                </span>
                <span class="text-900 text-xl font-medium mb-4">Free Shipping</span>
                <p class="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
            <div class="col-12 md:col-4 flex flex-column align-items-center">
                <span class="inline-flex align-items-center justify-content-center bg-orange-500 border-circle w-3rem h-3rem mb-4">
                    <i class="pi pi-shield text-white text-2xl"></i>
                </span>
                <span class="text-900 text-xl font-medium mb-4">Secure Payment</span>
                <p class="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="grid grid-nogutter -ml-3 -mr-3">
            <div class="col-12 lg:col-6 p-3">
                <div class="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/storefront/storefront-1-28.png); min-height:40rem;">
                    <div class="p-4 align-self-start">
                        <div class="text-white text-2xl font-bold mb-2">Category Title</div>
                        <span class="text-white text-lg line-height-3">Quis varius quam quisque id diam. A pellentesque sit amet porttitor eget. Vitae purus faucibus ornare suspendisse sed nisi lacus.</span>
                    </div>
                    <div class="p-4 align-self-end">
                        <a tabindex="0" class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i class="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="grid grid-nogutter lg:flex-column">
                    <div class="col-12 p-3">
                        <div class="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/storefront/storefront-1-27.png);">
                            <div class="p-4 align-self-start">
                                <div class="text-white text-2xl font-bold mb-2">Category Title</div>
                                <span class="text-white text-lg line-height-3">Quis varius quam quisque id diam</span>
                            </div>
                            <div class="p-4 align-self-end">
                                <a tabindex="0" class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i class="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-3">
                        <div class="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/storefront/storefront-1-26.png);">
                            <div class="p-4 align-self-start">
                                <div class="text-white text-2xl font-bold mb-2">Category Title</div>
                                <span class="text-white text-lg line-height-3">Vitae purus faucibus ornare</span>
                            </div>
                            <div class="p-4 align-self-end">
                                <a tabindex="0" class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i class="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="flex flex-wrap -mr-3 -ml-3">
            <div class="p-3 w-full xl:w-6">
                <div class="bg-no-repeat bg-cover bg-center p-3 border-round" style="background: url('assets/images/blocks/ecommerce/storefront/storefront-1-8.png')">
                    <div class="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                        <div class="flex-1 text-center bg-white-alpha-60 font-medium" style="backdrop-filter: blur(15px)">
                            <div class="p-6 flex flex-column align-items-center">
                                <span class="text-xl text-gray-900 mb-5">Up To</span>
                                <span class="text-xl text-gray-900 mb-5 text-5xl">25 <span class="text-xl text-gray-900">% OFF</span></span>
                                <span class="text-xl text-gray-900">Exclusive JEWELRY</span>
                            </div>
                        </div>
                        <div class="flex-1 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/ecommerce/storefront/storefront-1-8.png'); min-height:200px"></div>
                    </div>
                </div>
            </div>
            <div class="p-3 w-full xl:w-6">
                <div class="bg-no-repeat bg-cover bg-center p-3 border-round" style="background: url('assets/images/blocks/ecommerce/storefront/storefront-1-7.png')">
                    <div class="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                        <div class="flex-1 text-center bg-dark-alpha-60 font-medium" style="backdrop-filter: blur(15px)">
                            <div class="p-6 flex flex-column align-items-center">
                                <span class="text-xl text-gray-100 mb-5">Up To</span>
                                <span class="text-xl text-gray-100 mb-5 text-5xl">25 <span class="text-xl text-gray-100">% OFF</span></span>
                                <span class="text-xl text-gray-100">Exclusive JEWELRY</span>
                            </div>
                        </div>
                        <div class="flex-1 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/ecommerce/storefront/storefront-1-7.png'); min-height:200px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 mx-2">
        <div class="grid border-1 surface-border border-round">
            <div class="col-12 md:col-6 lg:col-4 md:border-right-1 border-bottom-1 surface-border">
                <div class="p-4">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-6-1.png" class="w-full" />
                    <div class="flex align-items-center justify-content-between mt-5 mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style="border-radius: 1rem">NEW</span>
                    </div>
                    <span class="text-900">Brand</span>
                    <div class="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 surface-border">
                <div class="p-4">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-6-2.png" class="w-full" />
                    <div class="flex align-items-center justify-content-between mt-5 mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style="border-radius: 1rem">NEW</span>
                    </div>
                    <span class="text-900">Brand</span>
                    <div class="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4 md:border-right-1 lg:border-right-none border-bottom-1 surface-border">
                <div class="p-4">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-6-3.png" class="w-full" />
                    <div class="flex align-items-center justify-content-between mt-5 mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style="border-radius: 1rem">NEW</span>
                    </div>
                    <span class="text-900">Brand</span>
                    <div class="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 lg:border-bottom-none surface-border">
                <div class="p-4">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-6-4.png" class="w-full" />
                    <div class="flex align-items-center justify-content-between mt-5 mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style="border-radius: 1rem">NEW</span>
                    </div>
                    <span class="text-900">Brand</span>
                    <div class="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 surface-border">
                <div class="p-4">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-6-5.png" class="w-full" />
                    <div class="flex align-items-center justify-content-between mt-5 mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style="border-radius: 1rem">NEW</span>
                    </div>
                    <span class="text-900">Brand</span>
                    <div class="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
                <div class="p-4">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-6-6.png" class="w-full" />
                    <div class="flex align-items-center justify-content-between mt-5 mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span class="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style="border-radius: 1rem">NEW</span>
                    </div>
                    <span class="text-900">Brand</span>
                    <div class="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
        </div>
    </div>
    <div class="surface-50 px-4 md:px-6 lg:px-8 border-1 border-200 border-x-none">
        <div class="grid grid-nogutter flex-column lg:flex-row text-center lg:text-left">
            <div class="col flex flex-column mt-4">
                <span class="text-900 text-xl block">Company</span>
                <ul class="list-none p-0">
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
                </ul>
            </div>
            <p-divider layout="vertical" class="border-200 hidden lg:static"></p-divider>
            <p-divider layout="horizontal" class="border-200 static lg:hidden"></p-divider>
            <div class="col flex flex-column mt-4">
                <span class="text-900 text-xl block">Account</span>
                <ul class="list-none p-0">
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
                </ul>
            </div>
            <p-divider layout="vertical" class="border-200 hidden lg:static"></p-divider>
            <p-divider layout="horizontal" class="border-200 static lg:hidden"></p-divider>
            <div class="col flex flex-column mt-4">
                <span class="text-900 text-xl block">Legal</span>
                <ul class="list-none p-0">
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                    <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
                </ul>
            </div>
            <p-divider layout="vertical" class="border-200 hidden lg:static"></p-divider>
            <p-divider layout="horizontal" class="border-200 static lg:hidden"></p-divider>
            <div class="col flex flex-column mt-4 mb-4 lg:mb-0">
                <span class="text-900 text-xl block">Subscribe</span>
                <span class="text-500 block mt-3">Join our community to receieve the latest updates and special promotions.</span>
                <div class="p-inputgroup mt-3 mx-auto lg:mx-0" style="max-width:30rem;">
                    <button type="button" pButton pRipple icon="pi pi-envelope" class="text-500 surface-50 border-200"></button>    
                    <input type="text" pInputText placeholder="Email" class="border-y-1 text-500 border-x-none border-200">   
                    <button type="button" pButton pRipple icon="pi pi-arrow-right" class="text-500 surface-50 border-200"></button>      
                </div>
            </div>
        </div>
    </div>
    <div class="surface-section px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
        <div class="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-21.svg" class="w-3rem mr-3" alt="Amex">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-22.svg" class="w-3rem mr-3" alt="Apple Pay">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-23.svg" class="w-3rem mr-3" alt="Mastercard">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-25.svg" class="w-3rem mr-3" alt="Visa">
            <img src="assets/images/blocks/ecommerce/storefront/storefront-1-24.svg" class="w-3rem" alt="PayPal">
        </div>
        <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
            <a tabindex="0" class="cursor-pointer mr-3">
                <i class="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
            <a tabindex="0" class="cursor-pointer mr-3">
                <i class="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
            <a tabindex="0" class="cursor-pointer mr-3">
                <i class="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
            <a tabindex="0" class="cursor-pointer">
                <i class="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
        </div>
    </div>
</div>`;
}
