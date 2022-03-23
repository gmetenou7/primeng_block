import { Component } from '@angular/core';

@Component({
    selector: 'app-categoryfilter',
    templateUrl: './categoryfilter.component.html',
})
export class CategoryFilterComponent {

    brands: any[] = [
        {name: 'Alfred'},
        {name: 'Hyper'},
        {name: 'Peak'},
        {name: 'Bastion'},
    ];

    colors: any[] = [
        {name: 'Black', class:'bg-gray-500'},
        {name: 'Orange', class:'bg-orange-500'},
        {name: 'Indigo', class:'bg-indigo-500'},
        {name: 'Pink', class:'bg-pink-500'},
    ];

    prices: any[] = [
        {range: '$10 - $100'},
        {range: '$101 - $200'},
        {range: '$201 - $300'},
        {range: '$301 - $400'},
    ];

    selectedBrands: any[] = ['Alfred', 'Hyper'];

    selectedBrands2: any[] = [
      {name: 'Alfred'},
      {name: 'Hyper'}
    ];

    selectedPrice: any;
    
    selectedColors: any[] = ['Black'];

    selectedColors2: number = 1;

    selectedFilters: any[] = ['Alfred', 'Hyper', 'Black'];
    
    sizes: any[] = [
        {page: [
          {value: '28x28'},
          {value: '28x30'},
          {value: '28x32'},
          {value: '28x34'},
          {value: '29x28'},
          {value: '29x30'},
          {value: '29x32'},
          {value: '29x34'},
          {value: '30x28'},
          {value: '30x30'},
          {value: '30x32'},
          {value: '30x34'},
          {value: '31x28'},
          {value: '31x30'},
          {value: '31x32'},
          {value: '31x34'},
        ]},
        {page: [
          {value: '32x28'},
          {value: '32x30'},
          {value: '32x32'},
          {value: '32x34'},
          {value: '33x28'},
          {value: '33x30'},
          {value: '33x32'},
          {value: '33x34'},
          {value: '34x28'},
          {value: '34x30'},
          {value: '34x32'},
          {value: '35x34'},
          {value: '35x28'},
          {value: '35x30'},
          {value: '35x32'},
          {value: '35x34'},
        ]},
        {page: [
          {value: '28x28'},
          {value: '28x30'},
          {value: '28x32'},
          {value: '28x34'},
          {value: '29x28'},
          {value: '29x30'},
          {value: '29x32'},
          {value: '29x34'},
          {value: '30x28'},
          {value: '30x30'},
          {value: '30x32'},
          {value: '30x34'},
          {value: '31x28'},
          {value: '31x30'},
          {value: '31x32'},
          {value: '31x34'},
        ]},
    ];
    
    selectedSize: any[] = [];
    
    selectedSize2: string = '';
    
    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    
    rangeValues: number[] = [20,80];

