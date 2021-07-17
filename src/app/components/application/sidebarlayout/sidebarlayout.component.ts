import { Component } from '@angular/core';

@Component({
    templateUrl: './sidebarlayout.component.html'
})
export class SidebarLayoutComponent {

    block1 = `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-1" class="bg-bluegray-800 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 bg-bluegray-900 flex-shrink-0" style="height:60px">
                <img src="assets/images/blocks/logos/hyper-300.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto mt-3">
                <ul class="list-none p-3 m-0">
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors">
                            <i class="pi pi-home mr-2"></i>
                            <span class="font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors">
                            <i class="pi pi-bookmark mr-2"></i>
                            <span class="font-medium">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Reports</span>
                            <i class="pi pi-chevron-down ml-auto mr-1"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors"
                                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto mr-1"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                        transition-duration-150 transition-colors">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                        transition-duration-150 transition-colors">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors">
                            <i class="pi pi-users mr-2"></i>
                            <span class="font-medium">Team</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors">
                            <i class="pi pi-comments mr-2"></i>
                            <span class="font-medium">Messages</span>
                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-yellow-500 text-bluegray-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-bluegray-600" />
                <ul class="list-none p-2 m-0 hidden">
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors">
                            <i class="pi pi-user mr-2"></i>
                            <span class="font-medium">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors">
                            <i class="pi pi-sign-out mr-2"></i>
                            <span class="font-medium">Sign Out</span>
                        </a>
                    </li>
                </ul>
                <a class="m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors"
                    pStyleClass="@prev" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" leaveActiveClass="fadeout">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                    <i class="pi pi-chevron-up ml-auto"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar-1" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true">
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
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-2" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors"
                                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto mr-1"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors"
                                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto mr-1"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 surface-border" />
                <a class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar-2" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true">
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
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;

    block3 = `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-3" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="assets/images/blocks/logos/hyper-300.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <span class="block p-3 text-gray-600">FAVORITES</span>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-home mr-2"></i>
                            <span class="font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-bookmark mr-2"></i>
                            <span class="font-medium">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Reports</span>
                            <i class="pi pi-chevron-down ml-auto mr-1"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors"
                                    pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto mr-1"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-users mr-2"></i>
                            <span class="font-medium">Team</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-comments mr-2"></i>
                            <span class="font-medium">Messages</span>
                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <span class="block p-3 text-600">APPLICATION</span>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-folder mr-2"></i>
                            <span class="font-medium">Projects</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-chart-bar mr-2"></i>
                            <span class="font-medium">Reports</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-gray-800" />
                <a class="m-3 flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colorss">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar-3" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true">
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
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;

    block4 = `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-4" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-5rem select-none">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-500" style="height:60px">
                <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="30">
            </div>
            <div class="mt-3 select-none">
                <ul class="list-none p-3 lg:py-3 lg:px-2 m-0">
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-home mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-bookmark mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-users mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Team</span>
                        </a>
                    </li>
                    <li class="lg:relative">
                        <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors" 
                            pStyleClass="@next" toggleClass="hidden" [hideOnOutsideClick]="true">
                            <i class="pi pi-chart-line mr-2 lg:mr-0 text-base lg:text-xl" pBadge="3"></i>
                            <span class="font-medium inline lg:hidden">Reports</span>
                            <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                        </a>
                        <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 border-1 border-gray-800 border-round-right shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors"
                                    pStyleClass="@next" toggleClass="hidden">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-calendar mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-cog mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-2 border-top-1 border-gray-800" />
                <a class="my-3 mx-2 flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-300 hover:text-0
                    transition-duration-150 transition-colors">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32"/>
                    <span class="font-medium inline lg:hidden">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar-1" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true">
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
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;

    block5 = `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-5" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-7rem select-none">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0 bg-orange-500" style="height:60px">
                <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="30">
            </div>
            <div class="mt-3">
                <ul class="list-none p-3 m-0">
                    <li>
                        <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Search</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors" 
                            pStyleClass="@next" toggleClass="hidden" [hideOnOutsideClick]="true">
                            <i class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg" pBadge="3" severity="danger"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                            <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                        </a>
                        <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 lg:ml-3 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 bg-gray-900 border-1 border-gray-800 shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors"
                                    pStyleClass="@next" toggleClass="hidden">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                            <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-gray-800" />
                <a class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32px"/>
                    <span class="font-medium inline lg:hidden">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar-1" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true">
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
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
                
            </div>
        </div>
    </div>
</div>`;

}
