import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './notification.component.html'
})
export class NotificationComponent  {

    constructor(private messageService: MessageService) {}

    block1 = `
<button pButton pRipple label="Display" (click)="notify1()"></button>
<p-toast key="block1" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex surface-overlay border-1 surface-border">
            <div class="flex flex-column p-3">
                <div class="flex align-items-center">
                    <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style="width:32px;height:32px">
                        <i class="pi pi-info text-lg"></i>
                    </span>
                    <span class="font-medium text-2xl text-900">{{message.summary}}</span>
                </div>
                <p class="my-3 p-0 line-height-3 text-700">{{message.detail}}</p>
            </div>
            <div class="flex flex-column border-left-1 surface-border">
                <div class="flex-auto flex align-items-center justify-content-center px-3">
                    <button pButton pRipple label="Update" class="p-button-text font-medium" (click)="clear('block1')"></button>
                </div>
                <div class="flex-auto border-top-1 surface-border flex align-items-center justify-content-center px-3">
                    <button pButton pRipple label="Later" class="p-button-text font-medium" (click)="clear(block2)"></button>
                </div>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block2 = `
<button pButton pRipple label="Display" (click)="notify2()"></button>
<p-toast key="block2" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex flex-column bg-gray-900">
            <div class="p-3">
                <div class="flex align-items-center">
                    <span class="flex align-items-center justify-content-center bg-blue-400 text-blue-900 mr-3 border-circle" style="width:32px;height:32px">
                        <i class="pi pi-info text-lg"></i>
                    </span>
                    <span class="font-medium text-2xl text-white">{{message.summary}}</span>
                </div>
                <p class="my-3 line-height-3 text-gray-300">{{message.detail}}</p>
            </div>
            <div style="height:6px" class="bg-gray-700">
                <div class="h-full bg-blue-500 animate-width animation-duration-3000"></div>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block3 = `
<button pButton pRipple label="Display" (click)="notify3()"></button>
<p-toast key="block3" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-start flex-1">
            <i class="pi pi-envelope text-blue-500 text-2xl mr-3"></i>
            <div>
                <span class="text-xl font-medium text-900">{{message.summary}}</span>
                <p class="text-700 mt-3">{{message.detail}}</p>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    block4 = `
<button pButton pRipple label="Display" (click)="notify4()"></button>
<p-toast key="block4" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
            <span class="text-xl font-medium text-900">{{message.detail}}</span>
            <a class="cursor-pointer font-medium text-blue-500">Reply</a>
        </div>
    </ng-template>
</p-toast>`;

    block5 = `
<button pButton pRipple label="Display" (click)="notify5()"></button>
<p-toast key="block5" [style]="{width: '30rem'}" [preventOpenDuplicates]="true">
    <ng-template let-message pTemplate="message">
        <div class="flex align-items-start flex-1 align-self-center mr-3">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" style="width:56px;height:56px" />
            <div class="ml-3">
                <span class="text-xl font-medium text-900">{{message.summary}}</span>
                <p class="text-600 mt-2 mb-3">{{message.detail}}</p>
                <button type="button" pButton class="p-button-sm mr-2" label="Reply" (click)="clear('block5')"></button>
                <button type="button" pButton class="p-button-sm p-button-text" label="Hide" (click)="clear('block5')"></button>
            </div>
        </div>
    </ng-template>
</p-toast>`;

    notify1() {
        this.messageService.clear('block2');
        this.messageService.add({
            key: 'block1',
            severity: 'custom-1',
            summary: 'Message Title',
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.',
            sticky: true,
            closable: false,
            styleClass: 'surface-0',
            contentStyleClass: 'p-0'
        });
    }

    notify2() {
        this.messageService.clear('block1');
        this.messageService.add({
            key: 'block2',
            severity: 'custom-2',
            summary: 'Message Title',
            closable: false,
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.',
            styleClass: 'surface-900',
            contentStyleClass: 'p-0'
        });
    }

    notify3() {
        this.messageService.clear('block3');
        this.messageService.add({
            key: 'block3',
            severity: 'custom-3',
            summary: 'Custom Icon',
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet.',
            styleClass: 'surface-0',
            contentStyleClass: 'p-3'
        });
    }

    notify4() {
        this.messageService.clear('block4');
        this.messageService.add({
            key: 'block4',
            severity: 'custom-4',
            detail: 'You received 1 new message.',
            styleClass: 'surface-0',
            contentStyleClass: 'p-3'
        });
    }

    notify5() {
        this.messageService.clear('block5');
        this.messageService.add({
            key: 'block5',
            severity: 'custom-5',
            summary: 'Arlene McCoy',
            detail: 'Tristique nulla aliquet enim tortor at auctor 😅... Urna nunc id.',
            styleClass: 'surface-overlay',
            contentStyleClass: 'p-4'
        });
    }

    clear(key: string) {
        this.messageService.clear(key);
    }

}
