import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MarketingComponent},
            {path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule)},
            {path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)},
            {path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)},
            {path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)}
        ])
    ], 
    exports: [
        RouterModule
    ]
})
export class MarketingRoutingModule {}