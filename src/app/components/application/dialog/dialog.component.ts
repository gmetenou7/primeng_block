import { Component } from '@angular/core';

@Component({
    templateUrl: './dialog.component.html'
})
export class DialogComponent {

    visible1: boolean = false;

    visible2: boolean = false;

    visible3: boolean = false;

    visible4: boolean = false;

    selectedMember: any = {name: 'Robert Fox', avatar: 'avatar-m-13' };

    members = [
        {name: 'Robert Fox', avatar: 'avatar-m-11' },
        {name: 'John Walter', avatar: 'avatar-m-12' },
        {name: 'Jane Doe', avatar: 'avatar-f-12' }
    ];

    block1 = `
<button pButton pRipple label="Display" (click)="visible1 = true"></button>

<p-dialog [(visible)]="visible1" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw'}">
    <ng-template pTemplate="header">
        <div class="flex align-items-center">
            <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style="width:32px;height:32px">
                <i class="pi pi-info text-lg"></i>
            </span>
            <span class="font-medium text-2xl text-900">Modal Title Placeholder</span>
        </div>
    </ng-template>
    <p class="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. 
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
    <ng-template pTemplate="footer">
        <div class=" border-top-1 surface-border pt-3">
            <button pButton pRipple icon="pi pi-times" (click)="visible1 = false" label="Cancel" class="p-button-text"></button>
            <button pButton pRipple icon="pi pi-check" (click)="visible1 = false" label="Save"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block2 = `
<button pButton pRipple label="Display" (click)="visible2 = true"></button>

<p-dialog [(visible)]="visible2" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw'}" [closable]="false" [showHeader]="false">
    <div class="flex flex-column align-items-center my-4">
        <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3" style="width:64px;height:64px">
            <i class="pi pi-check text-5xl"></i>
        </span>
        <div class="font-medium text-2xl text-900">Modal Title Placeholder</div>
    </div>
    <p class="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. 
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
    <ng-template pTemplate="footer">
        <div class=" border-top-1 surface-border pt-3 flex">
            <button pButton pRipple icon="pi pi-times" (click)="visible2 = false" label="Cancel" class="p-button-outlined w-6 mr-2"></button>
            <button pButton pRipple icon="pi pi-check" (click)="visible2 = false" label="Save" class="w-6 ml-2"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block3 = `
<button pButton pRipple label="Display" (click)="visible3 = true"></button>

<p-dialog [(visible)]="visible3" appendTo="body" [modal]="true" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw'}" header="Title Placeholder"
    [draggable]="false" [resizable]="false">
    <div class="flex flex-wrap border-top-1 surface-border pt-4">
        <div class="bg-blue-50 flex align-items-center justify-content-center py-3 px-0 w-full md:w-4 border-round">
            <img src="assets/images/blocks/illustration/security.svg" alt="Image" class="w-9">
        </div>
        <p class="text-700 line-height-3 m-0 p-5 w-full md:w-8">
            Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
        </p>
    </div>
    <ng-template pTemplate="footer">
        <div class="border-top-1 surface-border pt-3">
            <button pButton pRipple icon="pi pi-times" (click)="visible3 = false" label="Cancel" class="p-button-text"></button>
            <button pButton pRipple icon="pi pi-check" (click)="visible3 = false" label="Save"></button>
        </div>
    </ng-template>
</p-dialog>`;

    block4: string = `
<p-dialog [(visible)]="visible4" [modal]="false" [closable]="false" [showHeader]="false" [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '40vw', height: '22rem'}">
    <section class="flex flex-column w-full mt-4">
        <div class="flex w-full justify-content-between mb-4">
            <span class="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100"><i class="pi pi-users text-blue-700 text-4xl"></i></span>
            <button pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-secondary p-button-text align-self-start" (click)="visible4 = false"></button>
        </div>
        <p class="font-semibold text-xl mt-0 mb-2 text-900">Invite Team Member</p>
        <p class="font-normal text-base mt-0 mb-3 text-600">Sagittis eu volutpat odio facilisis mauris sit amet.</p>
        <p-dropdown [options]="members" [(ngModel)]="selectedMember" optionLabel="name" appendTo="body" styleClass="w-full border-round-lg">
            <ng-template pTemplate="selectedItem">
                <div class="flex align-items-center" *ngIf="selectedMember">
                    <img [src]="'assets/images/blocks/avatars/circle/' + selectedMember.avatar +'.png'" class="mr-3" style="height: 1.50rem; width: 1.50rem;"/>
                    <p class="mt-0 mb-0 font-normal text-base text-600">{{selectedMember.name}}</p>
                </div>
            </ng-template>
            <ng-template let-member pTemplate="item">
                <div class="flex align-items-center">
                    <img [src]="'assets/images/blocks/avatars/circle/' + member.avatar +'.png'" class="mr-3" style="height: 1.50rem; width: 1.50rem;"/>
                    <p class="mt-0 mb-0 font-normal text-base text-600">{{member.name}}</p>
                </div>
            </ng-template>
        </p-dropdown>
    </section>
    <ng-template pTemplate="footer">
        <div class="pt-3 flex">
            <button pButton pRipple (click)="visible4 = false" label="Cancel" class="p-button-text flex-grow-1"></button>
            <button pButton pRipple (click)="visible4 = false" label="Invite" class="flex-grow-1"></button>
        </div>
    </ng-template>
</p-dialog>`;
}
