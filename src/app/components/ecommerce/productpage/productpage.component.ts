import { Component } from '@angular/core';

interface size {
  label: string,
  value: string
}

@Component({
    selector: 'app-productpage',
    templateUrl: './productpage.component.html',
})
export class ProductPageComponent {

    size: string = 'M';

    color: string = 'bluegray';

    liked: boolean;

    sizes: size[];

    images: string[];

    selectedImageIndex: number = 0;

    quantity: number = 1;

    ngOnInit(): void {
        this.sizes = [
            {label: 'Small', value: 'S'},
            {label: 'Medium', value: 'M'},
            {label: 'Large', value: 'L'}
        ];

        this.images = [
            'product-overview-3-1.png',
            'product-overview-3-2.png',
            'product-overview-3-3.png',
            'product-overview-3-4.png'
        ];
    }

    block1: string = `
<section class="surface-50 font-medium py-3 text-center text-xs sm:text-base text-900"><strong>15%</strong> off on your first order.</section>
<div class="surface-overlay px-4 md:px-6 lg:px-8 flex align-items-stretch relative" style="min-height: 80px">
    <a pRipple class="cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5" pStyleClass="#nav-1" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="flex align-items-center justify-content-center">
        <img src="assets/images/blocks/logos/hyper.svg" alt="Image" class="lg:mr-6 h-2rem sm:h-3rem">
    </div>
    <div id="nav-1" class="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
        <ul class="list-none p-0 m-0 flex flex-column lg:flex-row">
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Women</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                    <div class="flex flex-column lg:flex-row lg:justify-content-between">
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Clothing</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
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
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Shoes</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Accessories</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Accessories</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Jewelry</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Jewelry</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Anklets</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Bracelets</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earrings</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Necklaces</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Rings</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Wedding</li>
                        </ul>
                        <a pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" class="font-medium text-lg cursor-pointer block lg:hidden mb-3 select-none">Brands</a>
                        <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li class="font-bold mb-5 text-xl text-900 hidden lg:block">Brands</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hyper</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Peak</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Alfred</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Bastion</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Charot</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hodly</li>
                        </ul>
                        <ul class="list-none p-0 m-0 text-700">
                            <li class="mt-5 sm:mt-0 mb-5 flex flex-column align-items-center">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-1-1.png" alt="Image" style="border-radius:12px" class="w-full lg:w-auto">
                                <span class="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">New Products</span>
                            </li>
                            <li class="mb-5 flex flex-column align-items-center">
                                <img src="assets/images/blocks/ecommerce/storenavigation/storenavigation-1-2.png" alt="Image" style="border-radius:12px" class="w-full lg:w-auto">
                                <span class="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">Discounts</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                    hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                    pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Men</span>
                </a>
                <div class="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li class="flex flex-column lg:flex-row">
                <a pRipple class="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
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
    <div class="flex ml-auto">
        <ul class="list-none p-0 m-0 flex">
            <li class="flex">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 text-700 hover:text-primary">
                    <i class="pi pi-search mr-2 lg:mr-3 text-xl sm:text-base"></i>
                    <span class="hidden lg:inline">Search</span>
                </a>
            </li>
            <li class="flex">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 text-700 hover:text-primary">
                    <i class="pi pi-heart mr-2 lg:mr-3 text-xl sm:text-base"></i>
                    <span class="hidden lg:inline">Favorites</span>
                </a>
            </li>
            <li class="flex">
                <a pRipple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 text-700 hover:text-primary">
                    <i class="pi pi-shopping-cart lg:mr-3 text-xl sm:text-base" pBadge></i>
                    <span class="hidden lg:inline">Cart</span>
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="surface-section px-4 md:px-6 lg:px-8">
    <ul class="list-none py-3 px-0 m-0 border-y-1 surface-border flex flex-wrap align-items-center font-medium overflow-x-auto">
        <li class="lg:pr-3">
            <a class="cursor-pointer text-900 white-space-nowrap">Home</a>
        </li>
        <li class="lg:px-2">
            <span class="text-900">/</span>
        </li>
        <li class="lg:px-2">
            <a class="cursor-pointer text-900 white-space-nowrap">Women</a>
        </li>
        <li class="lg:px-2">
            <span class="text-900">/</span>
        </li>
        <li class="lg:px-2">
            <a class="cursor-pointer text-900 white-space-nowrap">Tops, Blouses & Shirts</a>
        </li>
        <li class="lg:px-2">
            <span class="text-900">/</span>
        </li>
        <li class="lg:px-2">
            <a class="cursor-pointer text-500 white-space-nowrap">Tops, Blouses & Shirts</a>
        </li>
    </ul>
    
    <div class="grid my-4">
        <div class="col-12 lg:col-6">
            <div class="flex">
                <div class="flex flex-column w-2 justify-content-between">
                    <img *ngFor="let image of images; let i = index" src="assets/images/blocks/ecommerce/productoverview/{{image}}" class="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150" 
                        [ngClass]="{'border-primary': selectedImageIndex2 === i}" (click)="selectedImageIndex = i"/>
                </div>
                <div class="pl-3 w-10">
                    <img attr.src="assets/images/blocks/ecommerce/productoverview/{{images[selectedImageIndex]}}" class="w-full" />
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 py-3 lg:pl-6">
            <div class="flex align-items-center text-xl font-medium text-900 mb-4">Product Title Placeholder</div>
            <div class="flex align-items-center justify-content-between mb-5">
                <span class="text-900 font-medium text-3xl block">$120</span>
                <div class="flex align-items-center">
                    <span class="mr-3">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star text-700 mr-1"></i>
                    </span>
                    <span class="text-sm"><b class="text-900 mr-1">24</b> <span class="text-500"></span>reviews</span>
                </div>
            </div>

            <div class="font-bold text-900 mb-3">Color</div>
            <div class="flex align-items-center mb-5">
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                    [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'"></div>
            </div>

            <div class="mb-3 flex align-items-center justify-content-between">
                <span class="font-bold text-900">Size</span>
                <a tabindex="0" class="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i class="ml-1 pi pi-angle-right"></i></a>
            </div>
            <div class="grid grid-nogutter align-items-center mb-5">
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size === 'XS'}" (click)="size = 'XS'">XS</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size === 'S'}" (click)="size = 'S'">S</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size === 'M'}" (click)="size = 'M'">M</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size === 'L'}"  (click)="size = 'L'">L</div>
                <div class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    [ngClass]="{'border-blue-500 border-2 text-blue-500': size === 'XL'}" (click)="size = 'XL'">XL</div>
            </div>

            <div class="font-bold text-900 mb-3">Quantity</div>
            <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
                <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-3rem text-center" [(ngModel)]="quantity"
                    decrementButtonClass="p-button-text" incrementButtonClass="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                <div class="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
                    <button pButton pRipple label="Add to Cart" class="flex-1 mr-5"></button>
                    <i class="pi text-2xl cursor-pointer" [ngClass]="{'pi-heart text-600': !liked, 'pi-heart-fill text-orange-500': liked}" (click)="liked = !liked"></i>
                </div>
            </div>
        </div>
    </div>

    <p-tabView>
        <p-tabPanel header="Details">
            <div class="grid mt-4">
                <div class="col-12 lg:col-4">
                    <div class="font-medium text-xl text-900 mb-3">Share your experience</div>
                    <p class="text-600 p-0 mt-0 mb-3 line-height-3">Orci a scelerisque purus semper eget duis at tellus at. Ut diam quam nulla porttitor.</p>
                    <button pButton pRipple label="Write a review" class="p-button-rounded"></button>
                </div>
                <div class="col-12 lg:col-4 flex align-items-start justify-content-center py-5 lg:py-0">
                    <div>
                        <span class="text-5xl text-900 font-bold mr-2">190</span>
                        <span class="text-5xl text-600">Reviews</span>
                        <div class="mt-3 text-center">
                            <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                            <i class="pi pi-star-fill text-300 text-2xl "></i>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-4">
                    <ul class="list-none p-0 m-0">
                        <li class="flex align-items-center mb-2">
                            <span class="text-900 font-medium mr-1 w-1rem">5</span>
                            <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                            <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                                <div class="h-full bg-yellow-500 w-9 border-round"></div>
                            </div>
                            <span class="text-500 font-medium ml-2">75%</span>
                        </li>
                        <li class="flex align-items-center mb-2">
                            <span class="text-900 font-medium mr-1 w-1rem">4</span>
                            <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                            <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                                <div class="h-full bg-yellow-500 w-6"></div>
                            </div>
                            <span class="text-500 font-medium ml-2">50%</span>
                        </li>
                        <li class="flex align-items-center mb-2">
                            <span class="text-900 font-medium mr-1 w-1rem">3</span>
                            <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                            <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                                <div class="h-full bg-yellow-500 w-2"></div>
                            </div>
                            <span class="text-500 font-medium ml-2">20%</span>
                        </li>
                        <li class="flex align-items-center mb-2">
                            <span class="text-900 font-medium mr-1 w-1rem">2</span>
                            <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                            <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                                <div class="h-full bg-yellow-500 w-4"></div>
                            </div>
                            <span class="text-500 font-medium ml-2">40%</span>
                        </li>
                        <li class="flex align-items-center mb-2">
                            <span class="text-900 font-medium mr-1 w-1rem">1</span>
                            <i class="pi pi-star-fill text-yellow-500 mr-2"></i>
                            <div style="height:7px" class="border-round overflow-hidden flex-auto surface-300">
                                <div class="h-full bg-yellow-500 w-3"></div>
                            </div>
                            <span class="text-500 font-medium ml-2">30%</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-5">
                <ul class="list-none m-0 p-0">
                    <li class="py-5 border-top-1 surface-border">
                        <div class="flex align-items-center justify-content-between mb-3">
                            <div class="flex align-items-center">
                                <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                                <div class="flex flex-column">
                                    <span class="text-900 font-medium mb-1">Robert Fox</span>
                                    <span class="text-500 font-medium text-sm">February 3, 2022</span>
                                </div>
                            </div>
                            <div class="flex align-items-center">
                                <span class="mr-2">
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </span>
                                <span class="font-medium">5</span>
                            </div>
                        </div>
                        <p class="text-600 p-0 m-0 line-height-3">Scelerisque varius morbi enim nunc. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Elit ut aliquam purus sit amet luctus. Aliquam etiam erat velit scelerisque in.</p>
                    </li>
                    <li class="py-5 border-top-1 surface-border">
                        <div class="flex align-items-center justify-content-between mb-3">
                            <div class="flex align-items-center">
                                <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                                <div class="flex flex-column">
                                    <span class="text-900 font-medium mb-1">Savannah Williams</span>
                                    <span class="text-500 font-medium text-sm">February 4, 2022</span>
                                </div>
                            </div>
                            <div class="flex align-items-center">
                                <span class="mr-2">
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </span>
                                <span class="font-medium">5</span>
                            </div>
                        </div>
                        <p class="text-600 p-0 m-0 line-height-3">Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.</p>
                    </li>
                    <li class="py-5 border-top-1 surface-border">
                        <div class="flex align-items-center justify-content-between mb-3">
                            <div class="flex align-items-center">
                                <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
                                <div class="flex flex-column">
                                    <span class="text-900 font-medium mb-1">Kathryn Murphy</span>
                                    <span class="text-500 font-medium text-sm">February 5, 2022</span>
                                </div>
                            </div>
                            <div class="flex align-items-center">
                                <span class="mr-2">
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </span>
                                <span class="font-medium">5</span>
                            </div>
                        </div>
                        <p class="text-600 p-0 m-0 line-height-3">Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. </p>
                    </li>
                </ul>
            </div>
            
        </p-tabPanel>
        <p-tabPanel header="Reviews">
            <ul class="list-none p-0 m-0">
                <li class="pb-5 border-bottom-1 surface-border">
                    <span>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-gray-500"></i>
                    </span>
                    <div class="text-900 font-medium text-xl my-3">Absolute Perfection!</div>
                    <p class="mx-0 mt-0 mb-3 text-700 line-height-3">Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non.</p>
                    <span class="text-600 font-medium">Darlene Robertson, 2 days ago</span>
                </li>
                <li class="py-5 border-bottom-1 surface-border">
                    <span>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <div class="text-900 font-medium text-xl my-3">Classy</div>
                    <p class="mx-0 mt-0 mb-3 text-700 line-height-3">Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum.</p>
                    <span class="text-600 font-medium">Kristin Watson, 2 days ago</span>
                </li>
            </ul>
        </p-tabPanel>
        <p-tabPanel header="Shipping and Returns">
            <p class="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus. 
                Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum.</p>
            
            <div class="grid">
                <div class="col-12 md:col-6">
                    <span class="text-900 block font-medium mb-3">Shipping Costs</span>
                    <ul class="py-0 pl-3 m-0 text-700 mb-3">
                        <li class="mb-2">Japan - JPY 2,500.</li>
                        <li class="mb-2">Europe – EUR 10</li>
                        <li class="mb-2">Switzerland – CHF 10</li>
                        <li class="mb-2">Canada – CAD 25</li>
                        <li class="mb-2">USA – USD 20</li>
                        <li class="mb-2">Australia – AUD 30</li>
                        <li class="mb-2">United Kingdom – GBP 10</li>
                    </ul>
                </div>
                <div class="col-12 md:col-6">
                    <span class="text-900 block font-medium mb-3">Return Policy</span>
                    <p class="line-height-3 text-700 p-0 m-0">Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. </p>
                </div>
            </div>
        </p-tabPanel>
    </p-tabView>
    
    <div class="grid -mr-3 -ml-3 py-8">
        <span class="text-900 p-2 text-4xl font-medium w-full">You may also like</span>
        <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div class="p-2">
                <div class="relative">
                    <img src="assets/images/blocks/ecommerce/productpage/productpage-1-1.png" class="w-full" />
                    <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-heart text-2xl text-500"></i>
                    </button>
                </div>
                <div class="flex align-items-center justify-content-between mt-3 mb-2">
                    <span class="text-900 font-medium text-xl">Product Name</span>
                    <span class="text-900 text-xl ml-3">$114</span>
                </div>
                <span class="text-600">Black</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div class="p-2">
                <div class="relative">
                    <img src="assets/images/blocks/ecommerce/productpage/productpage-1-2.png" class="w-full" />
                    <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-heart text-2xl text-500"></i>
                    </button>
                </div>
                <div class="flex align-items-center justify-content-between mt-3 mb-2">
                    <span class="text-900 font-medium text-xl">Product Name</span>
                    <span class="text-900 text-xl ml-3">$124</span>
                </div>
                <span class="text-600">Beige</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div class="p-2">
                <div class="relative">
                    <img src="assets/images/blocks/ecommerce/productpage/productpage-1-3.png" class="w-full" />
                    <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-heart text-2xl text-500"></i>
                    </button>
                </div>
                <div class="flex align-items-center justify-content-between mt-3 mb-2">
                    <span class="text-900 font-medium text-xl">Product Name</span>
                    <span class="text-900 text-xl ml-3">$142</span>
                </div>
                <span class="text-600">White</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
                <div class="relative">
                    <img src="assets/images/blocks/ecommerce/productpage/productpage-1-4.png" class="w-full" />
                    <button type="text" pRipple class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-heart text-2xl text-500"></i>
                    </button>
                </div>
                <div class="flex align-items-center justify-content-between mt-3 mb-2">
                    <span class="text-900 font-medium text-xl">Product Name</span>
                    <span class="text-900 text-xl ml-3">$120</span>
                </div>
                <span class="text-600">Black</span>
            </div>
        </div>
    </div>
</div>

<div class="grid grid-nogutter surface-section px-4 py-4 md:px-6 lg:px-8 border-top-1 surface-border">
    <div class="col-12 lg:col-6 lg:border-right-1 surface-border">
        <img src="assets/images/blocks/logos/peak-700.svg" class="w-9rem mx-auto lg:mx-0" alt="Peak logo">
        <span class="text-900 block mt-4 mr-3">Aliquam id diam maecenas ultricies. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.</span>
        <span class="text-500 block mt-4">© 2022, Peak. Powered by PrimeBlocks.</span>
    </div>
    <div class="col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column">
        <span class="text-900 text-xl font-medium block">Company</span>
        <ul class="list-none p-0">
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
        </ul>
    </div>
    <div class="col-12 lg:col-3 md:col-6 flex mt-4 lg:mt-0 lg:pl-4 flex-column">
        <span class="text-900 text-xl font-medium block">Account</span>
        <ul class="list-none p-0">
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
            <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
        </ul>
    </div>
</div>

<div class="surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
    <ul class="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
        <li class="mr-4 mt-3 lg:mt-0">
            <a tabindex="0" class="cursor-pointer text-0">Investor Relations</a>
        </li>
        <li class="mr-4 mt-3 lg:mt-0">
            <a tabindex="0" class="cursor-pointer text-0">Data Privacy</a>
        </li>
        <li class="mr-4 mt-3 lg:mt-0">
            <a tabindex="0" class="cursor-pointer text-0">Terms of Service</a>
        </li>
        <li class="mr-4 mt-3 lg:mt-0">
            <a tabindex="0" class="cursor-pointer text-0">Legal Information</a>
        </li>
    </ul>

    <div class="flex align-items-center flex-order-0 lg:flex-order-1">
        <a tabindex="0" class="cursor-pointer mr-3 lg:mt-0 block">
            <i class="pi pi-facebook surface-section p-1 text-sm border-circle text-900"></i>
        </a>
        <a tabindex="0" class="cursor-pointer mr-3 lg:mt-0 block">
            <i class="pi pi-twitter surface-section p-1 text-sm border-circle text-900"></i>
        </a>
        <a tabindex="0" class="cursor-pointer mr-3 lg:mt-0 block">
            <i class="pi pi-youtube surface-section p-1 text-sm border-circle text-900"></i>
        </a>
        <a tabindex="0" class="cursor-pointer lg:mt-0 block">
            <i class="pi pi-google surface-section p-1 text-sm border-circle text-900"></i>
        </a>
    </div>
</div>`;
}