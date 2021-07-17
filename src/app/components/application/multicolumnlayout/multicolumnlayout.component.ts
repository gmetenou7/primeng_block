import { Component } from '@angular/core';

@Component({
    templateUrl: './multicolumnlayout.component.html'
})
export class MultiColumnLayoutComponent {

    block1 = `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar" class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
        <div class="flex h-full">
            <div class="flex flex-column h-full bg-indigo-500 flex-shrink-0 select-none">
                <div class="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-600" style="height:60px">
                    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="30">
                </div>
                <div class="overflow-y-auto mt-3">
                    <ul class="list-none py-3 px-2 m-0">
                        <li class="mb-2">
                            <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 0"
                                [ngClass]="{'bg-indigo-700': activeTab === 0}">
                                <i class="pi pi-home text-lg"></i>
                            </a>
                        </li> 
                        <li class="mb-2">
                            <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 1"
                                [ngClass]="{'bg-indigo-700': activeTab === 1}">
                                <i class="pi pi-bookmark text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 2"
                                [ngClass]="{'bg-indigo-700': activeTab === 2}">
                                <i class="pi pi-users text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 3"
                                [ngClass]="{'bg-indigo-700': activeTab === 3}">
                                <i class="pi pi-comments text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 4"
                                [ngClass]="{'bg-indigo-700': activeTab === 4}">
                                <i class="pi pi-calendar text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 5"
                                [ngClass]="{'bg-indigo-700': activeTab === 5}">
                                <i class="pi pi-cog text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <hr class="mb-3 mx-3 border-top-1 border-bottom-none border-indigo-300" />
                    <a class="m-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" style="width: 24px; height: 24px"/>
                    </a>
                </div>
            </div>
            <div class="flex flex-column surface-section p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style="width:250px">
                <div class="justify-content-end mb-3 flex lg:hidden">
                    <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#app-sidebar" leaveToClass="hidden" leaveActiveClass="fadeoutleft"></button>
                </div>
                <div class="border-2 border-dashed surface-border border-round flex-auto">
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 0}">Dashboard</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 1}">Bookmarks</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 2}">Team</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 3}">Messages</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 4}">Calendar</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 5}">Settings</div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input type="search" pInputText class="border-none" placeholder="Search">
                </span>
            </div>
            <a class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row 
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed border-round surface-border surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;

    activeTab: number = 0;

}
