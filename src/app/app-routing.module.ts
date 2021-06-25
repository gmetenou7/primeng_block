import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'documentation', loadChildren: () => import('./components/documentation/documentation.module').then(m => m.DocumentationModule), data: {name: 'Documentation'}},
    {path: 'pricing', loadChildren: () => import('./components/pricing/pricing.module').then(m => m.PricingModule), data: {name: 'Pricing'}},
    {path: 'marketing', loadChildren: () => import('./components/marketing/marketing.module').then(m => m.MarketingModule), data: {name: 'Marketing'}},
    {path: 'application', loadChildren: () => import('./components/application/application.module').then(m => m.ApplicationModule), data: {name: 'Application'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
