import { Component } from '@angular/core';
@Component({
    templateUrl: './cta.component.html'
})
export class CtaComponent {

    block1: string = `
<div class="surface-section flex flex-column lg:flex-row align-items-center justify-content-between">
    <div class="pr-8">
        <div class="text-blue-600 font-medium mb-1 text-xl">TAKE THE NEXT STEP</div>
        <div class="text-900 font-bold text-6xl mb-5">Get Started with PrimeBlocks</div>

        <span class="inline-flex align-items-center bg-blue-50 px-3 py-2 mr-2 mb-2 lg:mb-0 border-1 border-blue-200" style="border-radius: 50px">
            <i class="pi pi-check text-blue-500 mr-2"></i>
            <span class="text-gray-700 font-medium">1 Month Free Trial</span>
        </span>
        <span class="inline-flex align-items-center bg-blue-50 px-3 py-2 border-1 border-blue-200" style="border-radius: 50px">
            <i class="pi pi-check text-blue-500 mr-2"></i>
            <span class="text-gray-700 font-medium">No Credit Card Required</span>
        </span>
    </div>
    <div class="mt-5 lg:mt-0 flex flex-wrap lg:flex-nowrap">
        <button pButton pRipple label="Get Started" class="px-5 py-3 mr-0 lg:mr-3 p-button-rounded font-bold mb-3 lg:mb-0 w-full lg:w-auto white-space-nowrap"></button>
        <button pButton pRipple label="Request a Demo" icon="pi pi-arrow-right" iconPos="right" class="px-5 py-3 p-button-outlined p-button-rounded font-bold w-full lg:w-auto white-space-nowrap" style="white-space: nowrap"></button>
    </div>
</div>`;

    block2: string = `
<div class="flex justify-content-between align-items-start flex-wrap lg:flex-nowrap bg-gray-900">
    <div class="pr-0 lg:pr-6 mb-5 lg:mb-0">
        <div class="font-bold text-white text-6xl font-bold mb-3">Enhanced User Experience</div>
        <div class="text-gray-300 line-height-3 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
        <div class="flex flex-wrap lg:flex-nowrap">
            <button pButton pRipple class="px-5 py-3 font-bold mr-3 white-space-nowrap mb-3 lg:mb-0 w-full lg:w-auto" label="Learn More"></button>
            <button pButton pRipple class="px-5 py-3 font-bold mr-3 p-button-text white-space-nowrap w-full lg:w-auto" label="Contact Sales"></button>
        </div>
    </div>
    <img src="assets/images/blocks/cta/cta-1.png" alt="Image" class="block mx-auto lg:mx-0">
</div>`;

    block3: string = `
<div class="bg-gray-900 p-8 flex justify-content-center md:justify-content-end bg-no-repeat bg-cover md:bg-contain" style="background-image: url('assets/images/blocks/cta/cta-2.png')">
    <div class="px-5">
        <div class="text-white font-bold text-6xl">Ready to build beyond</div>
        <div class="text-blue-200 font-bold text-6xl">your expectations?</div>
        <div class="mt-3 mb-5 text-gray-200 font-medium line-height-3">Vestibulum sed arcu non odio euismod lacinia at quis risus. Massa massa ultricies mi quis. </div>
        <button pButton pRipple label="Get Started" class="font-bold px-5 py-3"></button>
    </div>
</div>`;

    block4: string = `
<div class="p-6 shadow-2 flex flex-column md:flex-row align-items-center justify-content-between" style="border-radius: 1rem; background: linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)">
    <div class="pr-6">
        <div class="text-blue-100 font-medium text-xl mb-3">TAKE THE NEXT STEP</div>
        <div class="text-white font-medium text-5xl">Enpower your customer experience</div>
    </div>
    <div class="mt-4 mr-auto md:mt-0 md:mr-0">
        <button pButton pRipple label="Get Started" class="font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised white-space-nowrap"></button>
    </div>
</div>`;
    
    block5: string = `
<div class="surface-section text-700 text-center">
    <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
    <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
    <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
    <button pButton pRipple label="Join Now" icon="pi pi-discord" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></button>
</div>`;

    block6: string = `
<div class="grid surface-section">
    <div class="col-12 md:col-6">
        <button pButton pRipple label="Travel Update" icon="pi pi-chevron-right" iconPos="right" class="p-button-success p-button-rounded mb-3 font-bold"></button>
        <div class="text-900 font-bold text-5xl mb-3">Book Flights</div>
        <div class="text-600 text-2xl line-height-3">Find cheap flights and airline tickets.</div>
        <div class="text-600 text-2xl line-height-3">Prime Flights helps you compare and track airfares.</div>
    </div>
    <div class="col-12 md:col-6 flex align-items-center md:justify-content-end">
        <div>
            <div class="text-900 font-medium justify-content-start mb-3">Round Trip Dates</div>
            <p-calendar [(ngModel)]="date1" dateFormat="dd/mm/yy" [showIcon]="true" selectionMode="range" [style]="{'min-width': '240px'}" [inputStyleClass]="'bg-transparent text-900 border-400'"></p-calendar>
            <button pButton pRipple label="Book Now" icon="pi pi-check" class="block mt-3 font-bold white-space-nowrap p-button-outlined w-full"></button>
        </div>
    </div>
</div>`;

    block7: string = `
<div class="grid bg-gray-900">
    <div class="col-12 md:col-6">
        <button pButton pRipple label="Travel Resticted" icon="pi pi-chevron-right" iconPos="right" class="p-button-help p-button-rounded mb-3 font-bold"></button>
        <div class="text-white font-bold text-5xl mb-3">Book Flights</div>
        <div class="text-gray-400 text-2xl line-height-3">Find cheap flights and airline tickets.</div>
        <div class="text-gray-400 text-2xl line-height-3">Prime Flights helps you compare and track airfares.</div>
    </div>
    <div class="col-12 md:col-6 flex align-items-center md:justify-content-end">
        <div>
            <div class="text-gray-400 font-medium justify-content-start mb-3">Round Trip Dates</div>
            <p-calendar [(ngModel)]="date2" dateFormat="dd/mm/yy" [showIcon]="true" selectionMode="range" [style]="{'min-width': '240px'}" [inputStyleClass]="'bg-transparent text-gray-400 border-gray-400'"></p-calendar>
            <button pButton pRipple label="Book Now" icon="pi pi-check" class="block mt-3 font-bold white-space-nowrap w-full"></button>
        </div>
    </div>
</div>`;

    block8: string = `
<div class="relative lg:p-8 p-6 text-0 overflow-hidden">
    <img src="assets/images/blocks/cta/cta-3.jpg" alt="header" class="absolute top-0 left-0 w-auto h-full block md:w-full">
    <div class="text-center my-6 relative">
        <div class="text-6xl mb-3 text-white flex justify-content-center flex-wrap">
            <div class="font-bold">Discover&nbsp;</div>
            True Power
        </div>
        <div class="text-2xl text-gray-400 line-height-3 text-center mx-auto mb-5" style="max-width: 500px">Your perfect companion for Angular featuring elegant, high-performance, accessible and fully customizable UI Components.</div>
        <button pButton pRipple label="Learn More" class="font-bold px-5 py-3 mr-4 p-button-warning p-button-rounded p-button-raised white-space-nowrap"></button>
        <button pButton pRipple label="Live Demo" class="font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised p-button-outlined white-space-nowrap"></button>
    </div>
</div>`;

    date1 = '31/03/2021 - 01/04/2021';

    date2 = '31/03/2021 - 01/04/2021';
}