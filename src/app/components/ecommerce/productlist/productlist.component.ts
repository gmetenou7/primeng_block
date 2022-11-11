import { Component } from '@angular/core';

@Component({
    templateUrl: './productlist.component.html'
})
export class ProductListComponent {

    hoveredItem: number;

    color1: string = 'Bluegray';
    
    color2: string = 'Indigo';
    
    color3: string = 'Purple';
    
    color4: string = 'Cyan';

    block1: string = `
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
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div class="mb-3 relative">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-2-1.png" class="w-full" />
                <button type="button" pRipple class="border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold" 
                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem); backdrop-filter: blur(4px);">
                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                    <span class="text-base">Add to Cart</span>
                </button>
            </div>
            <div class="flex flex-column align-items-center">
                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                <span class="text-xl text-900 mb-3">$150.00</span>
                <div class="flex align-items-center mb-3">
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" [ngStyle]="{'box-shadow': color1 === 'Bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" (click)="color1 = 'Bluegray'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 hover:border-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color1 === 'Indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null}" (click)="color1 = 'Indigo'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 hover:border-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color1 === 'Purple' ? '0 0 0 0.2rem var(--purple-500)' : null}" (click)="color1 = 'Purple'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 hover:border-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color1 === 'Cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null}" (click)="color1 = 'Cyan'"></div>
                </div>
                <span class="text-500">{{color1}}</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div class="mb-3 relative">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-2-2.png" class="w-full" />
                <button type="button" pRipple class="border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold" 
                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem); backdrop-filter: blur(4px);">
                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                    <span class="text-base">Add to Cart</span>
                </button>
            </div>
            <div class="flex flex-column align-items-center">
                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                <span class="text-xl text-900 mb-3">$150.00</span>
                <div class="flex align-items-center mb-3">
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" [ngStyle]="{'box-shadow': color2 === 'Bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" (click)="color2 = 'Bluegray'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 hover:border-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color2 === 'Indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null}" (click)="color2 = 'Indigo'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 hover:border-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color2 === 'Purple' ? '0 0 0 0.2rem var(--purple-500)' : null}" (click)="color2 = 'Purple'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 hover:border-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color2 === 'Cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null}" (click)="color2 = 'Cyan'"></div>
                </div>
                <span class="text-500">{{color2}}</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div class="mb-3 relative">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-2-3.png" class="w-full" />
                <button type="button" pRipple class="border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold" 
                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem); backdrop-filter: blur(4px);">
                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                    <span class="text-base">Add to Cart</span>
                </button>
            </div>
            <div class="flex flex-column align-items-center">
                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                <span class="text-xl text-900 mb-3">$150.00</span>
                <div class="flex align-items-center mb-3">
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" [ngStyle]="{'box-shadow': color3 === 'Bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" (click)="color3 = 'Bluegray'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 hover:border-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color3 === 'Indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null}" (click)="color3 = 'Indigo'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 hover:border-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color3 === 'Purple' ? '0 0 0 0.2rem var(--purple-500)' : null}" (click)="color3 = 'Purple'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 hover:border-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color3 === 'Cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null}" (click)="color3 = 'Cyan'"></div>
                </div>
                <span class="text-500">{{color3}}</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="mb-3 relative">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-2-4.png" class="w-full" />
                <button type="button" pRipple class="border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold" 
                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem); backdrop-filter: blur(4px);">
                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                    <span class="text-base">Add to Cart</span>
                </button>
            </div>
            <div class="flex flex-column align-items-center">
                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                <span class="text-xl text-900 mb-3">$150.00</span>
                <div class="flex align-items-center mb-3">
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300" [ngStyle]="{'box-shadow': color4 === 'Bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" (click)="color4 = 'Bluegray'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 hover:border-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color4 === 'Indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null}" (click)="color4 = 'Indigo'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 hover:border-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color4 === 'Purple' ? '0 0 0 0.2rem var(--purple-500)' : null}" (click)="color4 = 'Purple'"></div>
                    <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 hover:border-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"  [ngStyle]="{'box-shadow': color4 === 'Cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null}" (click)="color4 = 'Cyan'"></div>
                </div>
                <span class="text-500">{{color4}}</span>
            </div>
        </div>
    </div>
</div>
`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div class="p-2">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-3-1.png" class="w-full mb-3" />
                <div class="text-900 text-xl font-medium mb-2">$140.00</div>
                <div class="mb-2">
                    <span class="text-600 line-through">$175.00</span>
                    <span class="ml-2 text-pink-500 font-medium">%25</span>
                </div>
                <span class="text-900">Product Name</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div class="p-2">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-3-2.png" class="w-full mb-3" />
                <div class="text-900 text-xl font-medium mb-2">$100.00</div>
                <div class="mb-2">
                    <span class="text-600 line-through">$150.00</span>
                    <span class="ml-2 text-pink-500 font-medium">%50</span>
                </div>
                <span class="text-900">Product Name</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div class="p-2">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-3-3.png" class="w-full mb-3" />
                <div class="text-900 text-xl font-medium mb-2">$90.00</div>
                <div class="mb-2">
                    <span class="text-600 line-through">$103.00</span>
                    <span class="ml-2 text-pink-500 font-medium">%15</span>
                </div>
                <span class="text-900">Product Name</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div class="p-2">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-3-4.png" class="w-full mb-3" />
                <div class="text-900 text-xl font-medium mb-2">$50.00</div>
                <div class="mb-2">
                    <span class="text-600 line-through">$57.00</span>
                    <span class="ml-2 text-pink-500 font-medium">%15</span>
                </div>
                <span class="text-900">Product Name</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div class="p-2">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-3-5.png" class="w-full mb-3" />
                <div class="text-900 text-xl font-medium mb-2">$42.00</div>
                <div class="mb-2">
                    <span class="text-600 line-through">$54.00</span>
                    <span class="ml-2 text-pink-500 font-medium">%30</span>
                </div>
                <span class="text-900">Product Name</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4 xl:col-2">
            <div class="p-2">
                <img src="assets/images/blocks/ecommerce/productlist/product-list-3-6.png" class="w-full mb-3" />
                <div class="text-900 text-xl font-medium mb-2">$25.00</div>
                <div class="mb-2">
                    <span class="text-600 line-through">$50.00</span>
                    <span class="ml-2 text-pink-500 font-medium">%50</span>
                </div>
                <span class="text-900">Product Name</span>
            </div>
        </div>
    </div>
</div>
`;

    block4: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-4xl mb-4">Popular Products</div>
    <p class="mt-0 p-0 mb-5 text-600 text-2xl">Exclusive Selection</p>
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 md:col-6 lg:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card border-round">
                    <div class="relative mb-3">
                        <span class="surface-card text-900 shadow-2 px-3 py-2 absolute" style="border-radius: 1.5rem; left: 1rem; top: 1rem">Category</span>
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-4-1.png" class="w-full" />
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span class="font-medium">5.0</span>
                        </span>
                    </div>
                    <p class="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span class="text-primary text-xl font-medium">$140.00</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card border-round">
                    <div class="relative mb-3">
                        <span class="surface-card text-900 shadow-2 px-3 py-2 absolute" style="border-radius: 1.5rem; left: 1rem; top: 1rem">Category</span>
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-4-2.png" class="w-full" />
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span class="font-medium">5.0</span>
                        </span>
                    </div>
                    <p class="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span class="text-primary text-xl font-medium">$82.00</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card border-round">
                    <div class="relative mb-3">
                        <span class="surface-card text-900 shadow-2 px-3 py-2 absolute" style="border-radius: 1.5rem; left: 1rem; top: 1rem">Category</span>
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-4-3.png" class="w-full" />
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span class="font-medium">5.0</span>
                        </span>
                    </div>
                    <p class="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span class="text-primary text-xl font-medium">$54.00</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card border-round">
                    <div class="relative mb-3">
                        <span class="surface-card text-900 shadow-2 px-3 py-2 absolute" style="border-radius: 1.5rem; left: 1rem; top: 1rem">Category</span>
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-4-4.png" class="w-full" />
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span class="font-medium">5.0</span>
                        </span>
                    </div>
                    <p class="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span class="text-primary text-xl font-medium">$72.00</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card border-round">
                    <div class="relative mb-3">
                        <span class="surface-card text-900 shadow-2 px-3 py-2 absolute" style="border-radius: 1.5rem; left: 1rem; top: 1rem">Category</span>
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-4-5.png" class="w-full" />
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span class="font-medium">5.0</span>
                        </span>
                    </div>
                    <p class="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span class="text-primary text-xl font-medium">$99.00</span>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card border-round">
                    <div class="relative mb-3">
                        <span class="surface-card text-900 shadow-2 px-3 py-2 absolute" style="border-radius: 1.5rem; left: 1rem; top: 1rem">Category</span>
                        <img src="assets/images/blocks/ecommerce/productlist/product-list-4-6.png" class="w-full" />
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span class="font-medium">5.0</span>
                        </span>
                    </div>
                    <p class="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span class="text-primary text-xl font-medium">$89.00</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div class="p-2">
                <div class="relative mb-3">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-5-1.png" class="w-full" />
                    <span class="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style="border-radius: 1rem; right: 1rem; bottom: 1rem">-%25</span>
                </div>
                <span class="text-900 font-medium text-xl">Product Name</span>
                <div class="my-3">
                    <span class="mr-3">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <span class="text-500">12 reviews</span>
                </div>
                <div class="mb-4">
                    <span class="line-through text-600">$321.00</span>
                    <span class="font-bold text-900 ml-2">$150.00</span>
                </div>
                <button pButton pRipple label="Add to Cart" icon="pi pi-shopping-cart" class="w-full"></button>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div class="p-2">
                <div class="relative mb-3">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-5-2.png" class="w-full" />
                    <span class="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style="border-radius: 1rem; right: 1rem; bottom: 1rem">-%25</span>
                </div>
                <span class="text-900 font-medium text-xl">Product Name</span>
                <div class="my-3">
                    <span class="mr-3">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-500"></i>
                    </span>
                    <span class="text-500">15 reviews</span>
                </div>
                <div class="mb-4">
                    <span class="line-through text-600">$80.00</span>
                    <span class="font-bold text-900 ml-2">$49.00</span>
                </div>
                <button pButton pRipple label="Add to Cart" icon="pi pi-shopping-cart" class="w-full"></button>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div class="p-2">
                <div class="relative mb-3">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-5-3.png" class="w-full" />
                    <span class="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style="border-radius: 1rem; right: 1rem; bottom: 1rem">-%25</span>
                </div>
                <span class="text-900 font-medium text-xl">Product Name</span>
                <div class="my-3">
                    <span class="mr-3">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-500 mr-1"></i>
                        <i class="pi pi-star-fill text-500"></i>
                    </span>
                    <span class="text-500">21 reviews</span>
                </div>
                <div class="mb-4">
                    <span class="line-through text-600">$124.00</span>
                    <span class="font-bold text-900 ml-2">$82.00</span>
                </div>
                <button pButton pRipple label="Add to Cart" icon="pi pi-shopping-cart" class="w-full"></button>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
                <div class="relative mb-3">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-5-4.png" class="w-full" />
                    <span class="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style="border-radius: 1rem; right: 1rem; bottom: 1rem">-%25</span>
                </div>
                <span class="text-900 font-medium text-xl">Product Name</span>
                <div class="my-3">
                    <span class="mr-3">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <span class="text-500">22 reviews</span>
                </div>
                <div class="mb-4">
                    <span class="line-through text-600">$250.00</span>
                    <span class="font-bold text-900 ml-2">$120.00</span>
                </div>
                <button pButton pRipple label="Add to Cart" icon="pi pi-shopping-cart" class="w-full"></button>
            </div>
        </div>
    </div>
</div>`;

