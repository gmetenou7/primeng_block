import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './notification.component.html'
})
export class NotificationComponent  {

    constructor(private messageService: MessageService) {}

    block1 = ``;

    block2 = ``;

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
