import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

enum BlockView {
    PREVIEW,
    CODE
}

@Component({
    selector: 'block-viewer',
    template: `
        <div class="block-section">
            <div class="block-header">
                <span class="block-title">{{title}}</span>
                <div class="block-actions">
                    <a tabindex="0" [ngClass]="{'block-action-active': blockView == BlockView.PREVIEW}" (click)="activateView($event, BlockView.PREVIEW)">Preview</a>
                    <a tabindex="0" [ngClass]="{'block-action-active': blockView == BlockView.CODE}" (click)="activateView($event, BlockView.CODE)">Code</a>
                    <a tabindex="0" class="block-action-copy" (click)="copyCode($event)"><i class="pi pi-copy"></i></a>
                </div>
            </div>
            <div class="block-content">
                <div class="block-preview" [ngClass]="{'block-content-active': blockView == BlockView.PREVIEW}">
                    <ng-content></ng-content>   
                </div>
                <div class="block-code" [ngClass]="{'block-content-active': blockView == BlockView.CODE}">
<pre class="language-markup"><code #codeblock>{{code}}

</code></pre>
                </div>
            </div>
        </div>
    `
})
export class BlockViewer implements AfterViewInit {
    
    @Input() title: string;

    @Input() code: string;

    @ViewChild('codeblock') codeViewChild: ElementRef;

    BlockView = BlockView;

    blockView: BlockView = BlockView.PREVIEW;

    activateView(event: Event, blockView: BlockView) {
        this.blockView = blockView;
        event.preventDefault();
    }

    async copyCode(event: Event) {
        await navigator.clipboard.writeText(this.code);
        event.preventDefault();
    }

    ngAfterViewInit() {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.codeViewChild.nativeElement);
        }
    }
}