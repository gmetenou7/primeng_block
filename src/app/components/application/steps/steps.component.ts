import { Component } from '@angular/core';

@Component({
    templateUrl: './steps.component.html'
})
export class StepsComponent {

    block1: string = `
<ul class="list-none p-0 m-0 flex flex-column md:flex-row">
    <li class="relative mr-0 md:mr-8 flex-auto">
        <div class="border-1 border-300 border-round p-3 surface-card flex flex-column md:flex-row align-items-center z-1">
            <i class="pi pi-check-circle text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
            <div>
                <div class="text-900 font-medium mb-1">Seat</div>
                <span class="text-600 text-sm hidden md:block">Tempus iaculis urna id volutpat</span>
            </div>
        </div>
        <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px"></div>
    </li>
    <li class="relative mr-0 md:mr-8 flex-auto">
        <div class="border-2 border-blue-500 border-round p-3 surface-card flex flex-column md:flex-row align-items-center z-1">
            <i class="pi pi-credit-card text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
            <div>
                <div class="text-blue-600 font-medium mb-1">Payment</div>
                <span class="text-600 text-sm hidden md:block">Nisi vitae suscipit tellus</span>
            </div>
        </div>
        <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px"></div>
    </li>
    <li class="relative flex-auto">
        <div class="border-1 border-300 border-round p-3 surface-50 flex flex-column md:flex-row align-items-center z-1">
            <i class="pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
            <div>
                <div class="text-900 font-medium mb-1">Confirmation</div>
                <span class="text-600 text-sm hidden md:block">Sit amet est placerat in egestas erat</span>
            </div>
        </div>
    </li>
</ul>`;

    block2: string = `
<ul class="list-none p-0 m-0 surface-0">
    <li class="p-3 mb-2 flex">
        <div class="flex flex-column align-items-center" style="width:2rem">
            <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:2rem; min-height: 2rem">
                <i class="pi pi-check"></i>
            </span>
            <div class="h-full surface-300" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="ml-3">
            <div class="font-medium text-900 mb-2">Seat</div>
            <span class="line-height-3 text-700">Tempus iaculis urna id volutpat.</span>
        </div>
    </li>

    <li class="p-3 mb-2 flex border-2 border-blue-500 border-round">
        <div class="flex flex-column align-items-center" style="width:2rem">
            <span class="surface-0 text-blue-500 border-blue-500 border-2 border-circle flex align-items-center justify-content-center border-circle" style="min-width:2rem; min-height: 2rem">
                2
            </span>
            <div class="h-full bg-blue-500" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="ml-3">
            <div class="font-medium text-blue-500 mb-2">Payment</div>
            <span class="line-height-3 text-700">Tempus iaculis urna id volutpat.</span>
        </div>
    </li>

    <li class="p-3 flex">
        <div class="flex flex-column align-items-center" style="width:2rem">
            <span class="surface-0 text-300 border-2 border-circle flex align-items-center justify-content-center border-circle" style="min-width:2rem; min-height: 2rem">
                3
            </span>
            <div class="h-full surface-300" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="ml-3">
            <div class="font-medium text-600 mb-2">Confirmation</div>
            <span class="line-height-3 text-500">Sit amet est placerat in egestas erat.</span>
        </div>
    </li>
</ul>`;

