import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MarketingComponent},
            {path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule)},
            {path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)},
            {path: 'cta', loadChildren: () => import('./cta/cta.module').then(m => m.CtaModule)},
            {path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)},
            {path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)},
            {path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)},
            {path: 'newsletter', loadChildren: () => import('./newsletter/newsletter.module').then(m => m.NewsletterModule)},
            {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
            {path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule)},
            {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
            {path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule)},
            {path: 'logocloud', loadChildren: () => import('./logocloud/logocloud.module').then(m => m.LogoCloudModule)}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MarketingRoutingModule {}
