import { Component } from '@angular/core';

@Component({
    selector: 'app-checkoutpage',
    templateUrl: './checkoutpage.component.html',
})
export class CheckoutPageComponent {
    selectedValue: string = '';

    selectedValue2: string = '';

    date1: any;

    quantities1: number[] = [1, 1, 1];

    quantities2: number[] = [1, 1];

    value3: string;

    value4: string;

    checked: boolean = true;
    
    cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    
    selectedCity: string;
    
    selectedAddress: string = 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands';

    selectedCard: string = '';

    card1: string = '**** **** **** 1234';

    card2: string = '**** **** **** 1235';

    address1: string = 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands';
    
    address2: string = 'Jacob Obrechtstraat 6, 1071 KC Amsterdam The Netherlands';

    selectedDelivery: string = 'UPS';

    selectedPayment: string = 'Credit Card'

    block1: string = ``;
}
