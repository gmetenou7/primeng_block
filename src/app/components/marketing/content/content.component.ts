import { Component } from '@angular/core';
@Component({
    templateUrl: './content.component.html'
})
export class ContentComponent {

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-600 text-sm mb-3">
        <span>Published </span>
        <span class="font-bold">April 6, 2021</span>
        <span> by </span>
        <span class="font-bold">Claire Williams</span>
    </div>
    <div class="border-blue-600 font-medium text-2xl p-3 mb-3 text-900" style="border-left: 8px solid">Content Section Title</div>
    <div class="line-height-3 text-xl text-700 mb-5">Metus aliquam eleifend mi in nulla posuere. In vitae turpis massa sed elementum tempus egestas sed. Dui ut ornare lectus sit. Massa ultricies mi quis hendrerit.</div>
    <div class="mb-5">
        <p-tag value="New" class="mr-2"></p-tag>
        <p-tag value="Technology" severity="success" class="mr-2"></p-tag>
        <p-tag value="Education" severity="warning"></p-tag>
    </div>
    <div class="line-height-3 text-lg text-700 mb-4">
        Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nullam vehicula ipsum a arcu cursus vitae congue. 
        Leo urna molestie at elementum eu facilisis. Fusce id velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est. Semper risus in hendrerit gravida rutrum quisque non tellus orci. 
        Neque convallis a cras semper. Vitae elementum curabitur vitae nunc sed. Ornare massa eget egestas purus viverra accumsan in. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. 
        Sit amet risus nullam eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
    </div>
    <blockquote class="line-height-3 text-xl text-600 mb-4 py-0 mx-0 px-4">
        “In short, GPU.js is a JavaScript acceleration library that can be used for general-purpose computations on GPUs using JavaScript. It supports browsers, Node.js and TypeScript.”
    </blockquote>
    <div class="line-height-3 text-lg text-700 mb-4">
        Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverra tellus in hac habitasse platea dictumst. Ultricies tristique nulla aliquet enim. Nunc scelerisque viverra mauris in aliquam sem fringilla. 
        Laculis urna id volutpat lacus laoreet.
    </div>
    <ul class="mb-4 text-lg ml-6 p-0">
        <li class="mb-3">Nunc sed velit dignissim sodales ut.</li>
        <li class="mb-3">Lorem mollis aliquam ut porttitor. </li>
        <li>Urna nec tincidunt praesent semper feugiat nibh sed.</li>
    </ul>
    <div class="text-center mb-4">
        <img src="assets/images/blocks/content/content-1.jpg" alt="Image" class="w-full border-round">
        <span class="block text-700 line-height-3 mt-2">Id porta nibh venenatis cras sed felis eget velit.</span>
    </div>
    
    <div class="text-2xl text-900 mb-4">Massa vitae tortor condimentum lacinia</div>
    <div class="line-height-3 text-lg text-700 mb-4">
        Lacus viverra vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non. Mauris vitae ultricies leo integer malesuada nunc vel. Dolor sit amet consectetur adipiscing elit ut aliquam purus. 
        Ac tincidunt vitae semper quis lectus nulla at volutpat. Enim lobortis scelerisque fermentum dui faucibus in ornare. In mollis nunc sed id semper. Vitae ultricies leo integer malesuada nunc vel risus commodo. 
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-700">
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6 pr-0 lg:pr-5">
            <span class="text-blue-700 bg-blue-50 inline-block py-2 px-3" style="border-radius:50px">Long Read</span>
            <div class="font-normal text-2xl mt-3 mb-3 text-900">In hendrerit gravida rutrum quisque non tellus</div>
            <div class="text-600 mb-5">by Jenny Wilson | jennyw.com | 16 mins</div>
            <p class="line-height-3 mt-0 mb-5">
                Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. 
                Nullam vehicula ipsum a arcu cursus vitae congue. Leo urna molestie at elementum eu facilisis. Fusce id velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est. 
                Semper risus in hendrerit gravida rutrum quisque non tellus orci. Neque convallis a cras semper. Vitae elementum curabitur vitae nunc sed. Ornare massa eget egestas purus viverra accumsan in. 
                Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet risus nullam eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
            </p>
            <p class="line-height-3 text-600 text-2xl mb-5">
                “Science is the most reliable guide for civilization, for life, for success in the world. Searching a guide other than the science is meaning carelessness, ignorance and heresy.”
            </p>
            <p class="line-height-3  mt-0 mb-5">
                Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverra tellus in hac habitasse platea dictumst. 
                Ultricies tristique nulla aliquet enim. Nunc scelerisque viverra mauris in aliquam sem fringilla. Laculis urna id volutpat lacus laoreet.
            </p>
            <ul class="pt-0 px-5 mt-0 mb-5">
                <li class="line-height-3">Nunc sed velit dignissim sodales ut. </li>
                <li class="line-height-3">Lorem mollis aliquam ut porttitor. </li>
                <li class="line-height-3">Urna nec tincidunt praesent semper feugiat nibh sed.</li>
            </ul>
            <div class="text-3xl text-900">Massa vitae tortor condimentum lacinia</div>
            <p class="line-height-3"> Lacus viverra vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non. Mauris vitae ultricies leo integer malesuada nunc vel. 
                Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ac tincidunt vitae semper quis lectus nulla at volutpat. Enim lobortis scelerisque fermentum dui faucibus in ornare. 
                In mollis nunc sed id semper. Vitae ultricies leo integer malesuada nunc vel risus commodo. </p>
        </div>
        <div class="w-full lg:w-6 pl-0 lg:pl-5 pt-5">
            <img src="assets/images/blocks/content/content-2.png" alt="Image" class="w-full border-round">
            <div class="text-center text-sm font-medium mt-3">Consequat nisl vel pretium lectus quam id leo in.</div>
        </div>
    </div>
</div>`;

}