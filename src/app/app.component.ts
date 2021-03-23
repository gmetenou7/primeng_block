import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    constructor(private router: Router) { }

    menuitems: MenuItem[];

    visibleSidebar: boolean;

    theme: string = 'saga-blue';

    ngOnInit() {
        this.buildBreadcrumb();

        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => this.buildBreadcrumb());
    }

    buildBreadcrumb() {
        const paths = this.router.url === '/' ?  ['']: this.router.url.split('/');
        this.menuitems = paths.map(path => {
            return {label: path, routerLink: ['/' + path]};
        });
    }

    changeTheme(event: Event, theme: string) {
        let themeElement = document.getElementById('theme-link');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, theme));
        this.theme = theme;
        event.preventDefault();
    }
}