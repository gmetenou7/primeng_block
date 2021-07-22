import { Component } from '@angular/core';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent {

    block1 = `
<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <input id="email" type="text" pInputText class="w-full mb-3">

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <input id="password" type="password" pInputText class="w-full mb-3">

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <p-checkbox id="rememberme" [binary]="true" styleClass="mr-2"></p-checkbox>
                <label for="rememberme">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
        </div>

        <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
    </div>
</div>`;

    block2 = `
<div class="flex">
    <div class="surface-section w-full md:w-6 p-6 md:p-8">
         <div class="mb-5">
             <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
             <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
             <span class="text-600 font-medium mr-2">Don't have an account?</span>
             <a class="font-medium no-underline text-blue-500 cursor-pointer">Create today!</a>
         </div>
         <div>
             <label for="email" class="block text-900 font-medium mb-2">Email</label>
             <input id="email" type="text" pInputText class="w-full mb-3">
 
             <label for="password" class="block text-900 font-medium mb-2">Password</label>
             <input id="password" type="password" pInputText class="w-full mb-3">
 
             <div class="flex align-items-center justify-content-between mb-6">
                 <div class="flex align-items-center">
                     <p-checkbox id="rememberme" [binary]="true" styleClass="mr-2"></p-checkbox>
                     <label for="rememberme">Remember me</label>
                 </div>
                 <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
             </div>
 
             <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
         </div>
    </div>
    <div class="hidden md:block w-6 bg-no-repeat bg-cover" style="background-image: url('assets/images/blocks/signin/signin.jpg')"></div>
</div>`;

}
