import { Component } from '@angular/core';

@Component({
    templateUrl: './feature.component.html'
})
export class FeatureComponent {
    
    block1: string = `
<div class="surface-0 p-8 text-center">
    <div class="mb-3 font-bold text-2xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i class="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Built for Developers</div>
            <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">End-to-End Encryption</div>
            <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Easy to Use</div>
            <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
            <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Open Source</div>
            <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i class="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
            <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="p-8" style="background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #F4FAFE;">
    <div class="text-blue-600 font-medium mb-3">ALL-IN-ONE</div>
    <div class="text-900 text-2xl font-bold mb-3">Focus on the work that matters</div>
    <div class="text-700 text-sm">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid mt-7">
        <div class="col-12 md:col-4">
            <div class="shadow-0 p-5 surface-0 text-center">
                <div class="border-circle bg-blue-50 p-4 text-blue-600 inline-flex justify-content-center align-items-center mb-4">
                    <i class="pi pi-heart text-5xl "></i>
                </div>
                <div class="text-900 font-medium text-xl mb-4">Simpler Interface</div>
                <div class="text-700 text-sm mb-4 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <button pButton label="Learn More" class="p-button-text font-bold"></button>
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="shadow-0 p-5 surface-0 text-center">
                <div class="border-circle bg-purple-50 p-4 text-purple-600 inline-flex justify-content-center align-items-center mb-4">
                    <i class="pi pi-wifi text-5xl"></i>
                </div>
                <div class="text-900 font-medium text-xl mb-4">Extensive Connectivity</div>
                <div class="text-700 text-sm mb-4 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                <button pButton label="Learn More" class="p-button-text font-bold"></button>
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="shadow-0 p-5 surface-0 text-center">
                <div class="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
                    <i class="pi pi-lock text-5xl"></i>
                </div>
                <div class="text-900 font-medium text-xl mb-4">Magical Privacy</div>
                <div class="text-700 text-sm mb-4 line-height-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                <button pButton label="Learn More" class="p-button-text font-bold"></button>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="p-8 surface-0">
    <div class="grid">
        <div class="col-12 md:col-6 flex align-items-center">
            <div>
                <div class="text-blue-600 text-xl mb-3">ALL-IN-ONE</div>
                <div class="text-900 text-4xl font-bold mb-6">Mobile Experience</div>

                <div class="grid">
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Fully Managed</div>
                        <div class="text-700 text-sm mb-3 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Fully Secure</div>
                        <div class="text-700 text-sm mb-3 line-height-3">Eu turpis egestas pretium aenean pharetra.</div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Unlimited & Free</div>
                        <div class="text-700 text-sm mb-3 line-height-3">Tortor dignissim convallis aenean et tortor at risus viverra.</div>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="text-900 font-medium mb-2">Daily Spending</div>
                        <div class="text-700 text-sm mb-3 line-height-3">Risus nec feugiat in fermentum posuere urna nec.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature-1.png" alt="Image" class="w-full">
        </div>
    </div>
</div>`;

    block4: string = `
<div class="p-8 surface-0">
    <div class="grid">
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature-2.png" alt="Image" class="w-full">
        </div>
        <div class="col-12 md:col-6 pl-6">
            <div class="p-3 inline-flex align-items-center surface-900 text-0 mb-4 font-medium" style="border-radius: 30px">
                <i class="pi pi-star mr-2"></i>
                <span>Open Source API</span>
            </div>
            <div class="text-4xl font-bold text-900 mb-3">Redefine Possible</div>
            <div class="text-700 mb-5 line-height-3 mb-5">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
        
            <div class="flex align-items-center mb-4">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Simple to Use</div>
                    <div class="text-700 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                </div>
            </div>
            <div class="flex align-items-center mb-4">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Personalized Design</div>
                    <div class="text-700 text-sm">Eu turpis egestas pretium aenean pharetra.</div>
                </div>
            </div>
            <div class="flex align-items-center mb-4">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Status Notifications</div>
                    <div class="text-700 text-sm">Tortor dignissim convallis aenean et tortor at risus viverra.</div>
                </div>
            </div>
            <div class="flex align-items-center">
                <i class="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div class="text-900 font-medium mb-2">Interactive Templates</div>
                    <div class="text-700 text-sm">Risus nec feugiat in fermentum posuere urna nec.</div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="p-8 surface-900">
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="pr-0 md:pr-8">
                <div class="text-blue-500 font-bold text-5xl mb-5">Managed Your Corporation</div>
                
                <div class="mb-5 border-blue-500 pl-3" style="border-left: 4px solid">
                    <span class="text-0 font-bold text-2xl">Simpler Interface</span>
                    <div class="text-400 text-sm line-height-3 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </div>

                <div class="mb-5">
                    <span class="text-400 font-bold text-2xl">Extensive Connectivity</span>
                    <div class="text-400 text-sm line-height-3 mt-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                </div>

                <div class="mb-5">
                    <span class="text-400 font-bold text-2xl">Magical Privacy</span>
                    <div class="text-400 text-sm line-height-3 mt-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature-3.png" alt="Image" class="w-full">
        </div>
    </div>
</div>`;

    block6: string = `
<div class="p-8 surface-0">
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="pr-0 md:pr-8">
                <div class="text-900 font-bold text-4xl mb-3">Easy to Use</div>
                <div class="text-700 line-height-3 mb-5">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
            
                <div class="mb-5 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="bg-cyan-600 text-0 flex align-items-center justify-content-center border-circle shadow-4" style="min-width:2rem; min-height: 2rem; border: 2px solid #ffffff">
                            <i class="pi pi-image"></i>
                        </span>
                        <div class="h-full bg-cyan-500" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-900 mb-2">Create a wireframe</div>
                        <span class="line-height-3 text-700">Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin. Eu mi bibendum neque egestas congue quisque egestas diam.</span>
                    </div>
                </div>

                <div class="mb-5 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle shadow-4" style="min-width:2rem; min-height: 2rem; border: 2px solid #ffffff">
                            <i class="pi pi-android"></i>
                        </span>
                        <div class="h-full bg-orange-500" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-900 mb-2">Artificial Intelligence</div>
                        <span class="line-height-3 text-700">Erat pellentesque adipiscing commodo elit at imperdiet dui. Morbi tristique senectus et netus et malesuada fames.</span>
                    </div>
                </div>

                <div class="mb-5 flex">
                    <div class="flex flex-column align-items-center" style="width:2rem">
                        <span class="surface-900 text-0 flex align-items-center justify-content-center border-circle shadow-4" style="min-width:2rem; min-height: 2rem; border: 2px solid #ffffff">
                            <i class="pi pi-globe"></i>
                        </span>
                        <div class="h-full surface-500" style="width: 2px; min-height: 4rem"></div>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-900 mb-2">Deploy to Production</div>
                        <span class="line-height-3 text-700">Adipiscing at in tellus integer. Lorem donec massa sapien faucibus et molestie ac feugiat. Laoreet sit amet cursus sit. Velit ut tortor pretium viverra.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <img src="assets/images/blocks/feature-4.png" alt="Image" class="w-full">
        </div>
    </div>
</div>`;

}
