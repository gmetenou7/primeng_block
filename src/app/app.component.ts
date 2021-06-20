import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, ActivationStart, ChildActivationEnd, ChildActivationStart, Data, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem,PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    constructor(private router: Router, private primengConfig: PrimeNGConfig) { }

    menuitems: MenuItem[] = [{label:'', routerLink:''}];

    visibleSidebar: boolean;

    theme: string = 'saga-blue';

    scale: number = 14;
    
    scales: number[] = [12,13,14,15,16];

    inputStyle: string = 'outlined';

    ripple: boolean = false;

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.router.events.
            pipe(filter(event => event instanceof ChildActivationStart))
            .subscribe(event => {
                if (event['snapshot'].data.name) {
                    let prevRoute = this.menuitems[this.menuitems.length - 1].routerLink;
                    this.menuitems.push({label: event['snapshot'].data.name, routerLink: prevRoute + '/' + event['snapshot'].url[0].path});
                }
            });

        this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(() => this.menuitems = [{label:'', routerLink:''}]);
    }

    changeTheme(event: Event, theme: string) {
        let themeElement = document.getElementById('theme-link');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, theme));
        this.theme = theme;
        event.preventDefault();
    }

    decrementScale() {
        this.scale--;
        this.applyScale();
    }

    incrementScale() {
        this.scale++;
        this.applyScale();
    }

    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }
}