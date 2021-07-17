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

    clear(key: string) {
        this.messageService.clear(key);
    }

}
