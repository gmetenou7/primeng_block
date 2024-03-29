import { Component } from '@angular/core';

@Component({
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    
    block1: string = `
<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <button pButton pRipple label="Learn More" type="button" class="mr-3 p-button-raised"></button>
            <button pButton pRipple label="Live Demo" type="button" class="p-button-outlined"></button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="assets/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`;

    block2: string = `
<div class="relative p-8 overflow-hidden">
    <img src="assets/images/blocks/hero/hero-2.jpg" alt="Image" class="absolute top-0 left-0 w-auto h-full block md:w-full">

    <div class="text-center my-6 relative">
        <div class="text-6xl text-white font-bold mb-1">The Platform For</div>
        <div class="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p class="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <button pButton pRipple label="Learn More" type="button"></button>

        <p class="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
        <div class="flex justify-content-center align-items-center">
            <a href="https://www.apple.com" class="text-white mr-3">
                <i class="pi pi-apple text-2xl"></i>
            </a>
            <a href="https://play.google.com" class="text-white mr-3">
                <i class="pi pi-android text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" class="text-white">
                <i class="pi pi-facebook text-2xl"></i>
            </a>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="relative p-8 overflow-hidden bg-no-repeat bg-cover" style="background-image: url('assets/images/blocks/hero/hero-3.jpg')">
    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1 text-white">Bring Out The Best</div>
        <div class="text-6xl text-blue-400 font-bold mb-4">In Your Code</div>
        <p class="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <div class="flex align-items-center justify-content-center flex-wrap">
            <input type="text" pInputText class="bg-transparent border-white p-3 mr-3 mt-3" style="border-radius: 40px" size="30" placeholder="Enter your email">
            <button type="button" label="Notify Me" pButton pRipple class="p-3 mt-3" style="border-radius: 40px"></button>
        </div>
    </div>
</div>`;

    block4: string = `
<div class="p-6 text-center" style="background:radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%);">
    <div class="surface-900 text-0 p-2 mx-auto mb-4" style="max-width: 250px; border-radius: 40px">🔥 Get started in no time</div>
    <div class="text-6xl text-900 font-bold mb-1">Highly Customizable</div>
    <div class="text-6xl text-primary font-bold mb-4">Premium Application Template</div>
    <button type="button" pButton pRipple label="Get Started" class="p-button-outlined p-3 font-bold"></button>

    <img src="assets/images/blocks/hero/ultima.png" alt="Image" class="block mx-auto mt-6 w-full md:w-auto" style="margin-bottom:-3rem">
</div>`;

    block5: string = `
<div class="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="w-12 lg:w-6 p-4">
            <h1 class="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span class="text-yellow-500 underline">for free</span></h1>
            <p class="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
            <ul class="list-none p-0 m-0">
                <li class="mb-3 flex align-items-center"><i class="pi pi-compass text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                <li class="mb-3 flex align-items-center"><i class="pi pi-map text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                <li class="mb-3 flex align-items-center"><i class="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
            </ul>
            <button type="button" pButton pRipple label="Claim Your Account" class="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium"></button>
        </div>
        <div class="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
            <img src="assets/images/blocks/hero/hero-illustration.svg" alt="Image" class="w-full lg:w-auto">
        </div>
    </div>
</div>`;

    block6: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="w-full xl:w-6 p-3 pr-5">
            <span class="text-indigo-600 font-bold mb-4 block">SUPERCHARGE YOUR PRODUCT</span>
            <div class="font-bold text-900 text-6xl mb-4">Take Control of Your Marketing Strategy</div>
            <p class="mt-0 mb-5 text-700 line-height-3 text-xl">Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
            <div class="relative w-full xl:w-30rem">
                <input pInputText type="text" placeholder="Enter your email" class="py-3 pl-3 w-full" style="border-radius: 30px;padding-right: 8rem">
                <button class="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer" style="border-radius: 30px; top: 0; right: 0">Join Now</button>
            </div>
        </div>
        <div class="w-full xl:w-6 p-3 flex align-items-center justify-content-center bg-indigo-50 p-4 lg:p-8 mt-5 xl:mt-0" style="border-radius: 30px">
            <div class="relative w-full" style="padding-bottom:56.25%;height:0;">
                <iframe class="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/XNRevmRLb70" title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>`;

    block7: string = `
<section style="background-image: url('assets/images/blocks/hero/hero-11.png');" class="bg-cover z-1">
    <div class="p-6 flex flex-column align-items-center relative overflow-hidden bg-no-repeat bg-cover" style="background:rgba(233, 244, 255, 0.7);">
        <article class="flex flex-column align-items-center bg-no-repeat z-2">
            <span class="text-center font-semibold text-xs md:text-sm text-black-alpha-60 mb-2">MULTIPLY YOUR DEVELOPMENT SPEED</span>
            <h3 class="text-center font-bold text-3xl md:text-6xl text-black-alpha-80 mt-0 mb-4">Start your business with <br/> <span style="background: linear-gradient(90deg, rgba(0, 209, 255, 1) 0%, rgba(255, 109, 232, 1) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-fill-color: transparent;">PrimeBlocks</span></h3>
            <div class="px-3 py-2 border-round-lg bg-white-alpha-90 flex justify-content-between align-items-center w-20rem shadow-1">
                <span class="font-normal text-black-alpha-60">npm i primeblocks</span>
                <span class="flex justify-content-center border-round shadow-1 cursor-pointer p-1 text-black-alpha-90"><i class="pi pi-copy"></i></span>
            </div>
        </article>
        <div class="flex flex-column md:flex-row gap-3 mt-4">
            <button pButton pRipple type="button" label="Documentation" class="p-button-outlined z-2"></button>
            <button pButton pRipple type="button" label="Get Started" class="z-2"></button>
        </div>
        <img src="assets/images/blocks/hero/hero-9.png" alt="Image" class="block mx-auto mt-6 w-full md:w-auto z-1" style="margin-bottom:-3rem">
        <img src="assets/images/blocks/hero/hero-5.png" alt="Image" class="hidden xl:block absolute z-1 xl:z-3" style="top: 66%; left: 73.5%">
        <img src="assets/images/blocks/hero/hero-6.png" alt="Image" class="hidden xl:block absolute z-1 xl:z-3" style="top: 70%; right: 77%">
        <img src="assets/images/blocks/hero/hero-7.png" alt="Image" class="hidden xl:block absolute z-1 xl:z-3" style="top: 22%; left: 70%">
        <img src="assets/images/blocks/hero/hero-8.png" alt="Image" class="hidden xl:block absolute z-1 xl:z-3" style="top: 35%; left: 19%">
        <img src="assets/images/blocks/hero/hero-10.svg" alt="Image" class="hidden xl:block xl:absolute bottom-0" style="mix-blend-mode: overlay;"/>
    </div>
</section>`;

    block8: string = `
<section class="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
    <div class="flex flex-wrap">
        <article class="w-full mt-8 xl:mt-0 xl:mb-0 xl:w-8 flex flex-column flex-order-1 xl:flex-order-0 justify-content-center align-items-center xl:align-items-start">
            <span class="text-blue-500 font-semibold text-lg mb-2">CATCH YOUR NOTIFICATIONS</span>
            <h2 class="font-bold text-4xl sm:text-7xl mt-0 mb-4">Develop amazing <br/> communication.</h2>
            <div class="flex gap-3">
                <button pButton pRipple type="button" label="Get Started" icon="pi pi-arrow-right" iconPos="right" class="z-2"></button>
                <button pButton pRipple type="button" label="Documentation" class="p-button-outlined z-2"></button>
            </div>
        </article>
        <div class="w-full xl:w-4 relative flex justify-content-center align-items-center">
            <img src="assets/images/blocks/hero/hero-12.png" alt="Image">
            <article class="absolute flex align-items-center w-24rem border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3" style="bottom: 41%; backdrop-filter: blur(40px); background-color: rgba(255, 255, 255, 0.5);">
                <img src="assets/images/blocks/hero/hero-13.png" class="border-circle" alt="Image">
                <div class="flex flex-column justify-content-center w-full">
                    <p class="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">OLYMPIA</p>
                    <p class="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">Your stocks <span class="text-indigo-500">getting up</span></p>
                </div>
                <img src="assets/images/blocks/hero/hero-14.png" class="border-circle" alt="Image">
            </article>

            <article class="absolute flex align-items-center w-24rem p-1 border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3" style="bottom: 24%; backdrop-filter: blur(40px); background-color: rgba(255, 255, 255, 0.5)">
                <img src="assets/images/blocks/hero/hero-15.png" alt="Image" class="border-circle">
                <div class="flex flex-column justify-content-center w-full">
                    <p class="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">OLYMPIA</p>
                    <p class="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">Anastasia sent you a message</p>
                </div>
            </article>

            <article class="absolute flex align-items-center w-24rem p-1 border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3" style="bottom: 7%; backdrop-filter: blur(40px); background-color: rgba(255, 255, 255, 0.5)">
                <img src="assets/images/blocks/hero/hero-13.png" alt="Image" class="border-circle">
                <div class="flex flex-column justify-content-center w-full">
                    <p class="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">OLYMPIA</p>
                    <p class="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">Your revenue <span class="text-red-500"></span>getting low</p>
                </div>
                <img src="assets/images/blocks/hero/hero-16.png" alt="Image" class="border-circle">
            </article>
        </div>
    </div>
</section>`;

}
