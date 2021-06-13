import { Component } from '@angular/core';

@Component({
templateUrl: './home.component.html'
})
export class HomeComponent {

    viewBlocks(el: HTMLElement) {
        el.scrollIntoView({behavior: "smooth"});
    }
}
