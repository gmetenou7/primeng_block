import { Component } from '@angular/core';

@Component({
    templateUrl: './verticalnav.component.html'
})
export class VerticalNavComponent {

    block1 = `
<div class="surface-card shadow-2 border-round w-full lg:w-auto select-none" style="min-width: 16rem">
    <ul class="list-none p-2 m-0">
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-home mr-2 text-700"></i>
                <span class="font-medium text-700">Dashboard</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-bookmark mr-2 text-700"></i>
                <span class="font-medium text-700">Bookmarks</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-users mr-2 text-700"></i>
                <span class="font-medium text-700">Team</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-comments mr-2 text-700"></i>
                <span class="font-medium text-700">Messages</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-calendar mr-2 text-700"></i>
                <span class="font-medium text-700">Calendar</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
            </a>
        </li>
    </ul>
</div>`;

    block2 = `
<div class="surface-card shadow-2 border-round w-full lg:w-auto select-none" style="min-width: 16rem">
    <ul class="list-none p-2 m-0">
        <li>
           <div class="p-3 text-500 font-medium">HOME</div>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-home mr-2 text-700"></i>
                <span class="font-medium text-700">Dashboard</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-bookmark mr-2 text-700"></i>
                <span class="font-medium text-700">Bookmarks</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-users mr-2 text-700"></i>
                <span class="font-medium text-700">Team</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-comments mr-2 text-700"></i>
                <span class="font-medium text-700">Messages</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-calendar mr-2 text-700"></i>
                <span class="font-medium text-700">Calendar</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
            </a>
        </li>
    </ul>
    <ul class="list-none p-2 m-0 border-top-1 surface-border">
        <li>
           <div class="p-3 text-500 font-medium">ORGANIZATION</div> 
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-home mr-2 text-700"></i>
                <span class="font-medium text-700">Overview</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-bookmark mr-2 text-700"></i>
                <span class="font-medium text-700">Security</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-users mr-2 text-700"></i>
                <span class="font-medium text-700">Domains</span>
            </a>
        </li>
        <li>
            <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                <i class="pi pi-calendar mr-2 text-700"></i>
                <span class="font-medium text-700">Reports</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
            </a>
        </li>
    </ul>
</div>`;

    block3 = `
<div class="bg-indigo-500 shadow-2 border-round w-full lg:w-auto select-none" style="min-width: 16rem">
    <ul class="list-none p-2 m-0">
        <li>
            <div class="p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">HOME</span>
                <i class="pi pi-chevron-down"></i>
            </div>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-bookmark mr-2"></i>
                        <span class="font-medium">Bookmarks</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">Team</span>
                    </a>
                </li>
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-comments mr-2"></i>
                        <span class="font-medium">Messages</span>
                    </a>
                </li>
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-calendar mr-2"></i>
                        <span class="font-medium">Calendar</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <ul class="list-none p-2 m-0 border-top-1 border-indigo-400">
        <li>
            <div class="p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">
                <span class="font-medium">ORGANIZATION</span>
                <i class="pi pi-chevron-down"></i>
             </div>
             <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">Overview</span>
                    </a>
                </li>
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-bookmark mr-2"></i>
                        <span class="font-medium">Security</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                    </a>
                </li>
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-users mr-2"></i>
                        <span class="font-medium">Domains</span>
                    </a>
                </li>
                <li>
                    <a class="flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150">
                        <i class="pi pi-calendar mr-2"></i>
                        <span class="font-medium">Reports</span>
                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`;

}
