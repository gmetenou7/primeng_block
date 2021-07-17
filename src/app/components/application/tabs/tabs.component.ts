import { Component } from '@angular/core';

@Component({
    templateUrl: './tabs.component.html'
})
export class TabsComponent {

    block1 = `
<ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <li>
        <a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
            [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 0, 'text-700 border-transparent': active1 !== 0}" (click)="active1 = 0">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li>
        <a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 1, 'text-700 border-transparent': active1 !== 1}" (click)="active1 = 1">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li>
        <a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 2, 'text-700 border-transparent': active1 !== 2}" (click)="active1 = 2">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li>
        <a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 3, 'text-700 border-transparent': active1 !== 3}" (click)="active1 = 3">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li>
        <a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" 
        [ngClass]="{'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 4, 'text-700 border-transparent': active1 !== 4}" (click)="active1 = 4">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

    block2 = `
<ul class="surface-card p-2 m-0 list-none flex overflow-x-auto select-none">
    <li class="mr-2">
        <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 0, 'text-700': active2 !== 0}" (click)="active2 = 0">
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Overview</span>
        </a>
    </li>
    <li class="mr-2">
        <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 1, 'text-700': active2 !== 2}" (click)="active2 = 1">
            <i class="pi pi-users mr-2"></i>
            <span class="font-medium">Members</span>
        </a>
    </li>
    <li class="mr-2">
        <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 2, 'text-700': active2 !== 2}" (click)="active2 = 2">
            <i class="pi pi-shopping-cart mr-2"></i>
            <span class="font-medium">Sales</span>
        </a>
    </li>
    <li class="mr-2">
        <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 3, 'text-700': active2 !== 3}" (click)="active2 = 3">
            <i class="pi pi-user mr-2"></i>
            <span class="font-medium">Profile</span>
        </a>
    </li>
    <li>
        <a class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150" 
        [ngClass]="{'bg-primary hover:bg-primary': active2 === 4, 'text-700': active2 !== 4}" (click)="active2 = 4">
            <i class="pi pi-cog mr-2"></i>
            <span class="font-medium">Settings</span>
        </a>
    </li>
</ul>`;

    active1: number = 0;

    active2: number = 0;

}
