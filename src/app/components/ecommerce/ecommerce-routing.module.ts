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
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class EcommerceRoutingModule {}
