import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ApplicationComponent},
            {path: 'pageheading', loadChildren: () => import('./pageheading/pageheading.module').then(m => m.PageHeadingModule)},
            {path: 'cardheading', loadChildren: () => import('./cardheading/cardheading.module').then(m => m.CardHeadingModule)}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule {}
