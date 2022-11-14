import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './cardheading.component.html'
})
export class CardHeadingComponent implements OnInit {

    block1 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="text-3xl font-medium text-900 mb-2">Card Title</div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;

    block2 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex align-items-center justify-content-between">
        <div class="flex align-items-center">
            <span class="text-xl font-medium text-900">Card Title</span>
        </div>
        <div>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;

    block3 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-2 flex align-items-center justify-content-between">
        <div class="flex align-items-center">
            <i class="pi pi-map-marker text-500 mr-2 text-xl"></i>
            <span class="text-xl font-medium text-900">Card Title</span>
        </div>
        <div>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;

    block4 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
        <div class="flex align-items-start">
            <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="40" class="mr-3">
            <div>
                <div class="text-xl font-medium text-900 mb-2">Card Title</div>
                <div class="font-medium text-500 mb-3 text-sm">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
            </div>
        </div>
        <div class="flex gap-3">
            <button pButton pRipple icon="pi pi-heart" class="p-button-rounded p-button-outlined"></button>
            <button pButton pRipple icon="pi pi-share-alt" class="p-button-rounded p-button-outlined"></button>
        </div>
    </div>

    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;

    block5 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex align-items-center justify-content-between">
        <span class="text-xl font-medium text-900">Title</span>
        <button pButton pRipple label="New" icon="pi pi-plus"></button>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;

    block6 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
        <span class="text-xl font-medium text-900">Title</span>
        <div class="flex align-items-center justify-content-between mt-3 md:mt-0">
            <div class="mr-3 flex align-items-center">
                <p-avatarGroup styleClass="mr-1">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></p-avatar>
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></p-avatar>
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-m-1.png" shape="circle"></p-avatar>
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-m-2.png" shape="circle"></p-avatar>
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-3.png" shape="circle"></p-avatar>
                </p-avatarGroup>
                <span class="text-600">+2</span>
            </div>
            <button pButton pRipple label="View All" icon="pi pi-search" class="p-button-outlined"></button>
        </div>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;

    block7 = `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex flex-column align-items-start md:flex-row md:align-items-center md:justify-content-between">
        <div class="mb-3 md:mb-0">
            <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
            <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <button pButton pRipple label="New" icon="pi pi-plus"></button>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
        {
            label: 'Options',
            items: [
                {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
                {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
            ]
        }];
    }
}
