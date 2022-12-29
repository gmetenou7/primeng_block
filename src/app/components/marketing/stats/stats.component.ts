import { Component } from '@angular/core';

@Component({
    templateUrl: './stats.component.html'
})
export class StatsComponent {

    block1: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-2xl line-height-2 mb-3">🍕 Choice of all Ninja Turtles</div>
    <p class="text-600 line-height-3 text-lg m-0 mb-5">Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">Neapolitan</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">995</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">Pepperoni</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">1504</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">Margherita</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">2038</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="px-5 py-3 surface-card shadow-2 border-round">
                <div class="text-blue-600 font-medium line-height-3 mb-2">BBQ Chicken</div>
                <div class="text-900 font-bold line-height-3 text-2xl mb-2">766</div>
                <p class="text-700 line-height-3 m-0">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-4xl line-height-3 mb-3 text-center">Continue Breaking Records</div>
    <p class="text-600 line-height-3 text-lg m-0 mb-6 text-center">Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="grid surface-card shadow-2" style="border-radius: 10px">
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-users text-4xl text-blue-600 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">83M</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-chart-line text-4xl text-orange-500 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">$256K</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-globe text-4xl text-cyan-600 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">1,453</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
        <div class="col-12 md:col-3 px-5 py-5">
            <i class="pi pi-map text-4xl text-purple-500 mb-3"></i>
            <div class="text-900 font-bold text-4xl mb-3 line-height-3">45 km</div>
            <p class="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="bg-gray-900 text-center bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <i class="pi pi-users bg-blue-500 text-4xl text-0 p-2 mb-3 border-circle" style="width: 49px; height: 49px"></i>
    <div class="text-white font-bold text-5xl line-height-3 mb-3">Biggest Tech Company of Region</div>
    <p class="text-gray-500 line-height-3 text-lg m-0 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo
        laoreet sit. Purus sit amet volutpat consequat.</p>

    <div class="flex flex-wrap align-items-center justify-content-center p-2">
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">3409</div>
            <div class="text-500 font-medium text-lg">Engineers</div>
        </div>
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">206</div>
            <div class="text-gray-500 font-medium text-lg">Designers</div>
        </div>
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">907</div>
            <div class="text-gray-500 font-medium text-lg">Accounts</div>
        </div>
        <div class="py-4 flex align-items-center mr-4">
            <div class="text-white font-bold text-4xl mr-3">572</div>
            <div class="text-gray-500 font-medium text-lg">Marketers</div>
        </div>
        <div class="py-4 flex align-items-center">
            <div class="text-white font-bold text-4xl mr-3">12</div>
            <div class="text-gray-500 font-medium text-lg">Executives</div>
        </div>
    </div>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-orange-500 text-center mb-3">VITAE TEMPUS QUAM</div>
    <div class="font-bold text-5xl text-900 text-center mb-6">Take your vision to the next level</div>
    <div class="grid grid-nogutter">
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="bg-blue-50 text-center p-5 border-round flex flex-column">
                <i class="text-blue-500 pi pi-play text-4xl block mb-4"></i>
                <span class="text-black-alpha-90 text-5xl">52000</span>
                <div class="text-blue-700 mt-3 font-medium">Streams</div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="bg-purple-50 text-center p-5 border-round flex flex-column">
                <i class="text-purple-500 pi pi-users text-4xl block mb-4"></i>
                <span class="text-black-alpha-90 text-5xl">21000</span>
                <div class="text-purple-700 mt-3 font-medium">Engagement</div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="bg-teal-50 text-center p-5 border-round flex flex-column">
                <i class="text-teal-500 pi pi-camera text-4xl block mb-4"></i>
                <span class="text-black-alpha-90 text-5xl">71.2h</span>
                <div class="text-teal-700 mt-3 font-medium">Watch Time</div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="bg-indigo-50 text-center p-5 border-round flex flex-column">
                <i class="text-indigo-500 pi pi-thumbs-up text-4xl block mb-4"></i>
                <span class="text-black-alpha-90 text-5xl">4500</span>
                <div class="text-indigo-700 mt-3 font-medium">Likes</div>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column lg:flex-row">
        <div class="flex-1 pr-0 lg:pr-5 mb-5 lg:mb-0">
            <div class="font-bold text-5xl text-white mb-7">Get your business up with us</div>
            <div class="font-medium text-2xl text-white mb-3">We help you grow</div>
            <p class="text-gray-600 font-medium text-xl mt-0 mb-7 line-height-3">Porta lorem mollis aliquam ut porttitor leo a diam. Amet purus gravida quis blandit. Consectetur libero id faucibus nisl tincidunt. Aenean vel elit scelerisque mauris pellentesque pulvinar
                pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>

