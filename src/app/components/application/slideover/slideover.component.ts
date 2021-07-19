import { Component } from '@angular/core';

@Component({
    templateUrl: './slideover.component.html'
})
export class SlideOverComponent {

    block1 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-right" pStyleClass="@next" toggleClass="-translate-x-100" [hideOnOutsideClick]="true"></button>
<div class="surface-overlay flex flex-column p-4 h-full fixed top-0 left-0 shadow-2 
    -translate-x-100 transition-transform transition-duration-150 transition-ease-in-out" style="width:280px">
    <div class="flex align-items-center justify-content-between mb-4">
        <span class="text-900 text-xl font-medium">Title Placeholder</span>
        <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="@grandparent" toggleClass="-translate-x-100"></button>
    </div>
    <div class="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
</div>`;

    block2 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left" pStyleClass="@next" toggleClass="translate-x-100" [hideOnOutsideClick]="true"></button>
<div class="surface-overlay flex flex-column p-4 h-full fixed top-0 right-0 shadow-2 
    translate-x-100 transition-transform transition-duration-150 transition-ease-in-out" style="width:280px">
    <div class="flex align-items-center justify-content-between mb-4">
        <span class="text-900 text-xl font-medium">Title Placeholder</span>
        <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="@grandparent" toggleClass="translate-x-100"></button>
    </div>
    <div class="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
</div>`;

    block3 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left" pStyleClass="@next" toggleClass="translate-x-100" [hideOnOutsideClick]="true"></button>
<div class="surface-overlay flex flex-column p-4 h-full fixed top-0 right-0 shadow-2 
    translate-x-100 transition-transform transition-duration-150 transition-ease-in-out w-full lg:w-6">
    <div class="flex align-items-center justify-content-between mb-4">
        <span class="text-900 text-xl font-medium">Title Placeholder</span>
        <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="@grandparent" toggleClass="translate-x-100"></button>
    </div>
    <div class="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
</div>`;

    block4 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left" pStyleClass="@next" toggleClass="translate-x-100" [hideOnOutsideClick]="true"></button>
<div id="_contrastheader" class="surface-overlay flex flex-column h-full fixed top-0 right-0 shadow-2 
    translate-x-100 transition-transform transition-duration-150 transition-ease-in-out" style="width:280px">
    <div class="flex align-items-start bg-gray-800 justify-content-between p-3">
        <div>
            <div class="text-white text-xl font-medium mb-1">Title Placeholder</div>
            <p class="m-0 p-0 line-height-3 text-gray-400 text-sm">Vitae turpis massa sed tempus egestas sed sed risus.</p>
        </div>
        <div>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-warning p-button-plain" pStyleClass="#_contrastheader" toggleClass="translate-x-100"></button>
        </div>
    </div>
    <div class="m-4 border-2 border-round border-dashed surface-border flex-auto overflow-y-auto"></div>
</div>`;

}
