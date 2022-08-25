import { Component } from '@angular/core';

@Component({
    templateUrl: './incentive.component.html'
})
export class IncentiveComponent {

    block1: string = `
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
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-500">
            <i class="pi pi-arrow-right text-pink-500 text-4xl mr-5"></i>
            <div>
                <span class="text-900 font-medium text-xl">Pay Later in 30 Days</span>
                <p class="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
        <div class="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-500">
            <i class="pi pi-shopping-cart text-blue-500 text-4xl mr-5"></i>
            <div>
                <span class="text-900 font-medium text-xl">Free Shipping</span>
                <p class="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
        <div class="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-orange-500">
            <i class="pi pi-shield text-orange-500 text-4xl mr-5"></i>
            <div>
                <span class="text-900 font-medium text-xl">Secure Payment</span>
                <p class="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
        <div class="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-cyan-500">
            <i class="pi pi-refresh text-cyan-500 text-4xl mr-5"></i>
            <div>
                <span class="text-900 font-medium text-xl">Money Back Guarantee</span>
                <p class="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
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
</div>`;

   block4: string = `  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
   <div class="flex flex-wrap align-items-center justify-content-center gap-5">
       <div class="p-3 flex align-items-center bg-blue-100" style="border-radius:50px">
           <div class="bg-blue-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
               <i class="pi pi-shopping-bag text-white text-2xl"></i>
           </div>
           <span class="text-blue-900 text-lg font-medium">Free Shipping</span>
       </div>
       <div class="p-3 flex align-items-center bg-cyan-100" style="border-radius:50px">
           <div class="bg-cyan-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
               <i class="pi pi-arrow-right text-white text-2xl"></i>
           </div>
           <span class="text-cyan-900 text-lg font-medium">120 Days Return Policy</span>
       </div>
       <div class="p-3 flex align-items-center bg-orange-100" style="border-radius:50px">
           <div class="bg-orange-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
               <i class="pi pi-shield text-white text-2xl"></i>
           </div>
           <span class="text-orange-900 text-lg font-medium">10 Year Warranty</span>
       </div>
       <div class="p-3 flex align-items-center bg-green-100" style="border-radius:50px">
           <div class="bg-green-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
               <i class="pi pi-refresh text-white text-2xl"></i>
           </div>
           <span class="text-green-900 text-lg font-medium">Environment Friendly</span>
       </div>
   </div>
</div>`;

}