    block3: string = `
<div class="flex flex-column lg:flex-row surface-card shadow-2 border-round">
    <div class="flex-grow-1 border-left-2 lg:border-bottom-2 lg:border-left-none border-blue-500">
        <div class="flex align-items-start p-4 border-bottom-1 lg:border-right-1 lg:border-bottom-none surface-border">
            <i class="text-2xl pi pi-id-card text-900 mr-3"></i>
            <div class="flex flex-column">
                <span class="text-900 font-medium text-xl mb-1 line-height-1">Personal</span>
                <span class="text-600 line-height-3">Fanes ac turpis</span>
            </div>
        </div>
    </div>
    <div class="flex-grow-1 border-left-2 lg:border-bottom-2 lg:border-left-none border-blue-500">
        <div class="flex align-items-start p-4 border-bottom-1 lg:border-right-1 lg:border-bottom-none surface-border">
            <i class="text-2xl pi pi-th-large text-900 mr-3"></i>
            <div class="flex flex-column">
                <span class="text-900 font-medium text-xl mb-1 line-height-1">Seat</span>
                <span class="text-600 line-height-3">Lorem ipsum dolor</span>
            </div>
        </div>
    </div>
    <div class="flex-grow-1 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent">
        <div class="flex align-items-start p-4 border-bottom-1 lg:border-right-1 lg:border-bottom-none surface-border">
            <i class="text-2xl pi pi-credit-card text-900 mr-3"></i>
            <div class="flex flex-column">
                <span class="text-900 font-medium text-xl mb-1 line-height-1">Payment</span>
                <span class="text-600 line-height-3">Consectetur adipisicing elit</span>
            </div>
        </div>
    </div>
    <div class="flex-grow-1 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent opacity-50">
        <div class="flex align-items-start p-4">
            <i class="text-2xl pi pi-check-circle text-900 mr-3"></i>
            <div class="flex flex-column">
                <span class="text-900 font-medium text-xl mb-1 line-height-1">Confirmation</span>
                <span class="text-600 line-height-3">Debitis animi nulla</span>
            </div>
        </div>
    </div>
</div>`;

    block4: string = `
<div class="flex align-items-center">
    <div>
        <button pButton pRipple class="p-button-outlined p-button-plain p-button-rounded" icon="pi pi-arrow-left"></button>
    </div>
    <span class="font-medium text-600 text-xl mx-3">1</span>
    <div class="flex-grow-1">
        <p-progressBar [value]="50" [showValue]="false"></p-progressBar>
    </div>
    <span class="font-medium text-600 text-xl mx-3">6</span>
    <div>
        <button pButton pRipple class="p-button-outlined p-button-plain p-button-rounded" icon="pi pi-arrow-right"></button>
    </div>
</div>`;

    block5: string = `
<div class="surface-card p-4 border-round shadow-2">
    <div class="text-900 font-medium text-xl mb-3">Registration</div>
    <p class="text-600 my-0 mb-4 pb-3 border-bottom-1 surface-border">1 of 5 steps are already complete</p>
    <div class="grid mb-3">
        <div class="col-12 lg:col-6">
            <ul class="list-none mx-0 mb-0 mt-4 p-0">
                <li class="flex align-items-center p-3">
                    <span class="inline-flex mr-3 align-items-center justify-content-center bg-green-500 text-white border-circle border-1 surface-border" style="width:30px;height:30px">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-900 line-height-3">In tellus integer feugiat scelerisque</span>
                </li>
                <li class="flex align-items-center surface-100 p-3">
                    <span class="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border" style="width:30px;height:30px"></span>
                    <span class="text-900 line-height-3">Risus pretium quam vulputate</span>
                </li>
                <li class="flex align-items-center surface-100 p-3">
                    <span class="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border" style="width:30px;height:30px"></span>
                    <span class="text-900 line-height-3">Sem viverra aliquet eget sit amet tellus</span>
                </li>
                <li class="flex align-items-center surface-100 p-3">
                    <span class="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border" style="width:30px;height:30px"></span>
                    <span class="text-900 line-height-3">Blandit volutpat maecenas volutpat blandit</span>
                </li>
                <li class="flex align-items-center surface-100 p-3">
                    <span class="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border" style="width:30px;height:30px"></span>
                    <span class="text-900 line-height-3">Feugiat in ante metus dictum</span>
                </li>
            </ul>
        </div>
        <div class="col-12 lg:col-6">
            <div class="border-2 border-dashed surface-border border-round mt-4" style="min-height: 30rem">

            </div>
        </div>
    </div>
</div>`;

