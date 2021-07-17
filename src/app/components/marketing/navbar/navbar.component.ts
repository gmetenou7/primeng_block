import { Component } from '@angular/core';

@Component({
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {

    block1: string = `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50">
    <a class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
        <section></section>
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <button pButton pRipple label="Login" class="p-button-text font-bold"></button>
            <button pButton pRipple label="Register" class="ml-3 p-button-outlined font-bold"></button>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mr-0 lg:mr-5">
    <a class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150" 
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" [hideOnOutsideClick]="true">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <div class="grid border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden my-2 lg:my-0 w-full lg:w-30rem">
                    <div class="col-12 lg:col-6">
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                <i class="pi pi-list text-2xl"></i>
                            </div>
                            <div>
                                <span>Features</span>
                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 lg:col-6">
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                <i class="pi pi-shield text-2xl"></i>
                            </div>
                            <div>
                                <span>Solutions</span>
                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 lg:col-6">
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                <i class="pi pi-users text-2xl"></i>
                            </div>
                            <div>
                                <span>Customers</span>
                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 lg:col-6">
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                <i class="pi pi-question-circle text-2xl"></i>
                            </div>
                            <div>

                                <span>Faq</span>
                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 lg:col-6">
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                <i class="pi pi-file text-2xl"></i>
                            </div>
                            <div>
                                <span>Case Studies</span>
                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 lg:col-6">
                        <a class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                <i class="pi pi-search text-2xl"></i>
                            </div>
                            <div>
                                <span>Library</span>
                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li>
                <a class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <button pButton pRipple label="Login" class="p-button-text font-bold"></button>
            <button pButton pRipple label="Register" class="ml-3 font-bold"></button>
        </div>
    </div>
</div>`;
    
}