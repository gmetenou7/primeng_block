import { Component } from '@angular/core';

@Component({
    selector: 'app-categorypage',
    templateUrl: './categorypage.component.html',
})
export class CategoryPageComponent {

    color: string = '';

    brands: any[] = [
      {name: 'Alfred'},
      {name: 'Hyper'},
      {name: 'Peak'},
      {name: 'Bastion'},
    ];

    colors: any[] = [
        {name: 'Black', class:'bg-gray-500'},
        {name: 'Orange', class:'bg-orange-500'},
        {name: 'Indigo', class:'bg-indigo-500'},
        {name: 'Pink', class:'bg-pink-500'},
    ];

    prices: any[] = [
        {range: '$10 - $100'},
        {range: '$101 - $200'},
        {range: '$201 - $300'},
        {range: '$301 - $400'},
    ];

    selectedBrands: any[] = [
      {name: 'Alfred'},
      {name: 'Hyper'}
    ];

    selectedPrice: any;

    selectedColors: any[] = [
        {name: 'Black', class:'bg-gray-500'}
    ];

    block1: string = `
<div class="bg-cyan-900 px-4 lg:px-8 lg:py-3 text-center">
    <span class="text-white">Free shipping on orders over $100</span>
</div>
<div class="surface-900 px-4 lg:px-8 lg:py-3 flex w-full justify-content-between align-items-center">
    <span class="text-0">Sign Up for 15% off your first order</span>
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
    <div class="flex justify-content-between">
        <div class="flex align-items-center">
            <div class="text-900 font-bold text-3xl">Category Title </div>
            <p-badge [value]="76" styleClass="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
        </div>
        <a pRipple tabindex="0" class="text-gray-400 cursor-pointer p-2 w-6rem flex align-items-center justify-content-between border-round border-1">Sort <i class="pi pi-sort-alt text-gray-400"></i></a>
    </div>
    <p class="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <p-divider styleClass="w-full border-gray-200"></p-divider>
    <div class="grid grid-nogutter align-items-center">
        <p-multiSelect [options]="brands" [(ngModel)]="selectedBrands" defaultLabel="Brand" optionLabel="name" styleClass="w-full" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4"></p-multiSelect>
        <p-multiSelect [options]="colors" [(ngModel)]="selectedColors" defaultLabel="Color" optionLabel="name" styleClass="w-full" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4">
            <ng-template let-value pTemplate="selectedColors">
                <div *ngFor="let color of selectedColors">
                    <div class="w-3rem h-3rem border-circle cursor-pointer border-none"></div>
                    <div>{{color.name}}</div>
                </div>
                <div *ngIf="!selectedColors || selectedColors.length === 0">Color</div>
            </ng-template>
            <ng-template let-color pTemplate="item">
                <div class="flex align-items-center">
                    <div class="w-2rem h-2rem border-circle {{color.class}} cursor-pointer border-none"></div>
                    <div class="text-900 ml-2">{{color.name}}</div>
                </div>
            </ng-template>
        </p-multiSelect>         
        <p-multiSelect [options]="prices" [(ngModel)]="selectedPrice" defaultLabel="Price" optionLabel="range" styleClass="w-full" class="flex-auto lg:flex-1 mb-3 lg:mt-0 lg:col w-full mr-0 lg:mr-4"></p-multiSelect>
        <button pButton pRipple label="Sustainable" icon="pi pi-check" iconPos="left" class="p-button-success mb-3 lg:mt-0 mr-4 flex-shrink-0"></button>
        <button pButton pRipple label="Sale" icon="pi pi-times" iconPos="left" class="p-button-outlined mb-3 lg:mt-0 mr-4 flex-shrink-0"></button>
        <a pRipple tabindex="0" class="cursor-pointer flex align-items-center mb-3 lg:mt-0">Clear All</a>
        
        <div class="col-12">
            <div class="grid mt-4">
                <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-1.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Black</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-2.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Indigo</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-3.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Purple</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-4.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Cyan</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-1.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Black</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-2.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Indigo</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-3.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Purple</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5">
                    <div class="mb-3 relative">
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-2-4.png" class="w-full" />
                        <button type="button" pRipple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null" (click)="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null" (click)="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null" (click)="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                [style.box-shadow]="color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null" (click)="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Cyan</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<p-divider styleClass="w-full border-gray-200 m-0"></p-divider>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid grid-nogutter p-2 lg:p-4 bg-cyan-50 border-round mb-4 text-center lg:text-left">
        <div class="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
            <span class="text-3xl block text-cyan-900 font-bold">Get Deals and Updates from Peak</span>
            <span class="block text-cyan-600 mt-3">We promise for not sending spam emails. It’ll only good emails.</span>
            <div class="p-inputgroup relative mt-4" style="border-radius:30px; max-width: 90%;">
                <input type="text" pInputText placeholder="Email" style="border-radius:30px; height:3.5rem;" class="bg-white-alpha-90 text-black-alpha-90 px-4 border-cyan-100">         
                <button type="button" pButton pRipple label="Subscribe" class="bg-cyan-500 border-none absolute text-white" style="border-radius: 30px; right: 8px; top: 8px; height: 2.5rem; z-index: 9999;"></button>
            </div>
        </div>
        <div class="col-12 lg:col-6 p-4">
            <div class="w-full h-full bg-no-repeat bg-center bg-cover p-5" style="background: url(assets/images/blocks/ecommerce/categorypage/categorypage-1-1.png); border-radius:30px;">
                <span class="text-cyan-500 font-bold block">Exclusive Peak Club</span>
                <span class="text-white text-xl font-bold block mt-3 line-height-3">Join Exlusive Peak Club for free shipping, premium service and deals.</span>
                <button type="button" pButton pRipple label="Get Your Card Today" class="bg-cyan-500 border-none w-full mt-3 text-white" style="border-radius: 30px;"></button>
            </div>
        </div>
    </div>
    <div class="grid grid-nogutter flex-column lg:flex-row text-center lg:text-left mt-8">
        <div class="col flex flex-column mt-4">
            <span class="text-900 text-xl block">Company</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>
       
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
       
        <div class="col flex flex-column mt-4">
            <span class="text-900 text-xl block">Legal</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>
       
        <div class="col flex flex-column mt-4">
            <span class="text-900 text-xl block">Legal</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
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
