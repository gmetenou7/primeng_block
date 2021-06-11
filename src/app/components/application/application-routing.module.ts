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
            {path: 'stackedlist', loadChildren: () => import('./stackedlist/stackedlist.module').then(m => m.StackedListModule)},
            {path: 'gridlist', loadChildren: () => import('./gridlist/gridlist.module').then(m => m.GridListModule)},
            {path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)},
            {path: 'formlayout', loadChildren: () => import('./formlayout/formlayout.module').then(m => m.FormLayoutModule)},
            {path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SignInModule)},
            {path: 'radiogroup', loadChildren: () => import('./radiogroup/radiogroup.module').then(m => m.RadioGroupModule)},
            {path: 'actionpanel', loadChildren: () => import('./actionpanel/actionpanel.module').then(m => m.ActionPanelModule)},
            {path: 'alert', loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule)},
            {path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavBarModule)},
            {path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)},
            {path: 'verticalnav', loadChildren: () => import('./verticalnav/verticalnav.module').then(m => m.VerticalNavModule)},
            {path: 'breadcrumb', loadChildren: () => import('./breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule)},
            {path: 'steps', loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule)},
            {path: 'sidebarnav', loadChildren: () => import('./sidebarnav/sidebarnav.module').then(m => m.SidebarNavModule)},
            {path: 'dialog', loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule)},
            {path: 'slideover', loadChildren: () => import('./slideover/slideover.module').then(m => m.SlideOverModule)},
            {path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)},
            {path: 'container', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule)},
            {path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule {}
