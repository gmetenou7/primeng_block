import { CommonModule} from '@angular/common';
import { NgModule, Directive, ElementRef, Input, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';
import { DomHandler } from 'primeng/dom';

@Directive({
    selector: '[pToggler]'
})
export class Toggler implements AfterViewInit, OnDestroy {

    constructor(public el: ElementRef, public renderer: Renderer2) {}

    @Input('pToggler') selector: string;

    @Input('pTogglerClass') styleClass: string = 'block';

    eventListener: Function;

    documentListener: Function;

    target: HTMLElement;

    ngAfterViewInit() {
        this.eventListener = this.renderer.listen(this.el.nativeElement, 'click', event => {
            this.target = this.resolveTarget();
            if (DomHandler.hasClass(this.target, this.styleClass)) {
                DomHandler.removeClass(this.target, this.styleClass);
                this.unbindDocumentListener();
            }
            else {
                DomHandler.addClass(this.target, this.styleClass);
                this.bindDocumentListener();
            }
        });
    }

    resolveTarget() {
        if (this.target) {
            return this.target;
        }

        switch (this.selector) {
            case '@next':
                return this.el.nativeElement.nextElementSibling;

            case '@prev':
                return this.el.nativeElement.previousElementSibling;

            case '@parent':
                return this.el.nativeElement.parentElement;

            case '@grandparent':
                return this.el.nativeElement.parentElement.parentElement;

            default:
                return document.querySelector(this.selector);
        }
    }

    bindDocumentListener() {
        if (!this.documentListener) {
            this.documentListener = this.renderer.listen(this.el.nativeElement.ownerDocument, 'click', event => {
                if (!this.el.nativeElement.isSameNode(event.target) && !this.el.nativeElement.contains(event.target) && !this.target.contains(event.target)) {
                    DomHandler.removeClass(this.target, this.styleClass);
                    this.unbindDocumentListener();
                }
            });
        }
    }

    unbindDocumentListener() {
        if (this.documentListener) {
            this.documentListener();
            this.documentListener = null;
        }
    }

    ngOnDestroy() {
        this.target = null;
        if (this.eventListener) {
            this.eventListener();
        }
        this.unbindDocumentListener();
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [Toggler],
    declarations: [Toggler]
})
export class TogglerModule { }
