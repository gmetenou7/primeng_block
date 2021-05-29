import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ApplicationComponent},
            {path: 'pageheading', loadChildren: () => import('./pageheading/pageheading.module').then(m => m.PageHeadingModule)},
            {path: 'cardheading', loadChildren: () => import('./cardheading/cardheading.module').then(m => m.CardHeadingModule)},
            {path: 'sectionheading', loadChildren: () => import('./sectionheading/sectionheading.module').then(m => m.SectionHeadingModule)},
            {path: 'descriptionlist', loadChildren: () => import('./descriptionlist/descriptionlist.module').then(m => m.DescriptionListModule)},
            {path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule)},
            {path: 'stackedlist', loadChildren: () => import('./stackedlist/stackedlist.module').then(m => m.StackedListModule)}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule {}
