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
        this.messageService.add({
            key: 'block1',
            severity: 'inxfo',
            summary: 'Message Title',
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.',
            sticky: true
        });
    }

    notify2() {
        this.messageService.add({
            key: 'block2',
            severity: 'info',
            summary: 'Message Title',
            detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.'
        });
    }

}
