import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'setup', loadChildren: () => import('./components/setup/setup.module').then(m => m.SetupModule), data: {name: 'Setup'}},
    {path: 'marketing', loadChildren: () => import('./components/marketing/marketing.module').then(m => m.MarketingModule), data: {name: 'Marketing'}},
    {path: 'application', loadChildren: () => import('./components/application/application.module').then(m => m.ApplicationModule), data: {name: 'Application'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
