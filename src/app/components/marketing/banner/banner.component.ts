import { Component } from '@angular/core';

@Component({
    templateUrl: './banner.component.html'
})
export class BannerComponent {

    block1: string = `
<div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🔥 Hot Deals!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
    </a>
    <a class="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`;

block2: string = `
<div class="bg-cyan-600 text-white p-3 flex justify-content-between align-items-center flex-wrap shadow-2" style="border-radius: 8px">
    <div class="font-bold">🔥 Hot Deals!</div>
    <div class="align-items-center flex">
        <span class="line-height-3 hidden lg:block">Libero voluptatum atque exercitationem praesentium provident odit.</span>
        <a class="flex align-items-center ml-2">
            <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
        </a>
    </div>
    <a class="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-cyan-400 cursor-pointer transition-colors transition-duration-150" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`;

}