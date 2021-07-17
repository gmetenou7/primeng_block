import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './stackedlist.component.html'
})
export class StackedListComponent implements OnInit {

    block1 = `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Team Members</span>
        <div>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Janette Hudson</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Arlene McCoy</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Jacob Jones</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="assets/images/blocks/avatars/circle/avatar-m-2.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">James Cooper</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></button>
                <button pButton pRipple class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></button>
            </div>
        </li>
    </ul>
</div>`;

    block2 = `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Best Selling Products</span>
        <div>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                <span class="text-600">Clothing</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-orange-500 h-full" style="width:50%"></div>
                </div>
                <span class="text-orange-500 ml-3 font-medium">%50</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                <span class="text-600">Accessories</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-cyan-500 h-full" style="width:16%"></div>
                </div>
                <span class="text-cyan-500 ml-3 font-medium">%16</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                <span class="text-600">Accessories</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-pink-500 h-full" style="width:67%"></div>
                </div>
                <span class="text-pink-500 ml-3 font-medium">%67</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                <span class="text-600">Office</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-green-500 h-full" style="width:35%"></div>
                </div>
                <span class="text-green-500 ml-3 font-medium">%35</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                <span class="text-600">Accessories</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-purple-500 h-full" style="width:75%"></div>
                </div>
                <span class="text-purple-500 ml-3 font-medium">%75</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                <span class="text-600">Clothing</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-teal-500 h-full" style="width:40%"></div>
                </div>
                <span class="text-teal-500 ml-3 font-medium">%40</span>
            </div>
        </li>
    </ul>
</div>`;

    block3 = `
<div class="surface-card shadow-2 border-round p-4">
    <div class="text-xl text-900 font-medium mb-5">Latest News</div>
    <ul class="list-none p-0 m-0">
        <li class="pb-3 border-bottom-1 surface-border">
            <div class="font-medium text-900 mb-2">Aenean euismod elementum</div>
            <div class="line-height-3 text-600" style="max-width: 30rem">Vitae turpis massa sed elementum tempus egestas sed sed risus. 
                In metus vulputate eu scelerisque felis imperdiet proin.</div>
        </li>
        <li class="py-3 border-bottom-1 surface-border">
            <div class="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
            <div class="line-height-3 text-600" style="max-width: 30rem">Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. 
                Elementum eu facilisis sed odio morbi.</div>
        </li>
        <li class="py-3 border-bottom-1 surface-border">
            <div class="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
            <div class="line-height-3 text-600" style="max-width: 30rem">In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
        </li>
    </ul>
    <div class="flex justify-content-between pt-3">
        <button pButton pRipple label="Clear All" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
        <button pButton pRipple label="New Entry" class="p-button-outlined w-6 ml-2"></button>
    </div>
</div>`;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Add New', icon: 'pi pi-fw pi-plus'},
            {label: 'Remove', icon: 'pi pi-fw pi-minus'}
        ];
    }

}
