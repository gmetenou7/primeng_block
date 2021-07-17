import { Component } from '@angular/core';

@Component({
    templateUrl: './steps.component.html'
})
export class StepsComponent {

    block1 = `
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

    block2 = `
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

    <li class="p-3 mb-2 flex">
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

}
