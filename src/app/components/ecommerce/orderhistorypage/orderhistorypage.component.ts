import { Component } from '@angular/core';

@Component({
  selector: 'app-orderhistorypage',
  templateUrl: './orderhistorypage.component.html',
})
export class OrderHistoryPageComponent {

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

<div class="surface-0 px-4 py-8 md:px-6 lg:px-8">
  <div class="flex flex-column md:flex-row justify-content-between align-items-center mb-4">
      <div class="flex flex-column text-center md:text-left">
          <span class="text-900 text-3xl mb-2">My Orders</span>
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
              <span class="text-600 block">Order Number</span>
              <span class="text-900 font-medium block mt-2">45123</span>
          </div>
          <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
          <div class="p-2 flex-auto text-center md:text-left">
              <span class="text-600 block">Order Date</span>
              <span class="text-900 font-medium block mt-2">7 February 2023</span>
          </div>
          <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
          <div class="p-2 flex-auto text-center md:text-left">
              <span class="text-600 block">Total Amount</span>
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
                  <span class="text-green-500">Delivered on 7 February 2023</span>
              </div>
          </div>
          <p-divider class="w-full block lg:hidden border-gray-200"></p-divider>
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
                  <span class="text-green-500">Delivered on 7 February 2023</span>
              </div>
          </div>
          <p-divider class="w-full block lg:hidden border-gray-200"></p-divider>
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
                  <span class="text-green-500">Delivered on 7 February 2023</span>
              </div>
          </div>
      </div>
      <div class="col-12 p-0 flex border-top-1 border-gray-200">
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-left-radius: 6px;"><i class="pi pi-folder mr-2 mb-2 md:mb-0"></i>Archive Order</a>
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-refresh mr-2 mb-2 md:mb-0"></i>Return</a>
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-file mr-2 mb-2 md:mb-0"></i>View Invoice</a>
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-right-radius: 6px;"><i class="pi pi-comment mr-2 mb-2 md:mb-0"></i>Write a Review</a>
      </div>
  </div>
  <div class="surface-card grid grid-nogutter mt-5 border-round shadow-2">
      <div class="col-12 flex p-2 surface-100 border-round-top">
          <div class="p-2 flex-auto text-center md:text-left">
              <span class="text-600 block">Order Number</span>
              <span class="text-900 font-medium block mt-2">45123</span>
          </div>
          <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
          <div class="p-2 flex-auto text-center md:text-left">
              <span class="text-600 block">Order Date</span>
              <span class="text-900 font-medium block mt-2">7 February 2023</span>
          </div>
          <p-divider align="center" layout="vertical" styleClass="h-full  mx-0 lg:mx-3"></p-divider>
          <div class="p-2 flex-auto text-center md:text-left">
              <span class="text-600 block">Total Amount</span>
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
                  <span class="text-green-500">Delivered on 7 February 2023</span>
              </div>
          </div>
          <p-divider class="w-full block lg:hidden border-gray-200"></p-divider>
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
                  <span class="text-green-500">Delivered on 7 February 2023</span>
              </div>
          </div>
          <p-divider class="w-full block lg:hidden border-gray-200"></p-divider>
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
                  <span class="text-green-500">Delivered on 7 February 2023</span>
              </div>
          </div>
      </div>
      <div class="col-12 p-0 flex border-top-1 border-gray-200">
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-left-radius: 6px;"><i class="pi pi-folder  mr-2 mb-2 md:mb-0"></i>Archive Order</a>
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-refresh  mr-2 mb-2 md:mb-0"></i>Return</a>
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i class="pi pi-file  mr-2 mb-2 md:mb-0"></i>View Invoice</a>
          <a tabindex="0" class="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style="border-bottom-right-radius: 6px;"><i class="pi pi-comment  mr-2 mb-2 md:mb-0"></i>Write a Review</a>
      </div>
  </div>
</div>

<div class="surface-100 px-4 md:px-6 lg:px-8 border-1 border-200 border-x-none">
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
      <p-divider layout="vertical"></p-divider>
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
      <p-divider layout="vertical"></p-divider>
      <div class="col flex flex-column mt-4">
          <span class="text-900 text-xl block">Legal</span>
          <ul class="list-none p-0">
              <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
              <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
              <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
              <li><a tabindex="0" pRipple class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
          </ul>
      </div>
      <p-divider layout="vertical"></p-divider>
      <div class="col flex flex-column mt-4 mb-4 lg:mb-0">
          <span class="text-900 text-xl block">Subscribe</span>
          <span class="text-500 block mt-3">Join our community to receieve the latest updates and special promotions.</span>
          <div class="p-inputgroup mt-3 mx-auto lg:mx-0" style="max-width:30rem;">
              <button type="button" pButton pRipple icon="pi pi-envelope" class="text-500 surface-50 border-200"></button>    
              <input type="text" pInputText placeholder="Email" class="border-y-1 px-2 text-500 border-x-none border-200">   
              <button type="button" pButton pRipple icon="pi pi-arrow-right" class="text-500 surface-50 border-200"></button>      
          </div>
      </div>
  </div>
</div>

<div class="surface-50 px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
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
</div>`;

}