    block6: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
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
</div>`;

    block7: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-5xl font-medium text-900 text-center mb-6">Featured for Summer</div>
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div class="p-2">
                <div class="relative mb-2">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-7-1.png" class="w-full" />
                    <div class="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style="bottom: 1.25rem; right: 1rem">$42</div>
                </div>
                <div class="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div class="flex align-items-center justify-content-center mb-3">
                    <i class="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div class="text-900 font-medium text-xl line-height-1">4.8</div>
                </div>
                <p class="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" pRipple class="p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">Add to Cart</button>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div class="p-2">
                <div class="relative mb-2">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-7-2.png" class="w-full" />
                    <div class="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style="bottom: 1.25rem; right: 1rem">$42</div>
                </div>
                <div class="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div class="flex align-items-center justify-content-center mb-3">
                    <i class="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div class="text-900 font-medium text-xl line-height-1">3.9</div>
                </div>
                <p class="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" pRipple class="p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">Add to Cart</button>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div class="p-2">
                <div class="relative mb-2">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-7-3.png" class="w-full" />
                    <div class="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style="bottom: 1.25rem; right: 1rem">$42</div>
                </div>
                <div class="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div class="flex align-items-center justify-content-center mb-3">
                    <i class="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div class="text-900 font-medium text-xl line-height-1">4.5</div>
                </div>
                <p class="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" pRipple class="p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">Add to Cart</button>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
                <div class="relative mb-2">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-7-4.png" class="w-full" />
                    <div class="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style="bottom: 1.25rem; right: 1rem">$42</div>
                </div>
                <div class="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div class="flex align-items-center justify-content-center mb-3">
                    <i class="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div class="text-900 font-medium text-xl line-height-1">5.0</div>
                </div>
                <p class="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" pRipple class="p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">Add to Cart</button>
            </div>
        </div>
    </div>
</div>`;

