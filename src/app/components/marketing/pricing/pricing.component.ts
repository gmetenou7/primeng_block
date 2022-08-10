import { Component } from '@angular/core';

interface Plan{
    name: string;
    price: number;
    icon: string;
    description: any[];
}

@Component({
    templateUrl: './pricing.component.html'
})
export class PricingComponent {

    plans: Plan[] = [
        {
            name: 'Sketchers',
            price: 10.99,
            icon:'pi pi-pencil',
            description: [
                {name: 'Arcu vitae elementum', icon:'pi pi-check-circle'},
                {name: 'Dui faucibus in ornare', icon:'pi pi-check-circle'},
                {name: 'Morbi tincidunt augue', icon:'pi pi-check-circle'},
                {name: 'Sed euismod nisi', icon:'pi pi-check-circle'}
            ]
        },
        {
            name: 'Painter',
            price: 15.99,
            icon:'pi pi-palette',
            description: [
                {name: 'includes all the features of sketchers', icon:'pi pi-reply'},
                {name: 'Dui faucibus in ornare', icon:'pi pi-check-circle'},
                {name: 'Morbi tincidunt augue', icon:'pi pi-check-circle'},
                {name: 'Sed euismod nisi', icon:'pi pi-check-circle'}
            ]
        },
        {
            name: 'Artist',
            price: 24.99,
            icon:'pi pi-image',
            description: [
                {name: 'includes all the features of painter', icon:'pi pi-reply'},
                {name: 'Dui faucibus in ornare', icon:'pi pi-check-circle'},
                {name: 'Morbi tincidunt augue', icon:'pi pi-check-circle'},
                {name: 'Sed euismod nisi', icon:'pi pi-check-circle'}
            ]
        }
    ];

    selectedPlan: Plan= this.plans[1];    
    selectedInterval: string ="month";

    setSelectedPlan(plan: string){
        this.selectedPlan = this.plans.find(p => p.name === plan);
    }

    block1: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div class="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Basic</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$9</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full mt-auto"></button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Premium</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$29</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full"></button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Enterprise</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$49</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Imperdiet proin</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Nisi scelerisque</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full p-button-outlined"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-blue-600 text-2xl mb-4 text-center">Save up to 25% today</div>
    <div class="text-900 font-bold text-6xl text-center mb-4">Pricing Plans</div>
    <div class="flex align-items-center justify-content-center text-900">
        <span class="font-semibold mr-3">Monthly</span>
        <p-inputSwitch></p-inputSwitch>
        <span class="ml-3">Yearly</span>
    </div>

    <div class="flex flex-column md:flex-row mt-6">
        <div class="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
            <div class="bg-bluegray-100 text-center p-3" style="border-radius: 6px 6px 0 0" >
                <div class="text-2xl font-bold text-bluegray-900 mb-3">Basic</div>
                <div class="flex align-items-center justify-content-center">
                    <span class="font-bold text-bluegray-900 text-5xl mr-2">10$</span>
                    <span class="text-2xl text-bluegray-400"> / month</span>
                </div>
            </div>
            <div class="bg-bluegray-50 p-4 flex flex-column flex-grow-1" style="box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.1); border-radius: 0 0 6px 6px">
                <div class="text-bluegray-500 font-bold line-height-3 mb-4">Ut enim ad minim veniam, quis nostrud exercitation.</div>
                <ul class="list-none p-0 m-0 mb-5 text-bluegray-600">
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Arcu vitae elementum</span>
                    </li>
                    <li class="flex align-items-center">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Dui faucibus in ornare</span>
                    </li>
                </ul>

                <button pButton pRipple class="p-button-secondary w-full mt-auto" label="Try Free"></button>
            </div>
        </div>

