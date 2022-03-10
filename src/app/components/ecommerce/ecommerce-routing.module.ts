import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: EcommerceComponent},
            {path: 'productoverview', loadChildren: () => import('./productoverview/productoverview.module').then(m => m.ProductOverviewModule), data: {name: 'Product Overview'}},
            {path: 'productlist', loadChildren: () => import('./productlist/productlist.module').then(m => m.ProductListModule), data: {name: 'Product List'}},
            {path: 'shoppingcart', loadChildren: () => import('./shoppingcart/shoppingcart.module').then(m => m.ShoppingCartModule), data: {name: 'Shopping Cart'}}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class EcommerceRoutingModule {}
