import { Component } from '@angular/core';

@Component({
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {

    block1: string = `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style="min-height: 80px">
    <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
    <a class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="lg:relative">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Inbox</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li class="border-top-1 surface-border lg:border-top-none">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                    <div class="block lg:hidden">
                        <div class="text-900 font-medium">Josephine Lillard</div>
                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block2: string = `
<div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800" style="min-height: 84px">
    <img src="assets/images/blocks/logos/bastion-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
    <a class="cursor-pointer block lg:hidden text-gray-400" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800">
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
                    <li>
                        <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
                            <li>
                                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li class="flex-order-2 lg:flex-order-0">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2">
                    <span class="p-input-icon-left w-full">
                        <i class="pi pi-search text-gray-400"></i>
                        <input type="text" pInputText placeholder="Search" class="bg-gray-800 text-gray-400 border-gray-800 w-full" />
                    </span>
                </a>
            </li>
            <li class="border-top-1 border-gray-800 lg:border-top-none">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                    <div class="block lg:hidden">
                        <div class="text-white font-medium">Josephine Lillard</div>
                        <span class="text-gray-400 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block3: string = `
<div class="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style="min-height: 84px">
    <img src="assets/images/blocks/logos/bastion-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
    <a class="cursor-pointer block lg:hidden text-indigo-100" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li class="flex-order-2 lg:flex-order-0">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2">
                    <span class="p-input-icon-left w-full">
                        <i class="pi pi-search text-indigo-100"></i>
                        <input type="text" pInputText class="bg-indigo-400 text-indigo-100 border-indigo-400 w-full" />
                    </span>
                </a>
            </li>
            <li class="border-top-1 border-indigo-400 lg:border-top-none">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                    <div class="block lg:hidden">
                        <div class="text-white font-medium">Josephine Lillard</div>
                        <span class="text-indigo-100 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block4: string = `
<div class="surface-overlay px-6 shadow-2 flex justify-content-between relative lg:static" style="min-height: 84px">
    <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6 align-self-center">
    <a class="cursor-pointer block lg:hidden align-self-center text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Inbox</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li class="border-top-1 surface-border lg:border-top-none">
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                    <div class="block lg:hidden">
                        <div class="text-900 font-medium">Josephine Lillard</div>
                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;
    
}