        <div class="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
            <div class="bg-bluegray-800 text-center p-3 border-3 border-green-500 border-bottom-none" style="border-radius: 6px 6px 0 0">
                <div class="bg-green-500 text-0 font-bold text-sm inline-block p-2 mb-3" style="border-radius: 20px">MOST POPULAR</div>
                <div class="text-2xl font-bold text-white mb-3">Premium</div>
                <div class="flex align-items-center justify-content-center">
                    <span class="font-bold text-white text-5xl mr-2">20$</span>
                    <span class="text-2xl text-bluegray-400"> / month</span>
                </div>
            </div>
            <div class="bg-bluegray-900 p-4 flex flex-column flex-grow-1 border-3 border-green-500 border-top-none" style="box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.1); border-radius: 0 0 6px 6px">
                <div class="text-bluegray-400 font-bold line-height-3 mb-4">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <ul class="list-none p-0 m-0 mb-5 text-bluegray-100">
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Arcu vitae elementum</span>
                    </li>
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Dui faucibus in ornare</span>
                    </li>
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Morbi tincidunt augue</span>
                    </li>
                    <li class="flex align-items-center">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Duis ultricies lacus sed</span>
                    </li>
                </ul>

                <button pButton pRipple class="p-button-success w-full mt-auto" label="Buy Now"></button>
            </div>
        </div>

        <div class="mb-6 md:mb-0 flex flex-column flex-grow-1">
            <div class="bg-blue-800 text-center p-3" style="border-radius: 6px 6px 0 0" >
                <div class="text-2xl font-bold text-white mb-3">Enterprise</div>
                <div class="flex align-items-center justify-content-center">
                    <span class="font-bold text-white text-5xl mr-2">30$</span>
                    <span class="text-2xl text-blue-400"> / month</span>
                </div>
            </div>
            <div class="bg-blue-900 p-4 flex flex-column flex-grow-1" style="box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.1); border-radius: 0 0 6px 6px">
                <div class="text-blue-400 font-bold line-height-3 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                <ul class="list-none p-0 m-0 mb-5 text-blue-100">
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Arcu vitae elementum</span>
                    </li>
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Dui faucibus in ornare</span>
                    </li>
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Morbi tincidunt augue</span>
                    </li>
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Duis ultricies lacus sed</span>
                    </li>
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Imperdiet proin</span>
                    </li>
                </ul>

