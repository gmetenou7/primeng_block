import { Component } from '@angular/core';

@Component({
    templateUrl: './gridlist.component.html'
})
export class GridListComponent {

    block1 = `
<div class="grid grid-nogutter">
    <div class="col-12 md:col-6 xl:col-4 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/1.png" style="width: 70px;height: 70px" class="mr-3" />
                <div class="flex flex-column justify-content-between">
                    <span class="text-lg text-900 font-medium">Mohair Fox Burger</span>
                    <span class="text-600 font-medium">Duis Aute Irure</span>
                    <div>
                        <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                        <span class="text-sm text-900">9.66</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-content-between pt-3">
                <button pButton pRipple label="Favorite" icon="pi pi-star" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                <button pButton pRipple label="Order" icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-4 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/2.png" style="width: 70px;height: 70px" class="mr-3" />
                <div class="flex flex-column justify-content-between">
                    <span class="text-lg text-900 font-medium">Loust Hunter</span>
                    <span class="text-600 font-medium">Excepteur Sint</span>
                    <div>
                        <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                        <span class="text-sm text-900">8.41</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-content-between pt-3">
                <button pButton pRipple label="Favorite" icon="pi pi-star" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                <button pButton pRipple label="Order" icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-4 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/3.png" style="width: 70px;height: 70px" class="mr-3" />
                <div class="flex flex-column justify-content-between">
                    <span class="text-lg text-900 font-medium">Cheft The Thief</span>
                    <span class="text-600 font-medium">Culpa Qui Officia</span>
                    <div>
                        <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                        <span class="text-sm text-900">12.55</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-content-between pt-3">
                <button pButton pRipple label="Favorite" icon="pi pi-star" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                <button pButton pRipple label="Order" icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-4 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/4.png" style="width: 70px;height: 70px" class="mr-3" />
                <div class="flex flex-column justify-content-between">
                    <span class="text-lg text-900 font-medium">Columbus Burger</span>
                    <span class="text-600 font-medium">Ad Minim Veniam</span>
                    <div>
                        <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                        <span class="text-sm text-900">8.71</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-content-between pt-3">
                <button pButton pRipple label="Favorite" icon="pi pi-star" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                <button pButton pRipple label="Order" icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-4 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/5.png" style="width: 70px;height: 70px" class="mr-3" />
                <div class="flex flex-column justify-content-between">
                    <span class="text-lg text-900 font-medium">Sittig Bull</span>
                    <span class="text-600 font-medium">Magna Aliqua</span>
                    <div>
                        <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                        <span class="text-sm text-900">13.45</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-content-between pt-3">
                <button pButton pRipple label="Favorite" icon="pi pi-star" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                <button pButton pRipple label="Order" icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-4 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/6.png" style="width: 70px;height: 70px" class="mr-3" />
                <div class="flex flex-column justify-content-between">
                    <span class="text-lg text-900 font-medium">Vespucci Burger</span>
                    <span class="text-600 font-medium">Commodo Consequat</span>
                    <div>
                        <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                        <span class="text-sm text-900">6.75</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-content-between pt-3">
                <button pButton pRipple label="Favorite" icon="pi pi-star" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                <button pButton pRipple label="Order" icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="grid grid-nogutter">
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/1.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Mohair Fox Burger</span>
                <span class="text-600 font-medium mb-2">Duis Aute Irure</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">9.66</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/2.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Lousy Hunter</span>
                <span class="text-600 font-medium mb-2">Excepteur Sint</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">8.41</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/3.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Chef The Thief</span>
                <span class="text-600 font-medium mb-2">Culpa Qui Officia</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">12.55</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/4.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Columbus Burger</span>
                <span class="text-600 font-medium mb-2">Ad Minim Veniam</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">8.71</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/5.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Sitting Bull</span>
                <span class="text-600 font-medium mb-2">Magna Aliqua</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">13.45</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/6.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Vespucci Burger</span>
                <span class="text-600 font-medium mb-2">Commodo Consequat</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">6.75</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/7.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Navajo Burger</span>
                <span class="text-600 font-medium mb-2">Fugiat Nulla</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">9.60</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 xl:col-3 p-3">
        <div class="surface-card shadow-2 border-rounded p-3">
            <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="assets/images/blocks/burgers/8.png" style="width: 70px;height: 70px" class="mb-3" />
                <span class="text-lg text-900 font-medium mb-2">Pawnee Burger</span>
                <span class="text-600 font-medium mb-2">Deserunt Mollit</span>
                <div>
                    <span class="inline-block text-sm text-pink-500 mr-1">$</span>
                    <span class="text-sm text-900">11.05</span>
                </div>
            </div>
            <div class="flex pt-3">
                <div class="w-6 pr-2">
                    <button pButton pRipple icon="pi pi-star" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
                <div class="w-6 pl-2">
                    <button pButton pRipple icon="pi pi-shopping-cart" class="p-button-outlined p-button-secondary w-full"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

}
