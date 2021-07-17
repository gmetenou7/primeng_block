import { Component } from '@angular/core';

@Component({
  templateUrl: './pageheading.component.html'
})
export class PageHeadingComponent {

    block1 = `
<div class="surface-section">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div class="font-medium text-3xl text-900">Customers</div>
            <div class="flex align-items-center text-700 flex-wrap">
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div class="flex align-items-center mt-3">
                    <i class="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-section">
    <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
        <div class="flex align-items-start flex-column md:flex-row">
            <img src="assets/images/blocks/avatars/circle/avatar-f-1@2x.png" class="mr-5 mb-3 lg:mb-0" style="width:90px;height:90px" />
            <div>
                <span class="text-900 font-medium text-3xl">Kathryn Murphy</span>
                <i class="pi pi-star-o text-2xl ml-4 text-yellow-500"></i>
                <div class="flex align-items-center flex-wrap text-sm">
                    <div class="mr-5 mt-3">
                        <span class="font-medium text-500">FOLLOWERS</span>
                        <div class="text-700 mt-2">333</div>
                    </div>
                    <div class="mr-5 mt-3">
                        <span class="font-medium text-500">PROJECTS</span>
                        <div class="text-700 mt-2">26</div>
                    </div>
                    <div class="mr-5 mt-3">
                        <span class="font-medium text-500">COLLECTIONS</span>
                        <div class="text-700 mt-2">17</div>
                    </div>
                    <div class="mt-3">
                        <span class="font-medium text-500">SHOTS</span>
                        <div class="text-700 mt-2">130</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <button pButton pRipple icon="pi pi-bookmark" class="p-button-rounded mr-2"></button>
            <button pButton pRipple icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></button>
            <button pButton pRipple icon="pi pi-list" class="p-button-rounded p-button-help"></button>
        </div>
    </div>
</div>`;

    block3 = `
<div class="surface-section">
    <div class="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
        <div class="font-medium text-3xl text-900">Customers</div>
        <div class="mt-3 md:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`;

    block4 = `
<div class="bg-gray-900">
    <div class="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
        <div class="font-medium text-3xl text-white">Customers</div>
        <div class="mt-3 md:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`;

}