    block6: string = `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex flex-column md:flex-row lg:gap-5">
        <div class="flex-auto border-primary border-left-3 border-top-none md:border-left-none md:border-top-3 pl-3 py-3">
            <div class="font-bold text-primary mb-2">STEP 1</div>
            <span class="text-900 font-medium">Select Seat</span>
        </div>
        <div class="flex-auto border-primary border-left-3 border-top-none md:border-left-none md:border-top-3 pl-3 py-3">
            <div class="font-bold text-primary mb-2">STEP 2</div>
            <span class="text-900 font-medium">Payment</span>
        </div>
        <div class="flex-auto surface-border border-left-3 border-top-none md:border-left-none md:border-top-3 pl-3 py-3">
            <div class="font-bold text-500 mb-2">STEP 3</div>
            <span class="text-900 font-medium">Confirmation</span>
        </div>
    </div>
</div>`;

    block7: string = `
<section class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none flex flex-column gap-3 lg:flex-row justify-content-between p-0">
        <li class="flex align-items-center flex-column gap-3 relative w-full">
            <div class="flex justify-content-center align-items-center border-circle bg-primary-100 w-4rem h-4rem z-1">
                <i class="pi pi-check text-xl text-primary-600"></i>
            </div>
            <div class="w-full hidden lg:block absolute left-50 bg-primary-500 hidden" style="transform: translateY(-50%); height: 2px; top: 25%"></div>
            <div class="flex flex-column align-items-center">
                <h1 class="m-0 font-medium text-900 text-xl line-height-3">Personal</h1>
                <span class="text-600 text-base text-center">Fames ac turpis egestas integer</span>
            </div>
        </li>
        <li class="flex align-items-center flex-column gap-3 relative w-full">
            <div class="flex justify-content-center align-items-center border-circle bg-primary-100 w-4rem h-4rem z-1">
                <i class="pi pi-circle-fill text-xl text-primary-600"></i>
            </div>
            <div class="w-full hidden lg:block absolute right-50 bg-primary-500 hidden" style="transform: translateY(-50%); height: 2px; top: 25%"></div>
            <div class="w-full hidden lg:block absolute left-50 surface-300 hidden" style="transform: translateY(-50%); height: 2px; top: 25%"></div>
            <div class="flex flex-column align-items-center">
                <h1 class="m-0 font-medium text-900 text-xl line-height-3">Seat</h1>
                <span class="text-600 text-base text-center">Volutpat maecenas volutpat</span>
            </div>
        </li>
        <li class="flex align-items-center flex-column gap-3 relative w-full">
            <div class="flex justify-content-center align-items-center surface-200 border-circle  w-4rem h-4rem z-1">
                <i class="pi pi-circle-fill text-xl text-600"></i>
            </div>
            <div class="w-full hidden lg:block absolute right-50 surface-300 hidden" style="transform: translateY(-50%); height: 2px; top: 25%"></div>
            <div class="w-full hidden lg:block absolute left-50 surface-300 hidden" style="transform: translateY(-50%); height: 2px; top: 25%"></div>
            <div class="flex flex-column align-items-center">
                <h1 class="m-0 font-medium text-900 text-xl line-height-3">Payment</h1>
                <span class="text-600 text-base text-center">Fringilla phasellus faucibus</span>
            </div>
        </li>
        <li class="flex align-items-center flex-column gap-3 relative w-full">
            <div class="w-full hidden lg:block absolute right-50 surface-300 hidden" style="transform: translateY(-50%); height: 2px; top: 25%"></div>
            <div class="flex justify-content-center align-items-center surface-200 border-circle  w-4rem h-4rem z-1">
                <i class="pi pi-circle-fill text-xl text-600"></i>
            </div>
            <div class="flex flex-column align-items-center">
                <h1 class="m-0 font-medium text-900 text-xl line-height-3">Confirmation</h1>
                <span class="text-600 text-base text-center">Laoreet sit amet cursus </span>
            </div>
        </li>
    </ul>
</section>`;
}
