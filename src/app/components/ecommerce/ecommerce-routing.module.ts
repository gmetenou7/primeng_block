import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: EcommerceComponent},
            {path: 'productoverview', loadChildren: () => import('./productoverview/productoverview.module').then(m => m.ProductOverviewModule), data: {name: 'Product Overview'}},
            {path: 'categorypreview', loadChildren: () => import('./categorypreview/categorypreview.module').then(m => m.CategoryPreviewModule), data: {name: 'Category Preview'}},
            {path: 'productlist', loadChildren: () => import('./productlist/productlist.module').then(m => m.ProductListModule), data: {name: 'Product List'}},
            {path: 'shoppingcart', loadChildren: () => import('./shoppingcart/shoppingcart.module').then(m => m.ShoppingCartModule), data: {name: 'Shopping Cart'}},
            {path: 'categoryfilter', loadChildren: () => import('./categoryfilter/categoryfilter.module').then(m => m.CategoryFilterModule), data: {name: 'Category Filter'}},
            {path: 'productquickview', loadChildren: () => import('./productquickview/productquickview.module').then(m => m.ProductQuickviewModule), data: {name: 'Product Qucikview'}},
            {path: 'productfeature', loadChildren: () => import('./productfeature/productfeature.module').then(m => m.ProductFeatureModule), data: {name: 'Product Features'}}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class EcommerceRoutingModule {}
