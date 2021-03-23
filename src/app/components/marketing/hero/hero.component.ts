import { Component } from '@angular/core';

@Component({
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    
    block1: string = `
<div class="grid grid-nogutter surface-0 text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left">
        <span class="block text-6xl font-bold mb-1">The Most Powerful</span>
        <div class="block text-6xl text-blue-500 font-bold mb-3">UI Component Library</div>
        <p class="mt-0 mb-4 text-700 line-height-3">Your perfect companion for Angular featuring elegant, high-performance, accessible and fully customizable UI Components.</p>
        
        <div>
            <button pButton label="Learn More" type="button" class="mr-3"></button>
            <button pButton label="Live Demo" type="button" class="p-button-outlined"></button>
        </div>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="assets/images/blocks/city.png" alt="City" class="block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`;

    block2: string = `
<div class="relative p-6 text-800 overflow-hidden">
    <img src="assets/images/blocks/city-2.png" alt="City" class="absolute top-0 left-0 w-auto h-full block md:w-full">

    <div class="text-center my-5 relative">
        <span class="block text-6xl font-bold mb-1">The Most Powerful</span>
        <div class="block text-6xl text-blue-500 font-bold mb-3">UI Component Library</div>
        <p class="mt-0 mb-4 line-height-3">Your perfect companion for Angular featuring elegant, high-performance, accessible and fully customizable UI Components.</p>
        
        <div>
            <button pButton label="Learn More" type="button" class="mr-3 p-button-raised"></button>
            <button pButton label="Live Demo" type="button" class="p-button-secondary p-button-raised"></button>
        </div>
    </div>
</div>`;

}
