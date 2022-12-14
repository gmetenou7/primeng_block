import { Component } from '@angular/core';

@Component({
    templateUrl: './commandmenu.component.html'
})
export class CommandMenuComponent { 
    value1: string;

    value2: string;
    
    value3: string;
    
    value4: string;

    value5: string = 'Search menus, shortcuts, contact and more...';

    block1: string = `
<div class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
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

    block2: string = `
<div class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
            <input type="text" pInputText placeholder="Search menus, shortcuts, contact and more..." [(ngModel)]="value2" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-2" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-2" class="hidden">
       <section class="border-y-1 surface-border p-5 flex flex-column align-items-center gap-2">
        <h1 class="m-0 font-semibold text-900 text-xl">No emails found</h1>
        <span class="text-sm text-600 text-center">"{{ value2 }}" could not match any emails.
            Would you like to write a new email?</span>
        <div class="flex justfiy-content-center gap-3 mt-3">
            <button pButton class="p-button-outlined" label="View all emails"></button>
            <button pButton icon="pi pi-plus" label="Compose"></button>
        </div>
       </section>
    </div>
</div>`;

    block3: string = `
<div class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
            <input type="text" pInputText placeholder="Search menus, shortcuts, contact and more..." [(ngModel)]="value3" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-3" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-3" class="hidden">
        <div class="border-y-1 surface-border p-3">
            <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-file mr-2"></i>Add new file</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">N</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-lock mr-2"></i>Lock Session</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">L</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-moon mr-2"></i>Dark Mode</span>
                </li>
            </ul>
        </div>
        <div class="p-3">
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-bell mr-2"></i>Notifications</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">C</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-bookmark mr-2"></i>Bookmarks</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">B</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-bolt mr-2"></i>Quick Actions</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">SHIFT</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">Q</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-users mr-2"></i>Manage User Groups</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">U</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-book mr-2"></i>Go to Documentation</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">SHIFT</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">L</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-cog mr-2"></i>System Preferences</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">P</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>`;
    
    block4: string = `
<div class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
            <input type="text" pInputText placeholder="Find someone quickly..." [(ngModel)]="value1" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-4" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-4" class="hidden">
        <div class="border-y-1 surface-border p-3">
            <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-1.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Sarah Dylan</span>
                        <span class="text-600 text-xs">@srhdylan</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-2.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Marvin McKinney</span>
                        <span class="text-600 text-xs">@terekdriving</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-3.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Jenny Wilson</span>
                        <span class="text-600 text-xs">@lewissanctuary</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="p-3">
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-4.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Wade Warren</span>
                        <span class="text-600 text-xs">@amusementethics</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-5.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Darlene Robertson</span>
                        <span class="text-600 text-xs">@pointersnutmeg</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-6.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Courtney Henry</span>
                        <span class="text-600 text-xs">@amisssteadily</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-7.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Annette Black</span>
                        <span class="text-600 text-xs">@raddledhastily</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-8.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Arlene McCoy</span>
                        <span class="text-600 text-xs">@germlessshredder</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-9.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Savannah Nguyen</span>
                        <span class="text-600 text-xs">@zapdetergent</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="w-30rem bg-black-alpha-50 border-round-lg" style="backdrop-filter: blur(70px)">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-white-alpha-80"></i>
            <input type="text" pInputText [(ngModel)]="value5" class="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm" pStyleClass="#command-menu-5" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-20">⌘K</span>
    </div>
    <div id="command-menu-5" class="hidden">
        <div class="border-y-2 border-white-alpha-20 p-3">
            <h2 class="font-semibold text-xs text-white-alpha-50 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">unread mails</li>
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">go to last mail</li>
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">lock account</li>
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">profile</li>
            </ul>
        </div>
        <div class="p-3">
            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-star text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Favorites</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Reach your favorites easily</p>
                    </div>
                </div>
                <div class="flex align-items-center align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">F</span>
                </div>
            </article>
            
            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-github text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Repositories</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Get list and manage your repositories</p>
                    </div>
                </div>
                <div class="flex align-items-center align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">SHIFT</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">R</span>
                </div>
            </article>

            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-bolt text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Uprade your plan now</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Access all premium benefits</p>
                    </div>
                </div>
                <div class="flex align-items-center align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">U</span>
                </div>
            </article>

            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-sync text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Resync your account</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Refresh all of your data</p>
                    </div>
                </div>
                <div class="flex align-items-center align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">/</span>
                </div>
            </article>
        </div>
        <div class="p-2 bg-white-alpha-10 border-top-1 border-white-alpha-20 flex flex-wrap sm:flex-nowrap align-items-center">
            <p class="sm:mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">P</span>
                Select
            </p>
            <p class="sm:mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↑</span>
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↓</span>
                Navigate
            </p>
            <p class="sm:mt-0 mb-0 mr-3 text-xs text-white-alpha-70 flex-align-items-center justify-content-center flex-row">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20 inline-flex">esc</span>
                Close
            </p>
            <p class="w-full sm:w-auto sm:mt-0 mb-0 sm:ml-auto text-xs text-white-alpha-70">4 results</p>
        </div>
    </div>
</div>`;
}