    block1: string = ` 
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-bold text-3xl text-center">Category Title</div>
        <p class="text-600 font-normal text-xl text-center">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
        <div class="flex flex-wrap lg:flex-nowrap border-top-1 py-4 border-200">
            <div class="col-12 lg:col-2 mr-4 flex p-0 flex-column">
                <div class="flex flex-column p-0 -mt-2 border-bottom-1 border-gray-200">
                    <a tabindex="0" pRipple class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Denim</a>
                    <a tabindex="0" pRipple class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Sweaters</a>
                    <a tabindex="0" pRipple class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">T-Shirt</a>
                    <a tabindex="0" pRipple class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Pants & Shorts</a>
                    <a tabindex="0" pRipple class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Outwear</a>
                    <a tabindex="0" pRipple class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Shoes</a>
                    <a tabindex="0" pRipple class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Accessories</a>
                </div>
                <div class="border-bottom-1 border-gray-200 mt-3">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150"  pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">Brand (2)<i class="pi pi-chevron-down"></i></a>
                    <div class="overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <div class="mb-3">
                            <span class="p-input-icon-right w-full">
                                <i class="pi pi-search"></i>
                                <input type="text" pInputText placeholder="Search" class="w-full"/>
                            </span>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox binary="true" value="alfred" inputId="alfred"></p-checkbox>
                                <label for="alfred" class="text-900">Alfred</label>
                            </div>
                            <p-badge [value]="42" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox binary="true" value="hyper" inputId="hyper"></p-checkbox>
                                <label for="hyper" class="text-900">Hyper</label>
                            </div>
                            <p-badge [value]="18" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox binary="true" value="bastion" inputId="bastion"></p-checkbox>
                                <label for="bastion" class="text-900">Bastion</label>
                            </div>
                            <p-badge [value]="7" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <p-checkbox binary="true" value="peak" inputId="peak"></p-checkbox>
                                <label for="peak" class="text-900">Peak</label>
                            </div>
                            <p-badge [value]="36" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                        </div>
                        <a tabindex="0" class="block cursor-pointer my-3 text-primary font-medium">Show all...</a>
                    </div>
                </div>
                <div class="border-bottom-1 border-gray-200 mt-3">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150"  pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">Price Range<i class="pi pi-chevron-down"></i></a>
                    <div class="overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <p-slider [(ngModel)]="rangeValues" [range]="true" styleClass="mt-2"></p-slider>
                        <div class="flex my-4">
                            <p-inputNumber placeholder="$10" min="10" inputStyleClass="w-full mr-3"></p-inputNumber>
                            <p-inputNumber placeholder="$10000" max="10000" inputStyleClass="w-full"></p-inputNumber>
                        </div>
                    </div>
                </div>
                <div class="border-bottom-1 border-gray-200 mt-3">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150"  pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">Color ({{selectedColors.length}})<i class="pi pi-chevron-down"></i></a>
                    <div class="overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <div class="grid mb-3">
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Black') == -1 ? selectedColors.push('Black') : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Black') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Black</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Orange') == -1 ? selectedColors.push('Orange') : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Orange') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Orange</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Indigo') == -1 ? selectedColors.push('Indigo') : null">
                                    <i class="pi pi-check text-2xl text-white"*ngIf="selectedColors.indexOf('Indigo') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Indigo</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Gray') == -1 ? selectedColors.push('Gray') : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Gray') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Gray</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Cyan') == -1 ? selectedColors.push('Cyan') : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Cyan') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Cyan</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedColors.indexOf('Pink') == -1 ? selectedColors.push('Pink') : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedColors.indexOf('Pink') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Pink</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-bottom-1 border-gray-200 mt-3">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150"  pStyleClass="@next" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup">Size<i class="pi pi-chevron-down"></i></a>
                    <div class="overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <p-galleria [(value)]="sizes" [responsiveOptions]="responsiveOptions" containerClass="h-full" [numVisible]="2"
                        [showThumbnails]="false" [showIndicators]="true"> 
                            <ng-template pTemplate="item" let-item>
                                <div class="flex flex-wrap w-full h-auto overflow-hidden justify-content-center" style="column-gap: 5px; row-gap: 5px;">
                                    <div pRipple class="w-4rem h-2rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round" *ngFor="let size of item.page" (click)="selectedSize = size.value;" [ngClass]="{'bg-gray-200': size.value !== selectedSize, 'bg-blue-200': size.value === selectedSize}">{{size.value}}</div>
                                </div>                           
                            </ng-template>
                        </p-galleria>
                    </div>
                </div>
            </div>
            <div class="w-full border-2 border-dashed border-gray-200" style="min-height:25rem;"></div>
        </div>
    </div>`;
    
