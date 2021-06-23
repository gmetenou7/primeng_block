import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';

enum BlockView {
    PREVIEW,
    CODE
}

@Component({
    selector: 'block-viewer',
    template: `
        <div class="block-section">
            <div class="block-header">
                <span class="block-title">{{header}}</span>
                <div class="block-actions">
                    <a tabindex="0" [ngClass]="{'block-action-active': blockView == BlockView.PREVIEW}" (click)="activateView($event, BlockView.PREVIEW)"><span>Preview</span></a>
                    <a tabindex="0" [ngClass]="{'block-action-active': blockView == BlockView.CODE, 'block-action-disabled': codeDisabled}" (click)="activateView($event, BlockView.CODE)">
                        <i class="pi pi-lock" *ngIf="codeDisabled"></i>
                        <span>Code</span>
                    </a>
                    <a tabindex="0" class="block-action-copy" [ngClass]="{'block-action-disabled': codeDisabled}" (click)="copyCode($event)"><i class="pi pi-copy"></i></a>
                </div>
            </div>
            <div class="block-content">
                <div [class]="previewClass" [ngClass]="{'block-preview': true, 'block-content-active': blockView == BlockView.PREVIEW}" [ngStyle]="previewStyle">
                    <ng-content></ng-content>   
                </div>
                <div class="block-code" [ngClass]="{'block-content-active': blockView == BlockView.CODE}">
<pre class="language-markup" *ngIf="!codeDisabled"><code #codeblock>{{code}}

</code></pre>
                </div>
            </div>
        </div>
    `
})
export class BlockViewer implements AfterViewInit {
    
    @Input() header: string;

    @Input() code: string;

    @Input() previewClass: string;

    @Input() previewStyle: string;

    @Input() free: boolean = false;

    @ViewChild('codeblock') codeViewChild: ElementRef;

    BlockView = BlockView;

    blockView: BlockView = BlockView.PREVIEW;

    activateView(event: Event, blockView: BlockView) {
        if (!this.codeDisabled) {
            this.blockView = blockView;
        }
        
        event.preventDefault();
    }

    async copyCode(event: Event) {
        if (!this.codeDisabled) {
            await navigator.clipboard.writeText(this.code);
        }

        event.preventDefault();
    }

    ngAfterViewInit() {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.codeViewChild.nativeElement);
        }
    }

    get codeDisabled() {
        return this.free ? false : (environment ? environment.production: false);
    }
}