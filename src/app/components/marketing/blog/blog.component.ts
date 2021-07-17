import { Component } from '@angular/core';
@Component({
    templateUrl: './blog.component.html'
})
export class BlogComponent {

    block1: string = `
<div class="surface-ground">
    <div class="font-bold text-6xl text-900 mb-5 text-center">Featured Articles</div>
    <div class="grid nogutter">
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round h-full surface-card">
                <img src="assets/images/blocks/blog/blog-1.jpg" alt="Image" class="block w-full border-round-top">
                <div class="p-4">
                    <span class="block font-medium text-blue-600 mb-3">Crime</span>
                    <div class="text-xl text-900 font-medium mb-3 line-height-3 ">Fugitive flamingo spotted in Florida</div>
                    <div class="text-sm line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div class="flex">
                        <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></p-avatar>
                        <div class="ml-2">
                            <div class="text-xs font-bold text-900 mb-1">Anna Lane</div>
                            <div class="text-xs flex align-items-center text-700">
                                <i class="pi pi-calendar mr-1 text-xs"></i>
                                <span>Apr 5, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round h-full surface-card">
                <img src="assets/images/blocks/blog/blog-2.jpg" alt="Image" class="block w-full border-round-top">
                <div class="p-4 flex flex-column">
                    <span class="block font-medium text-blue-600 mb-3">Wildlife</span>
                    <div class="text-xl text-900 font-medium mb-3 line-height-3 ">Journey to the Ends of the Earth</div>
                    <div class="text-sm line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div class="flex">
                        <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></p-avatar>
                        <div class="ml-2">
                            <div class="text-xs font-bold text-900 mb-1">Arlene McCoy</div>
                            <div class="text-xs flex align-items-center text-700">
                                <i class="pi pi-calendar mr-1 text-xs"></i>
                                <span>Apr 6, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round h-full surface-card">
                <img src="assets/images/blocks/blog/blog-3.jpg" alt="Image" class="block w-full border-round-top">
                <div class="p-4">
                    <span class="block font-medium text-blue-600 mb-3">Marie</span>
                    <div class="text-xl text-900 font-medium mb-3 line-height-3 ">'Real and imminent' extinction risk</div>
                    <div class="text-sm line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div class="flex">
                        <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-3.png" shape="circle"></p-avatar>
                        <div class="ml-2">
                            <div class="text-xs font-bold text-900 mb-1">Diane Miles</div>
                            <div class="text-xs flex align-items-center text-700">
                                <i class="pi pi-calendar mr-1 text-xs"></i>
                                <span>Apr 9, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
    <div class="surface-section">
    <div class="font-bold text-5xl text-900 mb-3">Recent Articles</div>
    <div class="text-700 text-xl line-height-3 mb-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="grid nogutter">
        <div class="col-12 lg:col-4 p-4">
            <div class="border-top-3 border-blue-600"></div>
            <div class="text-blue-600 font-medium my-2">Animals</div>
            <div class="text-900 font-medium text-xl line-height-3 mb-4">Why Earth's most beloved creatures are headed toward extinction</div>
            <div class="font-sm text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
            <div class="flex mt-4">
                <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></p-avatar>
                <div class="ml-2">
                    <div class="text-xs font-bold text-900 mb-1">Anna Miles</div>
                    <div class="text-xs flex align-items-center text-700">
                        <i class="pi pi-calendar mr-1 text-xs"></i>
                        <span>Apr 9, 2021</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-4">
            <div class="border-top-3 border-pink-600"></div>
            <div class="text-pink-600 font-medium my-2">Oxygen</div>
            <div class="text-900 font-medium text-xl line-height-3 mb-4">Only one-third of tropical rainforests remain intact, study says </div>
            <div class="font-sm text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
            <div class="flex mt-4">
                <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></p-avatar>
                <div class="ml-2">
                    <div class="text-xs font-bold text-900 mb-1">Arlene Miles</div>
                    <div class="text-xs flex align-items-center text-700">
                        <i class="pi pi-calendar mr-1 text-xs"></i>
                        <span>Apr 9, 2021</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-4">
            <div class="border-top-3 border-orange-600"></div>
            <div class="text-orange-600 font-medium my-2">Nature</div>
            <div class="text-900 font-medium text-xl line-height-3 mb-4">Does planting a tree really offset your carbon footprint?</div>
            <div class="font-sm text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
            <div class="flex mt-4">
                <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-3.png" shape="circle"></p-avatar>
                <div class="ml-2">
                    <div class="text-xs font-bold text-900 mb-1">Diane Miles</div>
                    <div class="text-xs flex align-items-center text-700">
                        <i class="pi pi-calendar mr-1 text-xs"></i>
                        <span>Apr 9, 2021</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-ground">
    <div class="font-bold text-5xl text-900 mb-3">From the Blog</div>
    <div class="text-700 line-height-3 text-xl mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    
    <div class="flex flex-column xl:flex-row">
        <div class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 xl:mb-0 flex-column md:flex-row">
            <img src="assets/images/blocks/blog/blog-4.jpg" alt="Image" class="border-round-left" style="max-height: 234px;">
            <div class="p-4">
                <div class="flex justify-content-between mb-3">
                    <span class="text-orange-500 font-medum">Good News</span>
                    <span class="text-500 font-medium">3 days ago</span>
                </div>
                <div class="font-medium text-900 mb-3 line-height-3 ">Our Four-Legged Warriors</div>
                <div class="line-height-3 text-700 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                <div class="flex align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></p-avatar>
                    <span class="font-bold text-sm block ml-2 text-blue-600">Anna Lane</span>
                </div>
            </div>
        </div>
        <div class="flex shadow-2 surface-card border-round flex-column md:flex-row">
            <img src="assets/images/blocks/blog/blog-5.jpg" alt="Image" class="border-round-left" style="max-height: 234px;">
            <div class="p-4">
                <div class="flex justify-content-between mb-3">
                    <span class="text-orange-500 font-medum">Science</span>
                    <span class="text-500 font-medium">4 days ago</span>
                </div>
                <div class="font-medium text-900 mb-3 line-height-3 ">Can We Learn From Horses?</div>
                <div class="line-height-3 text-700 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                <div class="flex align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></p-avatar>
                    <span class="font-bold text-sm block ml-2 text-blue-600">Arlene McCoy</span>
                </div>
            </div>
        </div>
    </div>
</div>`;
    
}