    block2: string = `
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-bold text-3xl">Category Title</div>
        <div class="grid grid-nogutter">
            <div class="col-12 p-0 mt-5 flex flex-column lg:flex-row align-items-center mb-4">
                <button pButton class="p-button-rounded bg-gray-900 text-white lg:mr-3 sm w-full lg:w-auto" label="Filters" icon="pi pi-chevron-up ml-3" iconPos="right" pStyleClass=".filter-container" enterClass="hidden" enterActiveClass="slidedown" leaveToClass="hidden" leaveActiveClass="slideup"></button>
                <div class="grid flex-column lg:flex-row w-full h-full">
                    <div class="col-12 lg:col lg:flex flex-wrap">
                        <p-chip *ngFor="let filter of selectedFilters" [label]="filter" [removable]="true" styleClass="mr-3 h-auto lg:h-full px-4 mt-3 lg:mt-0" removeIcon="pi pi-times" [style]="{'border-radius':'50px'}"></p-chip>
                        <a pRipple *ngIf="selectedFilters.length > 0 || selectedColors2 !== 0" tabindex="0" class="cursor-pointer text-center px-3 py-2 mt-3 md:mt-0 border-1 border-gray-200 lg:border-none block md:inline hover:bg-primary hover:border-primary transition-duration-150" style="border-radius:50px; max-width: 7rem;" (click)="selectedFilters = []; selectedColors2 = 0;">Clear All</a>
                    </div>
                </div>
            </div>
            <div class="filter-container col-12 overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                <div class="grid grid-nogutter">
                    <div class="flex-auto lg:flex-1 col mt-0 lg:mt-2 mr-0 lg:mr-4 p-4 flex-column border-1 border-gray-200 border-round">
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Brand ({{selectedBrands.length}})</a>
                        <div class="flex flex-column">
                            <div class="mb-3">
                                <span class="p-input-icon-right w-full">
                                    <i class="pi pi-search"></i>
                                    <input type="text" pInputText placeholder="Search" class="w-full"/>
                                </span>
                            </div>
                            <div class="flex w-full justify-content-between">
                                <div class="field-checkbox">
                                    <p-checkbox value="Alfred" inputId="alfred" [(ngModel)]="selectedFilters"></p-checkbox>
                                    <label for="alfred" class="text-900">Alfred</label>
                                </div>
                                <p-badge [value]="42" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                            </div>
                            <div class="flex w-full justify-content-between">
                                <div class="field-checkbox">
                                    <p-checkbox value="Hyper" inputId="hyper" [(ngModel)]="selectedFilters"></p-checkbox>
                                    <label for="hyper" class="text-900">Hyper</label>
                                </div>
                                <p-badge [value]="18" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                            </div>
                            <div class="flex w-full justify-content-between">
                                <div class="field-checkbox">
                                    <p-checkbox value="Bastion" inputId="bastion" [(ngModel)]="selectedFilters"></p-checkbox>
                                    <label for="bastion" class="text-900">Bastion</label>
                                </div>
                                <p-badge [value]="7" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                            </div>
                            <div class="flex w-full justify-content-between">
                                <div class="field-checkbox">
                                    <p-checkbox value="Peak" inputId="peak" [(ngModel)]="selectedFilters"></p-checkbox>
                                    <label for="peak" class="text-900">Peak</label>
                                </div>
                                <p-badge [value]="36" styleClass="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
                            </div>
                            <a tabindex="0" class="cursor-pointer text-primary font-medium mb-3">Show all...</a>
                        </div>
                    </div>
                    <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 mr-0 lg:mr-4 p-4 flex-column border-1 border-gray-200 border-round">
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Color ({{selectedColors2}})</a>
                        <div class="grid mb-3">
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Black') == -1 ? selectedFilters.push('Black') && selectedColors2 = selectedColors2 + 1 : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Black') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Black</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Orange') == -1 ? selectedFilters.push('Orange') && selectedColors2 = selectedColors2 + 1 : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Orange') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Orange</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Indigo') == -1 ? selectedFilters.push('Indigo') && selectedColors2 = selectedColors2 + 1 : null">
                                    <i class="pi pi-check text-2xl text-white"*ngIf="selectedFilters.indexOf('Indigo') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Indigo</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Gray') == -1 ? selectedFilters.push('Gray') && selectedColors2 = selectedColors2 + 1 : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Gray') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Gray</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Cyan') == -1 ? selectedFilters.push('Cyan') && selectedColors2 = selectedColors2 + 1 : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Cyan') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Cyan</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" (click)="selectedFilters.indexOf('Pink') == -1 ? selectedFilters.push('Pink') && selectedColors2 = selectedColors2 + 1 : null">
                                    <i class="pi pi-check text-2xl text-white" *ngIf="selectedFilters.indexOf('Pink') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Pink</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 p-4 border-1 border-gray-200 border-round">
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Size</a>
                        <p-galleria [(value)]="sizes" [responsiveOptions]="responsiveOptions" containerClass="h-full" [numVisible]="2"
                        [showThumbnails]="false" [showIndicators]="true"> 
                            <ng-template pTemplate="item" let-item>
                                <div class="flex flex-wrap justify-content-between w-full h-15rem overflow-hidden" style="column-gap: 5px; row-gap: 5px;">
                                    <div pRipple class="w-5rem h-3rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round" *ngFor="let size of item.page" (click)="selectedSize2 = size.value; selectedFilters.push(size.value)" [ngClass]="{'bg-gray-200': size.value !== selectedSize2, 'bg-blue-200': size.value === selectedSize2}">{{size.value}}</div>
                                </div>                           
                            </ng-template>
                        </p-galleria>
                    </div>
                </div>
            </div>
            <p-divider class="w-full border-gray-200"></p-divider>
            <div class="col-12 border-2 border-dashed border-gray-200" style="min-height: 25rem;"></div>
        </div>
    </div>`;
    