            <div class="flex align-items-center">
                <span class="text-white font-bold mr-3">TRUSTED BY</span>
                <i class="text-gray-600 pi pi-google mr-2"></i>
                <i class="text-gray-600 pi pi-apple mr-2"></i>
                <i class="text-gray-600 pi pi-microsoft"></i>
            </div>
        </div>
        <div class="flex-1">
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6 p-3">
                    <div class="p-3" style="background: linear-gradient(180deg, rgba(66, 66, 66, 0.9) 0%, rgba(66, 66, 66, 0.63) 100%); min-height: 150px; border-radius: 10px">
                        <span class="text-white font-bold text-5xl">600+</span>
                        <p class="mt-3 mb-0 font-medium text-xl text-400">Happy Clients</p>
                    </div>
                </div>
                <div class="w-full lg:w-6 p-3">
                    <div class="p-3" style="background: linear-gradient(180deg, rgba(66, 66, 66, 0.9) 0%, rgba(66, 66, 66, 0.63) 100%); min-height: 150px; border-radius: 10px">
                        <span class="text-white font-bold text-5xl">750+</span>
                        <p class="mt-3 mb-0 font-medium text-xl text-400">Projects</p>
                    </div>
                </div>
                <div class="w-full lg:w-6 p-3">
                    <div class="p-3" style="background: linear-gradient(180deg, rgba(66, 66, 66, 0.9) 0%, rgba(66, 66, 66, 0.63) 100%); min-height: 150px; border-radius: 10px">
                        <span class="text-white font-bold text-5xl">73</span>
                        <p class="mt-3 mb-0 font-medium text-xl text-400">Awards</p>
                    </div>
                </div>
                <div class="w-full lg:w-6 p-3">
                    <div class="p-3 bg-indigo-500 border-round" style="min-height: 150px">
                        <i class="pi pi-globe text-6xl text-indigo-100"></i>
                        <button pButton pRipple label="Learn More" icon="pi pi-arrow-right" class="block mt-5 p-button-warning white-space-nowrap"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block6: string = `
<section class="relative surface-section">
    <div class="text-center bg-gray-900 px-6 py-8">
        <h2 class="text-blue-300 text-lg font-semibold mb-1 mt-0">Why Bastion</h2>
        <h3 class="text-white font-semibold text-4xl mt-0 mb-0 mt-0 line-height-3">Build secure onboarding and authentication</h3>
        <p class="text-gray-500 font-medium text-base text-xs mt-2 mb-4 line-height-3">Egestas congue quisque egestas diam in arcu. Sapien eget mi proin sed libero enim sed faucibus.</p>
    </div>
    <div class="px-4 py-5 md:px-6 lg:px-8">
        <div class="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between">
            <div class="px-2 w-full py-6 md:px-4 lg:px-6 bg-cover relative border-round" style="background: url(assets/images/blocks/stats/stats-1.png); background-position: center; margin-top:-2rem; top:-70px;">
                <div class="flex flex-column lg:flex-row">
                    <article class="w-full p-2 mr-0 lg:mr-3 lg:mb-0 mb-3 text-center" style="background: rgba(255, 255, 255, 0.25);border-radius: 6px;">
                        <h4 class="text-white text-6xl line-height-3 font-medium mt-3 mb-0">1 min</h4>
                        <p class="text-white line-height-3 text-xl mt-0 mb-0">Save Time</p>
                        <p class="text-white-alpha-70 line-height-3 text-base font-light text-sm mt-0 mb-0">Get up and run in no time.</p>
                    </article>
                    <article class="w-full p-2 mr-0 lg:mr-3 lg:mb-0 mb-3 text-center" style="background: rgba(255, 255, 255, 0.25);border-radius: 6px;backdrop-filter: blur(10px);">
                        <h4 class="text-white text-6xl line-height-3 font-medium mt-3 mb-0">+200%</h4>
                        <p class="text-white line-height-3 text-xl mt-0 mb-0">Conversion Rate</p>
                        <p class="text-white-alpha-70 line-height-3 text-base font-light text-sm mt-0 mb-0">Increase rate after switch to Bastion</p>
                    </article>
                    <article class="w-full p-2 mr-0 lg:mr-3 lg:mb-0 mb-3 text-center" style="background: rgba(255, 255, 255, 0.25);border-radius: 6px;backdrop-filter: blur(10px);">
                        <h4 class="text-white text-6xl line-height-3 font-medium mt-3 mb-0">+300K</h4>
                        <p class="text-white line-height-3 text-xl mt-0 mb-0">Popular Community</p>
                        <p class="text-white-alpha-70 line-height-3 text-base font-light text-sm mt-0 mb-0">You will never walk alone.</p>
                    </article>
                </div>
            </div>
        </div>
    </div>
</section>`;
}
