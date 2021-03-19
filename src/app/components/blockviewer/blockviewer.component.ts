import { Component, Input } from '@angular/core';

@Component({
    selector: 'block-viewer',
    template: `
        <div class="block-section">
            <span class="block-title">{{title}}</span>
            <div class="block-content">
                <ng-content></ng-content>   
            </div>
        </div>
    `
})
export class BlockViewer {
    
    @Input() title: string;

}