    block3: string = `
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="flex justify-content-between">
            <div class="flex align-items-center">
                <div class="text-900 font-bold text-3xl">Category Title </div>
                <p-badge [value]="76" styleClass="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></p-badge>
            </div>
            <a pRipple tabindex="0" class="text-gray-400 cursor-pointer p-2 w-6rem flex align-items-center justify-content-between border-round border-1">Sort <i class="pi pi-sort-alt text-gray-400"></i></a>
        </div>
        <p class="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
        <p-divider styleClass="w-full border-gray-200"></p-divider>
        <div class="grid grid-nogutter align-items-center">
            <p-multiSelect [options]="brands" [(ngModel)]="selectedBrands2" defaultLabel="Brand" optionLabel="name" styleClass="w-full" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4"></p-multiSelect>
            <p-multiSelect [options]="colors" [(ngModel)]="selectedColors" defaultLabel="Color" optionLabel="name" styleClass="w-full" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4">
                <ng-template let-value pTemplate="selectedColors">
                    <div *ngFor="let color of selectedColors">
                        <div class="w-3rem h-3rem border-circle cursor-pointer border-none"></div>
                        <div>{{color.name}}</div>
                    </div>
                    <div *ngIf="!selectedColors || selectedColors.length === 0">Color</div>
                </ng-template>
                <ng-template let-color pTemplate="item">
                    <div class="flex align-items-center">
                        <div class="w-2rem h-2rem border-circle {{color.class}} cursor-pointer border-none"></div>
                        <div class="text-900 ml-2">{{color.name}}</div>
                    </div>
                </ng-template>
            </p-multiSelect>         
            <p-multiSelect [options]="prices" [(ngModel)]="selectedPrice" defaultLabel="Price" optionLabel="range" styleClass="w-full" class="flex-auto lg:flex-1 mb-3 lg:mt-0 lg:col w-full mr-0 lg:mr-4"></p-multiSelect>
            <button pButton pRipple label="Sustainable" icon="pi pi-check" iconPos="left" class="p-button-success mb-3 lg:mt-0 mr-4 flex-shrink-0"></button>
            <button pButton pRipple label="Sale" icon="pi pi-times" iconPos="left" class="p-button-outlined mb-3 lg:mt-0 mr-4 flex-shrink-0"></button>
            <a pRipple tabindex="0" class="cursor-pointer flex align-items-center mb-3 lg:mt-0">Clear All</a>
            <div class="col-12 border-2 border-dashed border-gray-200 h-30rem mt-2"></div>
        </div>
    </div>`;
}
