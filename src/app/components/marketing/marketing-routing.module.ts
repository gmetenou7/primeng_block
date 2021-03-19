import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MarketingComponent},
            {path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule)},
            {path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class MarketingRoutingModule {}