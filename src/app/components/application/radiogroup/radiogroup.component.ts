import { Component } from '@angular/core';

@Component({
    templateUrl: './radiogroup.component.html'
})
export class RadioGroupComponent {

    block1 = `
<div class="w-full">
    <div class="text-900 text-xl mb-3 text-left font-medium">Choose your favorite animal</div>
    <div class="border-1 p-4 mb-3 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer" (click)="animal=0"
        [ngClass]="{'surface-card surface-border': animal !== 0, 'bg-primary border-primary': animal === 0}">
        <div class="flex align-items-start mr-0 md:mr-8">
            <img src="assets/images/blocks/animals/a1.jpg" class="mr-3" style="width:50px" />
            <div>
                <div class="font-medium mb-2" [ngClass]="{'text-900': animal !== 0, 'bg-primary': animal === 0}">Owl</div>
                <span class="p-1 border-round" [ngClass]="{'surface-100 text-600': animal !== 0, 'bg-primary-reverse': animal === 0}">Sharp Talons</span>
            </div>
        </div>
        <div class="ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center" [ngClass]="{'surface-100 text-600 surface-border': animal !== 0, 'bg-primary-reverse': animal === 0}">
            <i class="pi pi-users mr-2"></i>
            <span>702</span>
        </div>
    </div>
    <div class="border-1 p-4 mb-3 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer" (click)="animal=1"
        [ngClass]="{'surface-card surface-border': animal !== 1, 'bg-primary border-primary': animal === 1}">
        <div class="flex align-items-start mr-0 md:mr-8">
            <img src="assets/images/blocks/animals/a2.jpg" class="mr-3" style="width:50px" />
            <div>
                <div class="font-medium mb-2" [ngClass]="{'text-900': animal !== 1, 'bg-primary': animal === 1}">Fox</div>
                <span class="p-1 border-round" [ngClass]="{'surface-100 text-600': animal !== 1, 'bg-primary-reverse': animal === 1}">Upturned Snout</span>
            </div>
        </div>
        <div class="ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center" [ngClass]="{'surface-100 text-600 surface-border': animal !== 1, 'bg-primary-reverse': animal === 1}">
            <i class="pi pi-users mr-2"></i>
            <span>702</span>
        </div>
    </div>
    <div class="border-1 p-4 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer" (click)="animal=2"
        [ngClass]="{'surface-card surface-border': animal !== 2, 'bg-primary border-primary': animal === 2}">
        <div class="flex align-items-start mr-0 md:mr-8">
            <img src="assets/images/blocks/animals/a3.jpg" class="mr-3" style="width:50px" />
            <div>
                <div class="font-medium mb-2" [ngClass]="{'text-900': animal !== 2, 'bg-primary': animal === 2}">Sheep</div>
                <span class="p-1 border-round" [ngClass]="{'surface-100 text-600': animal !== 2, 'bg-primary-reverse': animal === 2}">Just Sheep</span>
            </div>
        </div>
        <div class="ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center" [ngClass]="{'surface-100 text-600 surface-border': animal !== 2, 'bg-primary-reverse': animal === 2}">
            <i class="pi pi-users mr-2"></i>
            <span>529</span>
        </div>
    </div>
</div>`;

