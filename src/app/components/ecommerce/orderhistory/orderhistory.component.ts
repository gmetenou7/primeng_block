import { Component } from '@angular/core';

@Component({
    selector: 'app-orderhistory',
    templateUrl: './orderhistory.component.html',
})
export class OrderHistoryComponent {

    block1 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column md:flex-row justify-content-between align-items-center mb-4">
        <div class="flex flex-column text-center md:text-left">
            <span class="text-900 text-3xl font-medium mb-2">My Orders</span>
            <span class="text-600 text-xl">Dignissim diam quis enim lobortis.</span>
        </div>
        <span class="p-input-icon-right mt-5 mb-2 md:mt-0 md:mb-0 w-full lg:w-25rem">
            <i class="pi pi-search text-gray-400"></i>
            <input type="text" class="p-inputtext w-full lg:w-25rem surface-50" placeholder="Search"/>
        </span>
    </div>
    <div class="surface-card grid grid-nogutter border-round shadow-2">
        <div class="col-12 flex p-2 surface-100 border-round-top">
            <div class="p-2 flex-auto text-center md:text-left">
                <span class="text-700 block">Order Number</span>
                <span class="text-900 font-medium block mt-2">45123</span>
            </div>
            <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3 surface-border"></p-divider>
            <div class="p-2 flex-auto text-center md:text-left">
                <span class="text-700 block">Order Date</span>
                <span class="text-900 font-medium block mt-2">7 February 2023</span>
            </div>
            <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3 surface-border"></p-divider>
            <div class="p-2 flex-auto text-center md:text-left">
                <span class="text-700 block">Total Amount</span>
                <span class="text-900 font-medium block mt-2">$123.00</span>
            </div>
        </div>
        <div class="col-12">
            <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-1.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div class="flex flex-column my-auto text-center md:text-left">
                        <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span class="text-600 text-sm mb-3">White | Small</span>
                        <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                    </div>
                </div>
                <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                    <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider class="w-full block lg:hidden surface-border"></p-divider>
            <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-2.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div class="flex flex-column my-auto text-center md:text-left">
                        <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span class="text-600 text-sm mb-3">White | Small</span>
                        <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                    </div>
                </div>
                <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                    <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider class="w-full block lg:hidden surface-border"></p-divider>
            <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-3.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div class="flex flex-column my-auto text-center md:text-left">
                        <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span class="text-600 text-sm mb-3">White | Small</span>
                        <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                    </div>
                </div>
                <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                    <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 flex border-top-1 surface-border">
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-left-radius: 6px;"><i class="pi pi-folder mr-2 mb-2 md:mb-0"></i>Archive Order</a>
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-refresh mr-2 mb-2 md:mb-0"></i>Return</a>
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-file mr-2 mb-2 md:mb-0"></i>View Invoice</a>
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-right-radius: 6px;"><i class="pi pi-comment mr-2 mb-2 md:mb-0"></i>Write a Review</a>
        </div>
    </div>
    <div class="surface-card grid grid-nogutter mt-5 border-round shadow-2">
        <div class="col-12 flex p-2 surface-100 border-round-top">
            <div class="p-2 flex-auto text-center md:text-left">
                <span class="text-700 block">Order Number</span>
                <span class="text-900 font-medium block mt-2">45123</span>
            </div>
            <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3 surface-border"></p-divider>
            <div class="p-2 flex-auto text-center md:text-left">
                <span class="text-700 block">Order Date</span>
                <span class="text-900 font-medium block mt-2">7 February 2023</span>
            </div>
            <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3 surface-border"></p-divider>
            <div class="p-2 flex-auto text-center md:text-left">
                <span class="text-700 block">Total Amount</span>
                <span class="text-900 font-medium block mt-2">$123.00</span>
            </div>
        </div>
        <div class="col-12">
            <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-4.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div class="flex flex-column my-auto text-center md:text-left">
                        <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span class="text-600 text-sm mb-3">White | Small</span>
                        <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                    </div>
                </div>
                <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                    <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider class="w-full block lg:hidden surface-border"></p-divider>
            <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-5.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div class="flex flex-column my-auto text-center md:text-left">
                        <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span class="text-600 text-sm mb-3">White | Small</span>
                        <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                    </div>
                </div>
                <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                    <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider class="w-full block lg:hidden surface-border"></p-divider>
            <div class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div class="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="assets/images/blocks/ecommerce/orderhistory/orderhistory-1-6.png" alt="product" class="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div class="flex flex-column my-auto text-center md:text-left">
                        <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span class="text-600 text-sm mb-3">White | Small</span>
                        <a pRipple tabindex="0" class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span class="font-light">| $12</span></a>
                    </div>
                </div>
                <div class="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" [style.border-radius]="'2.5rem'">
                    <span class="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style="min-width:2rem; min-height: 2rem">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 flex border-top-1 surface-border">
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-left-radius: 6px;"><i class="pi pi-folder  mr-2 mb-2 md:mb-0"></i>Archive Order</a>
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-refresh  mr-2 mb-2 md:mb-0"></i>Return</a>
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-file  mr-2 mb-2 md:mb-0"></i>View Invoice</a>
            <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-right-radius: 6px;"><i class="pi pi-comment  mr-2 mb-2 md:mb-0"></i>Write a Review</a>
        </div>
    </div>
</div>`;
}
