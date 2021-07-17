import { Component } from '@angular/core';

@Component({
    templateUrl: './stats.component.html'
})
export class StatsComponent {

    block1 = `
<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
                <div>
                    <span class="block text-500 font-medium mb-3">Orders</span>
                    <div class="text-900 font-medium text-xl">152</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">24 new </span>
            <span class="text-500">since last visit</span>
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
                <div>
                    <span class="block text-500 font-medium mb-3">Revenue</span>
                    <div class="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">%52+ </span>
            <span class="text-500">since last week</span>
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
                <div>
                    <span class="block text-500 font-medium mb-3">Customers</span>
                    <div class="text-900 font-medium text-xl">28441</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">520  </span>
            <span class="text-500">newly registered</span>
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
                <div>
                    <span class="block text-500 font-medium mb-3">Comments</span>
                    <div class="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-comment text-purple-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">85 </span>
            <span class="text-500">responded</span>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
    <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
        <div class="flex align-items-center mb-3">
            <i class="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
            <span class="text-500 font-medium">Orders</span>
        </div>
        <span class="block text-900 font-medium mb-4 text-xl">152 New</span>
        <div class="flex align-items-center">
            <i class="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
            <span class="text-pink-500 font-medium ">-25</span>
        </div>
    </div>
    <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
        <div class="flex align-items-center mb-3">
            <i class="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
            <span class="text-500 font-medium">Revenue</span>
        </div>
        <span class="block text-900 font-medium mb-4 text-xl">$1500</span>
        <div class="flex align-items-center">
            <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
            <span class="text-green-500 font-medium ">+15</span>
        </div>
    </div>
    <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
        <div class="flex align-items-center mb-3">
            <i class="pi pi-users text-cyan-500 text-xl mr-2"></i>
            <span class="text-500 font-medium">Customers</span>
        </div>
        <span class="block text-900 font-medium mb-4 text-xl">25100</span>
        <div class="flex align-items-center">
            <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
            <span class="text-green-500 font-medium ">+%12</span>
        </div>
    </div>
    <div class="flex-auto p-3">
        <div class="flex align-items-center mb-3">
            <i class="pi pi-users text-purple-500 text-xl mr-2"></i>
            <span class="text-500 font-medium">Comments</span>
        </div>
        <span class="block text-900 font-medium mb-4 text-xl">72</span>
        <div class="flex align-items-center">
            <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
            <span class="text-green-500 font-medium ">+20</span>
        </div>
    </div>
</div>`;

    block3 = `
<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 border-round">
            <div class="p-3 flex align-items-start">
                <img src="assets/images/blocks/crypto/btc.png" style="width:32px; height: 32px" class="mr-2">
                <div>
                    <span class="text-700">Bitcoin</span>
                    <div class="text-green-500 text-xl mt-2">+0.53%</div>
                </div>
                <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">0.0045 BTC</div>
            </div>
            <img src="assets/images/blocks/graphs/graph-1.svg" class="w-full">
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 border-round">
            <div class="p-3 flex align-items-start">
                <img src="assets/images/blocks/crypto/eth.png" style="width:32px; height: 32px" class="mr-2">
                <div>
                    <span class="text-700">Ethereum</span>
                    <div class="text-green-500 text-xl mt-2">+3.52%</div>
                </div>
                <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">25.0985 ETH</div>
            </div>
            <img src="assets/images/blocks/graphs/graph-2.svg" class="w-full">
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 border-round">
            <div class="p-3 flex align-items-start">
                <img src="assets/images/blocks/crypto/btc.png" style="width:32px; height: 32px" class="mr-2">
                <div>
                    <span class="text-700">Dogecoin</span>
                    <div class="text-pink-500 text-xl mt-2">-0.32%</div>
                </div>
                <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">59000 DOGE</div>
            </div>
            <img src="assets/images/blocks/graphs/graph-3.svg" class="w-full">
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 border-round">
            <div class="p-3 flex align-items-start">
                <img src="assets/images/blocks/crypto/xlm.png" style="width:32px; height: 32px" class="mr-2">
                <div>
                    <span class="text-700">Stellar</span>
                    <div class="text-green-500 text-xl mt-2">+0.99%</div>
                </div>
                <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">1400 XLM</div>
            </div>
            <img src="assets/images/blocks/graphs/graph-4.svg" class="w-full">
        </div>
    </div>
</div>`;

}