    block2 = `
<div class="w-full">
    <div class="text-900 text-xl mb-3 text-left font-medium">Change your account tier1</div>
    <div class="surface-border border-1 p-3 border-round-top flex align-items-center cursor-pointer" [ngClass]="{'surface-card': tier1 !== 0, 'bg-primary': tier1 === 0}" (click)="tier1 = 0">
        <p-radioButton name="tier1" [value]="0" [(ngModel)]="tier1" styleClass="mr-3"></p-radioButton>
        <div class="mr-4 md:mr-8">
            <div class="font-medium mb-1" [ngClass]="{'text-900': tier1 !== 0, 'bg-primary': tier1 === 0}">Basic</div>
            <span class="text-sm" [ngClass]="{'text-600': tier1 !== 0, 'bg-primary': tier1 === 0}">Quam nulla porttitor massa.</span>
        </div>
        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap" [ngClass]="{'surface-50 text-600 surface-border': tier1 !== 0, 'bg-primary-reverse': tier1 === 0}">
            <i class="pi pi-star"></i>
        </div>
    </div>
    <div class="surface-border border-1 border-top-none p-3 flex align-items-center cursor-pointer" [ngClass]="{'surface-card': tier1 !== 1, 'bg-primary': tier1 === 1}" (click)="tier1 = 1">
        <p-radioButton name="tier1" [value]="1" [(ngModel)]="tier1" styleClass="mr-3"></p-radioButton>
        <div class="mr-4 md:mr-8">
            <div class="font-medium mb-1" [ngClass]="{'text-900': tier1 !== 1, 'bg-primary': tier1 === 1}">Premium</div>
            <span class="text-sm" [ngClass]="{'text-600': tier1 !== 1, 'bg-primary': tier1 === 1}">Quam nulla porttitor massa.</span>
        </div>
        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap" [ngClass]="{'surface-50 text-600 surface-border': tier1 !== 1, 'bg-primary-reverse': tier1 === 1}">
            <i class="pi pi-star mr-2"></i>
            <i class="pi pi-star"></i>
        </div>
    </div>
    <div class="surface-border border-1 border-top-none p-3 border-round-bottom flex align-items-center cursor-pointer" [ngClass]="{'surface-card': tier1 !== 2, 'bg-primary': tier1 === 2}" (click)="tier1 = 2">
        <p-radioButton name="tier1" [value]="2" [(ngModel)]="tier1" styleClass="mr-3"></p-radioButton>
        <div class="mr-4 md:mr-8">
            <div class="font-medium mb-1" [ngClass]="{'text-900': tier1 !== 2, 'bg-primary': tier1 === 2}">Enterprise</div>
            <span class="text-sm" [ngClass]="{'text-600': tier1 !== 2, 'bg-primary': tier1 === 2}">Quam nulla porttitor massa.</span>
        </div>
        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap" [ngClass]="{'surface-50 text-600 surface-border': tier1 !== 2, 'bg-primary-reverse': tier1 === 2}">
            <i class="pi pi-star mr-2"></i>
            <i class="pi pi-star mr-2"></i>
            <i class="pi pi-star"></i>
        </div>
    </div>
</div>`;

    block3 = `
<div class="w-full">
    <div class="text-900 text-xl mb-3 text-left font-medium">Change your account tier</div>
    <div class="surface-border border-1 p-3 border-round-top flex align-items-center cursor-pointer" [ngClass]="{'surface-card': tier2 !== 0, 'bg-primary': tier2 === 0}" (click)="tier2 = 0">
        <div class="w-4 flex align-items-center pr-4">
            <p-radioButton name="tier2" [value]="0" [(ngModel)]="tier2" styleClass="mr-2"></p-radioButton>
            <div class="font-medium" [ngClass]="{'text-900': tier2 !== 0, 'bg-primary': tier2 === 0}">Basic</div>
        </div>
        <div class="w-4 text-center">
            <span class="bg-blue-100 text-blue-700 font-medium px-2 py-1" style="border-radius:12px">Save 20%</span>
        </div>
        <div class="w-4 text-right">
            <span class="font-medium" [ngClass]="{'text-900': tier2 !== 0, 'bg-primary': tier2 === 0}">19$</span>
            <span [ngClass]="{'text-600': tier2 !== 0, 'bg-primary': tier2 === 0}"> / Month</span>
        </div>
    </div>
    <div class="surface-border border-1 p-3 border-top-none flex align-items-center cursor-pointer" [ngClass]="{'surface-card': tier2 !== 1, 'bg-primary': tier2 === 1}" (click)="tier2 = 1">
        <div class="w-4 flex align-items-center pr-4">
            <p-radioButton name="tier2" [value]="1" [(ngModel)]="tier2" styleClass="mr-2"></p-radioButton>
            <div class="font-medium" [ngClass]="{'text-900': tier2 !== 1, 'bg-primary': tier2 === 1}">Premium</div>
        </div>
        <div class="w-4 text-center">
            <span class="bg-blue-100 text-blue-700 font-medium px-2 py-1" style="border-radius:12px">Save 25%</span>
        </div>
        <div class="w-4 text-right">
            <span class="font-medium" [ngClass]="{'text-900': tier2 !== 1, 'bg-primary': tier2 === 1}">29$</span>
            <span [ngClass]="{'text-600': tier2 !== 1, 'bg-primary': tier2 === 1}"> / Month</span>
        </div>
    </div>
    <div class="surface-border border-1 border-top-none p-3 border-round-bottom flex align-items-center cursor-pointer" [ngClass]="{'surface-card': tier2 !== 2, 'bg-primary': tier2 === 2}" (click)="tier2 = 2">
        <div class="w-4 flex align-items-center pr-4">
            <p-radioButton name="tier2" [value]="2" [(ngModel)]="tier2" styleClass="mr-2"></p-radioButton>
            <div class="font-medium" [ngClass]="{'text-900': tier2 !== 2, 'bg-primary': tier2 === 2}">Enterprise</div>
        </div>
        <div class="w-4 text-center">
            <span class="bg-blue-100 text-blue-700 font-medium px-2 py-1" style="border-radius:12px">Save 50%</span>
        </div>
        <div class="w-4 text-right">
            <span class="font-medium" [ngClass]="{'text-900': tier2 !== 2, 'bg-primary': tier2 === 2}">39$</span>
            <span [ngClass]="{'text-600': tier2 !== 2, 'bg-primary': tier2 === 2}"> / Month</span>
        </div>
    </div>
</div>`;

