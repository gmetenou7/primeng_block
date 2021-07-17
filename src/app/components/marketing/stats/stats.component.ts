import { Component } from '@angular/core';

@Component({
    templateUrl: './stats.component.html'
})
export class StatsComponent {

    block1 = `
<div class="surface-ground">
    <div class="text-900 font-bold text-2xl line-height-2 mb-3">🍕 Choice of all Ninja Turtles</div>
    <p class="text-600 line-height-3 text-lg m-0 mb-5">Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">Neapolitan</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">995</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">Pepperoni</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">1504</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">Margherita</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">2038</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">BBQ Chicken</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">766</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-ground">
    <div class="text-900 font-bold text-4xl line-height-3 mb-3 text-center">Continue Breaking Records</div>
    <p class="text-600 line-height-3 text-lg m-0 mb-6 text-center">Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="grid surface-card shadow-2" style="border-radius: 10px">
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-users text-4xl text-blue-600 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">83M</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-chart-line text-4xl text-orange-500 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">$256K</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-globe text-4xl text-cyan-600 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">1,453</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-map text-4xl text-purple-500 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">45 km</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
    </div>
</div>`;

    block3 = `
<div class="bg-gray-900 text-center">
    <i class="pi pi-users bg-blue-500 text-4xl text-0 p-2 mb-3 border-circle" style="width: 49px; height: 49px"></i>
    <div class="text-white font-bold text-5xl line-height-3 mb-3">Biggest Tech Company of Region</div>
    <p class="text-gray-500 line-height-3 text-lg m-0 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo
        laoreet sit. Purus sit amet volutpat consequat.</p>

    <div class="flex flex-wrap align-items-center justify-content-center p-2">
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">3409</div>
            <div class="text-500 font-medium text-lg">Engineers</div>
        </div>
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">206</div>
            <div class="text-gray-500 font-medium text-lg">Designers</div>
        </div>
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">907</div>
            <div class="text-gray-500 font-medium text-lg">Accounts</div>
        </div>
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">572</div>
            <div class="text-gray-500 font-medium text-lg">Marketers</div>
        </div>
        <div class="py-4 flex align-items-center">
            <div class="text-white font-bold text-4xl mr-3">12</div>
            <div class="text-gray-500 font-medium text-lg">Executives</div>
        </div>
    </div>
</div>`;

}