    block8: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-5">
        <span class="text-900 text-3xl font-medium">CATEGORY TITLE</span>
        <ul class="list-none p-0 m-0 flex mt-3 md:mt-0">
            <li>
                <a tabindex="0" class="cursor-pointer text-900 font-bold text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2">NEW</a>
            </li>
            <li>
                <a tabindex="0" class="cursor-pointer text-600 font-medium text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2">SALE</a>
            </li>
            <li>
                <a tabindex="0" class="cursor-pointer text-600 font-medium text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2">POPULAR</a>
            </li>
        </ul>
    </div>
    
    <div class="grid -mt-3 -ml-3 -mr-3">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2" (mouseenter)="hoveredItem = 0" (mouseleave)="hoveredItem = null">
                <div class="relative mb-3">
                    <div class="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full" *ngIf="hoveredItem === 0"></div>
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-8-1.png" class="w-full" />
                    <button *ngIf="hoveredItem == 0" type="text" pRipple class="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-shopping-cart text-2xl text-white"></i>
                    </button>
                </div>
                <div class="surface-section pt-3 z-1 relative transition-all transition-duration-300" [ngClass]="{'-mt-8 pb-8': hoveredItem === 0}">
                    <div class="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div class="mb-3 text-center">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-300"></i>
                    </div>
                    <div class="text-center text-900 text-xl mb-3">Product Name</div>
                    <div class="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2" (mouseenter)="hoveredItem = 1" (mouseleave)="hoveredItem = null">
                <div class="relative mb-3">
                    <div class="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full" *ngIf="hoveredItem === 1"></div>
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-8-2.png" class="w-full"/>
                    <button *ngIf="hoveredItem == 1" type="text" pRipple class="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-shopping-cart text-2xl text-white"></i>
                    </button>
                </div>
                <div class="surface-section pt-3 z-1 relative transition-all transition-duration-300" [ngClass]="{'-mt-8 pb-8': hoveredItem === 1}">
                    <div class="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div class="mb-3 text-center">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-300"></i>
                    </div>
                    <div class="text-center text-900 text-xl mb-3">Product Name</div>
                    <div class="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2" (mouseenter)="hoveredItem = 2" (mouseleave)="hoveredItem = null">
                <div class="relative mb-3">
                    <div class="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full" *ngIf="hoveredItem === 2"></div>
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-8-3.png" class="w-full" />
                    <button *ngIf="hoveredItem == 2" type="text" pRipple class="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-shopping-cart text-2xl text-white"></i>
                    </button>
                </div>
                <div class="surface-section pt-3 z-1 relative transition-all transition-duration-300" [ngClass]="{'-mt-8 pb-8': hoveredItem === 2}">
                    <div class="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div class="mb-3 text-center">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-300"></i>
                    </div>
                    <div class="text-center text-900 text-xl mb-3">Product Name</div>
                    <div class="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2" (mouseenter)="hoveredItem = 3" (mouseleave)="hoveredItem = null">
                <div class="relative mb-3">
                    <div class="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full" *ngIf="hoveredItem === 3"></div>
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-8-4.png" class="w-full" />
                    <button *ngIf="hoveredItem == 3" type="text" pRipple class="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style="top: 1rem; right: 1rem">
                        <i class="pi pi-shopping-cart text-2xl text-white"></i>
                    </button>
                </div>
                <div class="surface-section pt-3 z-1 relative transition-all transition-duration-300" [ngClass]="{'-mt-8 pb-8': hoveredItem === 3}">
                    <div class="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div class="mb-3 text-center">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-300"></i>
                    </div>
                    <div class="text-center text-900 text-xl mb-3">Product Name</div>
                    <div class="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block9: string = `
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="grid -mt-3 -ml-3 -mr-3">
            <div class="col-12 md:col-6 xl:col-3">
                <div class="p-2 h-full mt-2" style="background: url('assets/images/blocks/ecommerce/productlist/product-list-9-1.png') no-repeat; background-size: cover">
                    <div class="py-5 px-4">
                        <span class="text-2xl font-bold text-gray-900 mb-3 ml-3">SKI COLLECTION</span>
                        <ul class="list-none p-0 mt-3 mb-0 mx-0">
                            <li class="mb-2">
                                <a tabindex="0" class="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Jackets</a>
                            </li>
                            <li class="mb-2">
                                <a tabindex="0" class="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Pants</a>
                            </li>
                            <li class="mb-2">
                                <a tabindex="0" class="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round text-blue-500">Equipment</a>
                            </li>
                            <li class="mb-2">
                                <a tabindex="0" class="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Gloves</a>
                            </li>
                            <li class="mb-2">
                                <a tabindex="0" class="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Helmets</a>
                            </li>
                            <li class="mb-2">
                                <a tabindex="0" class="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Shoes</a>
                            </li>
                            <li class="mb-2">
                                <a tabindex="0" class="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Glasses</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
                <div class="p-2">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-9-2.png" class="w-full mb-3" />
                    <div class="flex justify-content-between mb-3">
                        <span class="font-bold text-500">BRAND</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-300"></i>
                        </span>
                    </div>
                    <div class="text-900 text-xl mb-3">Product Name</div>
                    <div>
                        <span class="text-xl font-medium text-pink-500">$100.00</span>
                        <span class="text-xl font-medium text-700 line-through ml-3">$150.00</span>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
                <div class="p-2">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-9-3.png" class="w-full mb-3" />
                    <div class="flex justify-content-between mb-3">
                        <span class="font-bold text-500">BRAND</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-300"></i>
                        </span>
                    </div>
                    <div class="text-900 text-xl mb-3">Product Name</div>
                    <div>
                        <span class="text-xl font-medium text-pink-500">$79.00</span>
                        <span class="text-xl font-medium text-700 line-through ml-3">$99.00</span>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
                <div class="p-2">
                    <img src="assets/images/blocks/ecommerce/productlist/product-list-9-4.png" class="w-full mb-3" />
                    <div class="flex justify-content-between mb-3">
                        <span class="font-bold text-500">BRAND</span>
                        <span>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i class="pi pi-star-fill text-300"></i>
                        </span>
                    </div>
                    <div class="text-900 text-xl mb-3">Product Name</div>
                    <div>
                        <span class="text-xl font-medium text-pink-500">$56.00</span>
                        <span class="text-xl font-medium text-700 line-through ml-3">$65.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}