    block4 = `
<div class="text-center">
    <div class="text-900 font-medium text-2xl mb-3">Choose your Adventure</div>
    <div class="text-700 line-height-3 mb-4">Volutpat est velit egestas dui id ornare arcu odio. Amet dictum sit amet justo.</div>
    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="shadow-2 border-round border-2 cursor-pointer surface-card " [ngClass]="{'border-transparent': hotel !== 0, 'border-blue-500': hotel === 0}" (click)="hotel = 0">
                <img src="assets/images/blocks/hotels/h1.jpg" class="w-full" />
                <div class="p-3">
                    <div class="text-900 text-xl mb-3 font-medium">Tranquility Point</div>
                    <p class="m-0 mb-3">Praesent semper feugiat nibh sed pulvinar.</p>
                    <div class="text-yellow-500 mb-4">
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star-o mr-1"></i>
                        <i class="pi pi-star-o"></i>
                    </div>
                    <p-radioButton name="hotel" [value]="0" [(ngModel)]="hotel"></p-radioButton>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4">
            <div class="shadow-2 border-round border-2 cursor-pointer surface-card " [ngClass]="{'border-transparent': hotel !== 1, 'border-blue-500': hotel === 1}" (click)="hotel = 1">
                <img src="assets/images/blocks/hotels/h2.jpg" class="w-full" />
                <div class="p-3">
                    <div class="text-900 text-xl mb-3 font-medium">Paradise Hotel</div>
                    <p class="m-0 mb-3">Volutpat est velit egestas dui id ornare arcu odio.</p>
                    <div class="text-yellow-500 mb-4">
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star-o mr-1"></i>
                        <i class="pi pi-star-o"></i>
                    </div>
                    <p-radioButton name="hotel" [value]="1" [(ngModel)]="hotel"></p-radioButton>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4">
            <div class="shadow-2 border-round border-2 cursor-pointer surface-card " [ngClass]="{'border-transparent': hotel !== 2, 'border-blue-500': hotel === 2}" (click)="hotel = 2">
                <img src="assets/images/blocks/hotels/h3.jpg" class="w-full" />
                <div class="p-3">
                    <div class="text-900 text-xl mb-3 font-medium">Horizon Hill</div>
                    <p class="m-0 mb-3">Ultrices in iaculis nunc sed augue lacus.</p>
                    <div class="text-yellow-500 mb-4">
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star mr-1"></i>
                        <i class="pi pi-star-o mr-1"></i>
                        <i class="pi pi-star-o"></i>
                    </div>
                    <p-radioButton name="hotel" [value]="2" [(ngModel)]="hotel"></p-radioButton>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 text-xl font-medium mb-3 text-center">Subscription Options</div>
    <p class="text-700 mt-0 mb-4 text-center">Volutpat est velit egestas dui id ornare arcu odio. Amet dictum sit amet justo.</p>
    <div class="surface-card shadow-2 border-round p-5">
        <div class="grid">
            <div class="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center sm:border-right-1 surface-border">
                <div class="flex align-items-center mr-3">
                    <p-radioButton name="subscription" [value]="0" [(ngModel)]="subscription"></p-radioButton>
                </div>
                <div>
                    <span class="text-900 text-2xl font-medium">10 Days</span>
                    <p class="text-xl text-500 font-medium mt-2 mb-0">In tellus integer</p>
                </div>
            </div>
            <div class="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center lg:border-right-1 surface-border">
                <div class="flex align-items-center mr-3">
                    <p-radioButton name="subscription" [value]="1" [(ngModel)]="subscription"></p-radioButton>
                </div>
                <div>
                    <span class="text-900 text-2xl font-medium">30 Days</span>
                    <p class="text-xl text-500 font-medium mt-2 mb-0">Risus pretium</p>
                </div>
            </div>
            <div class="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center sm:border-right-1 surface-border">
                <div class="flex align-items-center mr-3">
                    <p-radioButton name="subscription" [value]="2" [(ngModel)]="subscription"></p-radioButton>
                </div>
                <div>
                    <span class="text-900 text-2xl font-medium">90 Days</span>
                    <p class="text-xl text-500 font-medium mt-2 mb-0">Pharetra pharetra</p>
                </div>
            </div>
            <div class="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center">
                <div class="flex align-items-center mr-3">
                    <p-radioButton name="subscription" [value]="3" [(ngModel)]="subscription"></p-radioButton>
                </div>
                <div>
                    <span class="text-900 text-2xl font-medium">360 Days</span>
                    <p class="text-xl text-500 font-medium mt-2 mb-0">Aliquet lectus</p>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block6 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 text-xl font-medium mb-3 text-center">Payment Methods</div>
    <p class="text-700 mt-0 mb-4 text-center">In tellus integer feugiat scelerisque varius morbi.</p>
    <div class="grid">
        <div class="col-12 lg:col-6 p-3">
            <div class="shadow-2 surface-card p-4 border-2 border-transparent" style="border-radius: 10px" [ngClass]="{'border-blue-500': payment === 0}">
                <div class="flex align-items-center mb-4">
                    <div class="mr-3">
                        <span class="inline-flex justify-content-center align-items-center bg-indigo-100" style="border-radius: 4px; width:45px; height: 45px">
                            <i class="pi pi-credit-card text-2xl text-indigo-600"></i>
                        </span>
                    </div>
                    <div>
                        <span class="text-900 text-xl mb-2 font-medium">Credit Card</span>
                        <p class="m-0 text-600 font-medium text-sm">Magna fermentum iaculis</p>
                    </div>
                    <p-radioButton name="payment" [value]="0" [(ngModel)]="payment" class="ml-auto"></p-radioButton>
                </div>
                <p class="text-600 m-0 line-height-3">Nunc consequat interdum varius sit. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.</p>
            </div>
        </div>
        <div class="col-12 lg:col-6 p-3">
            <div class="shadow-2 surface-card p-4 border-2 border-transparent" style="border-radius: 10px" [ngClass]="{'border-blue-500': payment === 1}">
                <div class="flex align-items-center mb-4">
                    <div class="mr-3">
                        <span class="inline-flex justify-content-center align-items-center bg-blue-100" style="border-radius: 4px; width:45px; height: 45px">
                            <img src="assets/images/blocks/logos/paypal.svg" style="height:1.5rem" />
                        </span>
                    </div>
                    <div>
                        <span class="text-900 text-xl mb-2 font-medium">PayPal</span>
                        <p class="m-0 text-600 font-medium text-sm">Nibh sit amet</p>
                    </div>
                    <p-radioButton name="payment" [value]="1" [(ngModel)]="payment" class="ml-auto"></p-radioButton>
                </div>
                <p class="text-600 m-0 line-height-3">Est pellentesque elit ullamcorper dignissim. Tortor condimentum lacinia quis vel eros. Pharetra magna ac placerat vestibulum lectus mauris ultrices.</p>
            </div>
        </div>
        <div class="col-12 lg:col-6 p-3">
            <div class="shadow-2 surface-card p-4 border-2 border-transparent" style="border-radius: 10px" [ngClass]="{'border-blue-500': payment === 2}">
                <div class="flex align-items-center mb-4">
                    <div class="mr-3">
                        <span class="inline-flex justify-content-center align-items-center bg-green-100" style="border-radius: 4px; width:45px; height: 45px">
                            <i class="pi pi-credit-card text-2xl text-green-600"></i>
                        </span>
                    </div>
                    <div>
                        <span class="text-900 text-xl mb-2 font-medium">Wire Transfer</span>
                        <p class="m-0 text-600 font-medium text-sm">Ornare lectus sit</p>
                    </div>
                    <p-radioButton name="payment" [value]="2" [(ngModel)]="payment" class="ml-auto"></p-radioButton>
                </div>
                <p class="text-600 m-0 line-height-3">Eget nunc lobortis mattis aliquam. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
        </div>
        <div class="col-12 lg:col-6 p-3">
            <div class="shadow-2 surface-card p-4 border-2 border-transparent" style="border-radius: 10px" [ngClass]="{'border-blue-500': payment === 3}">
                <div class="flex align-items-center mb-4">
                    <div class="mr-3">
                        <span class="inline-flex justify-content-center align-items-center bg-orange-100" style="border-radius: 4px; width:45px; height: 45px">
                            <img src="assets/images/blocks/logos/bitcoin.svg" style="height:1.5rem" />
                        </span>
                    </div>
                    <div>
                        <span class="text-900 text-xl mb-2 font-medium">BitCoin</span>
                        <p class="m-0 text-600 font-medium text-sm">Donec adipiscing tristique</p>
                    </div>
                    <p-radioButton name="payment" [value]="3" [(ngModel)]="payment" class="ml-auto"></p-radioButton>
                </div>
                <p class="text-600 m-0 line-height-3">Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.</p>
            </div>
        </div>
    </div>
</div>`;

    animal: number = 1;

    tier1: number = 1;

    tier2: number = 1;

    hotel: number = 1;

    subscription: number = 1;

    payment: number = 1;

}
