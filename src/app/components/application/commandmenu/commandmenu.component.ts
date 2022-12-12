import { Component } from '@angular/core';

@Component({
    templateUrl: './commandmenu.component.html'
})
export class CommandMenuComponent { 
    value1: string;

    block1: string = `
<div class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1"  >
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search"></i>
            <input type="text" pInputText placeholder="Search menus, shortcuts, contact and more..." [(ngModel)]="value1" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-1" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-1" class="hidden">
        <div class="border-y-1 surface-border px-3 py-3">
            <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">unread mails</li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">go to last mail</li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">lock account</li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">profile</li>
            </ul>
        </div>
        <div class="p-2">
            <article class="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-cog text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">System Settings</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">Change your system preferences</p>
                    </div>
                </div>
                <span class="border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">S</span>
            </article>
            
            <article class="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-user text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">My Profile</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">Go to your profile</p>
                    </div>
                </div>
                <span class="border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">P</span>
            </article>

            <article class="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-moon text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Switch to Dark Mode</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">Switch to dark mode save your eyes</p>
                    </div>
                </div>
                <span class="border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">D</span>
            </article>

            <article class="flex w-full justify-content-between align-items-center select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-sign-out text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Log out</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">End your session</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>`;
}