                <button pButton pRipple class="p-button-outlined w-full mt-auto" label="Contact Us" ></button>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 border-round">
    <div class="overflow-x-auto">
        <table class="w-full white-space-nowrap" style="border-collapse: collapse; border-spacing: 0">
            <thead>
                <tr>
                    <td class="surface-100 p-3">
                        <div class="text-3xl text-900 mb-2">Pricing</div>
                        <span class="text-600 line-height-3">Fringilla est ullamcorper eget nulla facilisi etiam</span>
                    </td>
                    <td class="surface-100 p-3 text-center">
                        <div class="text-900 text-xl font-medium mb-3">Basic</div>
                        <div class="text-600 mb-3"><span class="text-3xl text-900">$10</span> /month</div>
                        <button pButton pRipple type="button" class="p-button-rounded" label="Free Trial"></button>
                    </td>
                    <td class="surface-100 p-3 text-center">
                        <div class="text-900 text-xl font-medium mb-3">Premium</div>
                        <div class="text-600 mb-3"><span class="text-3xl text-900">$10</span> /month</div>
                        <button pButton pRipple type="button" class="p-button-rounded" label="Buy Now"></button>
                    </td>
                    <td class="surface-100 p-3 text-center">
                        <div class="text-900 text-xl font-medium mb-3">Premium</div>
                        <div class="text-600 mb-3"><span class="text-3xl text-900">$30</span> /month</div>
                        <button pButton pRipple type="button" class="p-button-rounded p-button-outlined" label="Contact Us"></button>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Arcu purus</td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Posuere felis</td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Curabitur mollis</td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Vitae odio</td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Orci, mi</td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-500 pi pi-times"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Tincidunt vulputate</td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-500 pi pi-times"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-500 pi pi-times"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Quis felis</td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-500 pi pi-times"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-500 pi pi-times"></i></td>
                    <td class="text-center p-medium border-bottom-1 border-200"><i class="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td class="p-3 text-900 font-medium border-bottom-1 border-200">Dignissim vivamus</td>
                    <td class="text-center text-600 border-bottom-1 border-200">Up to <span class="text-900">5</span> files</td>
                    <td class="text-center text-600 border-bottom-1 border-200">Up to <span class="text-900">10</span> files</td>
                    <td class="text-center text-900 border-bottom-1 border-200">Unlimited</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`;

    block4: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8 bg-no-repeat bg-cover" style="background: url('assets/images/blocks/pricing/pricing-4.svg');">
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6 lg:pr-8">
            <div class="text-900 font-bold text-6xl mb-4">Pricing</div>
            <div class="text-700 text-xl line-height-3 mb-4 lg:mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velitnumquam eligendi quos.</div>
        </div>
        <div class="w-full md:w-6 lg:w-3">
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center my-4">
                    <i class="pi pi-check text-green-500 mr-3"></i>
                    <span>Arcu vitae elementum</span>
                </li>
                <li class="flex align-items-center my-4">
                    <i class="pi pi-check text-green-500 mr-3"></i>
                    <span>Dui faucibus in ornare</span>
                </li>
                <li class="flex align-items-center my-4">
                    <i class="pi pi-check text-green-500 mr-3"></i>
                    <span>Morbi tincidunt augue</span>
                </li>
            </ul>
        </div>
        <div class="w-full md:w-6 lg:w-3 md:pl-5">
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center my-4">
                    <i class="pi pi-check text-green-500 mr-3"></i>
                    <span>Duis ultricies lacus sed</span>
                </li>
                <li class="flex align-items-center my-4">
                    <i class="pi pi-check text-green-500 mr-3"></i>
                    <span>Imperdiet proin</span>
                </li>
                <li class="flex align-items-center my-4">
                    <i class="pi pi-check text-green-500 mr-3"></i>
                    <span>Nisi scelerisque</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-wrap mt-5 -mx-3">
        <div class="w-full lg:w-4 p-3">
            <div class="shadow-2 p-3 h-full bg-primary" style="border-radius: 6px">
                <div class="font-medium text-xl mb-5">Free Forever</div>
                <div class="font-bold text-5xl mb-5">Free</div>
                <button type="button" pRipple class="font-medium appearance-none border-none p-2 surface-0 text-primary hover:surface-100 p-component lg:w-full border-rounded cursor-pointer transition-colors transition-duration-150" style="border-radius: 6px">
                    <span>Create Account</span>
                </button>
                <p class="text-sm line-height-3 mb-0 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="w-full lg:w-4 p-3">
            <div class="shadow-2 p-3 h-full surface-card" style="border-radius: 6px">
                <div class="font-medium text-xl mb-5 text-900 ">Monthly</div>
                <div class="flex align-items-center mb-5">
                    <span class="text-900 font-bold text-5xl">$29</span>
                    <span class="font-medium text-500 ml-2">per month</span>
                </div>
                <button pButton pRipple label="Proceed Monthly" icon="pi pi-arrow-right" iconPos="right" class="lg:w-full font-medium p-2" style="border-radius: 6px"></button>
                <p class="text-sm line-height-3 mb-0 mt-5">Nec ultrices dui sapien eget. Amet nulla facilisi morbi tempus.</p>
            </div>
        </div>
        <div class="w-full lg:w-4 p-3">
            <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                <div class="flex flex-row justify-content-between mb-5 align-items-center">
                    <div class="text-900 text-xl font-medium">Yearly</div>
                    <span class="bg-orange-100 500 text-orange-500 font-semibold px-2 border-round">🎉 Save 20%</span>
                </div>
                <div class="flex align-items-center mb-5">
                    <span class="text-900 font-bold text-5xl">$275</span>
                    <span class="font-medium text-500 ml-2">per year</span>
                </div>
                <button pButton pRipple label="Proceed Yearly" icon="pi pi-arrow-right" iconPos="right" class="lg:w-full font-medium p-2" style="border-radius: 6px"></button>
                <p class="text-sm line-height-3 mb-0 mt-5">Placerat in egestas erat imperdiet sed euismod nisi porta.</p>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="surface-card px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 p-1 mb-3 lg:mb-5">
            <div class="text-900 font-bold text-6xl mb-4">Pricing</div>
            <div class="text-700 text-xl line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                numquam eligendi quos.</div>
        </div>
        <div class="col-12 lg:col-6 md:mb-3">
            <div class="h-full">
                <div class="flex flex-column justify-content-center h-full" style="border-radius: 6px">
                    <div class="flex flex-row p-3 mb-3">
                        <span
                            class="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                            style="min-width: 2.25rem; height: 2.25rem">
                            <i class="pi pi-users"></i>
                        </span>
                        <div class="ml-3">
                            <div class="text-900 font-medium text-xl mb-2">Unlimited Users</div>
                            <span class="text-600 line-height-3">Auctor augue mauris augue neque gravida in fermentum et
                                sollicitudin. Ornare massa eget egestas purus viverra accumsan.</span>
                        </div>
                    </div>
                    <div class="flex flex-row p-3 mb-3">
                        <span
                            class="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                            style="min-width: 2.25rem; height: 2.25rem">
                            <i class="pi pi-comments"></i>
                        </span>
                        <div class="ml-3">
                            <div class="text-900 font-medium text-xl mb-2">Unlimited Inbox</div>
                            <span class="text-600 line-height-3">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Quo perspiciatis error possimus ipsam omnis libero dolorum.</span>
                        </div>
                    </div>
                    <div class="flex flex-row p-3">
                        <span
                            class="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                            style="min-width: 2.25rem; height: 2.25rem">
                            <i class="pi pi-moon"></i>
                        </span>
                        <div class="ml-3">
                            <div class="text-900 font-medium text-xl mb-2">Dark Mode</div>
                            <span class="text-600 line-height-3">Quidem delectus ad est illo ipsam fugiat voluptas
                                tempora. At a veritatis obcaecati ipsam id eius aut at error modi.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6">
            <div class="h-full pl-3">
                <div class="surface-card shadow-2 p-5" style="border-radius: 6px">
                    <div class="flex flex-column justify-content-between md:flex-row">
                        <div class="flex-grow-1 lg:w-min">
                            <div class="text-900 font-bold text-2xl mb-2">Single Plan</div>
                            <div class="text-500 text-xl">Id diam vel quam elementum.</div>
                        </div>
                        <div class="flex align-items-center w-auto lg:w-9rem lg:justify-content-end mt-3 lg:mt-0">
                            <span class="font-bold text-4xl text-900">$9</span>
                            <span class="text-700 text-xl ml-2 line-height-3">per month</span>
                        </div>
                    </div>
                    <hr class="my-5 mx-0 border-top-1 border-bottom-none surface-border" />
                    <div class="text-900 font-medium text-xl pb-1">Features</div>
                    <div class="flex flex-column justify-space-between md:flex-row">
                        <ul class="list-none p-0 m-0 flex-grow-1">
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Arcu vitae elementum</span>
                            </li>
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Dui faucibus in ornare</span>
                            </li>
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Morbi tincidunt augue</span>
                            </li>
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Duis ultricies lacus sed</span>
                            </li>
                        </ul>
                        <ul class="list-none p-0 md:pl-2 m-0 flex-grow-1">
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Imperdiet proin</span>
                            </li>
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Nisi scelerisque</span>
                            </li>
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Elit eget gravida</span>
                            </li>
                            <li class="flex align-items-center my-3">
                                <i class="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Viverra vitae congue eu</span>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-bottom-none surface-border" />
                    <button pButton pRipple class="w-full mt-2" label="Buy Now"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

block6:string=`
<div class="surface-50 px-4 py-8 md:px-6 lg:px-8">
<div class="text-900 font-bold text-5xl mb-4 text-center">Pricing</div>
<div class="text-700 text-xl mb-6 text-center line-height-3">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
    eligendi quos.
</div>
<div class="flex align-items-center justify-content-center mb-6">
    <ul class="bg-white p-2 m-0 list-none flex overflow-x-auto select-none" style="border-radius: 30px">
        <li class="mr-2">
            <a pRipple class="cursor-pointer px-4 py-3 flex align-items-center transition-colors transition-duration-150"
            [ngClass]="{'bg-primary': selectedInterval == 'month','text-600': selectedInterval != 'month'}" (click)="selectedInterval = 'month'" style="border-radius: 30px">
                <span class="font-medium">Monthly</span>
            </a>
        </li>
        <li class="mr-2">
            <a pRipple
                class="cursor-pointer px-4 py-3 flex align-items-center transition-colors transition-duration-150"
                [ngClass]="{'bg-primary': selectedInterval == 'year','text-600': selectedInterval != 'year'}" (click)="selectedInterval = 'year'" style="border-radius: 30px">
                <span class="font-medium">Yearly</span>
            </a>
        </li>
    </ul>
</div>
<div class="flex flex-column gap-4 lg:flex-row lg:align-items-center lg:w-8 lg:col-offset-2">
    <div class="flex flex-column gap-4">
        <div *ngFor="let plan of plans" class="shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer border-round-lg"
            (click)="selectedPlan=plan" [ngClass]="{'surface-card surface-border': selectedPlan != plan,'bg-primary-100': selectedPlan == plan}">
            <div [ngClass]="{'text-primary-900': selectedPlan == plan,'text-900': selectedPlan != plan}">
                <div class="flex flex-column lg:flex-row align-items-center mb-4">
                    <div class="mr-3 pb-3 lg:pb-0">
                        <span
                            class="inline-flex justify-content-center border-circle align-items-center bg-indigo-100 w-3rem h-3rem"
                            [ngClass]="{'bg-primary-reverse text-primary':selectedPlan == plan,'bg-primary text-primary': selectedPlan != plan}">
                            <i [ngClass]="plan.icon" class="text-2xl"></i>
                        </span>
                    </div>
                    <div>
                        <span class="text-xl mb-2 font-bold">{{plan.name}}</span>
                        <p class="m-0 mt-2 font-light text-sm">
                            Magna fermentum iaculis
                        </p>
                    </div>
                </div>
                <p *ngIf="selectedInterval == 'month'" class="lg:ml-7 m-0 font-light line-height-3">
                    Nunc consequat interdum varius sit.
                    <span class="font-medium">$ {{plan.price}} | </span>Save $67 on Annual
                    Plan
                </p>
                <p *ngIf="selectedInterval == 'year'" class="lg:ml-7 m-0 font-light line-height-3">
                    Nunc consequat interdum varius sit.
                    <span class="font-medium">$ {{ plan.price * 12 - 67}} | </span>Save $67 on Annual
                    Plan
                </p>
            </div>
        </div>
    </div>
    <div class="w-12 lg:w-6">
        <div
            class="shadow-2 bg-primary-100 p-4 border-2 border-transparent border-noround-bottom border-round-lg">
            <div class="flex flex-row justify-content-between mb-5 align-items-center">
                <div class="text-primary-900 text-4xl font-bold mr-2 lg:mr-0">
                    {{ selectedPlan.name }}
                </div>
                <span *ngIf="selectedInterval == 'month'"
                    class="surface-0 text-700 font-light p-1 border-round-lg ml-2"><span
                        class="font-bold text-900 text-xl m-1">$ {{selectedPlan.price}}</span>
                    per {{ selectedInterval }}</span>
                <span *ngIf="selectedInterval == 'year'"
                    class="surface-0 text-700 font-light p-1 border-round-lg ml-2"><span
                        class="font-bold text-900 text-xl m-1">$ {{selectedPlan.price * 12 - 67}}</span>
                    per {{ selectedInterval }}</span>
            </div>
            <p class="text-primary-800 m-0 line-height-3">
                Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nec
                dui nunc mattis enim ut tellus elementum sagittis vitae.
            </p>
        </div>
        <div class="shadow-2 border-round-lg border-noround-top surface-card shadow-2 p-4 flex flex-column">
            <ul class="list-none p-0 m-0" *ngFor="let description of selectedPlan.description">
                <li class="flex align-items-center my-3">
                    <i [ngClass]="description.icon" class="text-primary mr-3"></i>
                    <span>{{ description.name }}</span>
                </li>
            </ul>
            <button pButton pRipple label="Buy Now" class="m-5"></button>
        </div>
    </div>
</div>
</div>`;
}