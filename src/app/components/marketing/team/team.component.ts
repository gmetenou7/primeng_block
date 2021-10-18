import { Component } from '@angular/core';

@Component({
    templateUrl: './team.component.html'
})
export class TeamComponent {

    visibleMember: number;

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center font-bold text-900 text-5xl mb-3">The Team</div>
    <div class="text-center text-xl line-height-3 text-600 mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="grid">
        <div class="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-1.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-3">Annette Black</div>
            <div class="text-blue-600 text-xl mb-3">Software Developer</div>
            <div class="inline-flex align-items-center">
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-twitter text-xl"></i>
                </a>
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-github text-xl"></i>
                </a>
                <a class="text-600 cursor-pointer">
                    <i class="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div class="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-3">Leslie Alexander</div>
            <div class="text-blue-600 text-xl mb-3">Software Tester</div>
            <div class="inline-flex align-items-center">
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-twitter text-xl"></i>
                </a>
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-github text-xl"></i>
                </a>
                <a class="text-600 cursor-pointer">
                    <i class="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div class="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-m-1.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-3">Ralph Edward</div>
            <div class="text-blue-600 text-xl mb-3">UI/UX Designer</div>
            <div class="inline-flex align-items-center">
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-twitter text-xl"></i>
                </a>
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-github text-xl"></i>
                </a>
                <a class="text-600 cursor-pointer">
                    <i class="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div class="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-m-2.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-3">Robert Fox</div>
            <div class="text-blue-600 text-xl mb-3">Software Developer</div>
            <div class="inline-flex align-items-center">
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-twitter text-xl"></i>
                </a>
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-github text-xl"></i>
                </a>
                <a class="text-600 cursor-pointer">
                    <i class="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div class="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-m-3.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-3">Albert Flores</div>
            <div class="text-blue-600 text-xl mb-3">Team Leader</div>
            <div class="inline-flex align-items-center">
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-twitter text-xl"></i>
                </a>
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-github text-xl"></i>
                </a>
                <a class="text-600 cursor-pointer">
                    <i class="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div class="col-12 md:col-4 text-center mb-0 md:mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-3.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-3">Esther Howard Black</div>
            <div class="text-blue-600 text-xl mb-3">Project Manager</div>
            <div class="inline-flex align-items-center">
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-twitter text-xl"></i>
                </a>
                <a class="mr-3 text-600 cursor-pointer">
                    <i class="pi pi-github text-xl"></i>
                </a>
                <a class="text-600 cursor-pointer">
                    <i class="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center font-bold text-900 text-5xl mb-3">The Team</div>
    <div class="text-center text-xl line-height-3 text-600 mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    <div class="grid text-center">
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Savannah Nguyen</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Jenny Wilson</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Albert Flores</div>
            <div class="text-blue-600 mb-5">Software Tester</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-2.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Ralph Edwards</div>
            <div class="text-blue-600 mb-5">Team Leader</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Eleanor Pena Black</div>
            <div class="text-blue-600 mb-5">Marketing Specialist</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Annette Black</div>
            <div class="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-5.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Arlene McCoy</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-3.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">James Wilson</div>
            <div class="text-blue-600 mb-5">Product Manager</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-6.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Darlene Robertson</div>
            <div class="text-blue-600 mb-5">Software Tester</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-7.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Kristin Watson</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-4.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Floyd Miles</div>
            <div class="text-blue-600 mb-5">Software Tester</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-8.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Jane Olivia</div>
            <div class="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-5.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Robert Fox</div>
            <div class="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-6.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Devon Lane</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-7.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Jacob Davies</div>
            <div class="text-blue-600 mb-5">Accountant</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-9.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Leslie Alexander</div>
            <div class="text-blue-600 mb-5">Financial Analyst</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-8.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Guy Hawkins</div>
            <div class="text-blue-600 mb-5">Marketing Manager</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-10.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Jane Cooper</div>
            <div class="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-9.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Michael Young</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-11.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Dianne Russell</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-10.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Oliver Daniels</div>
            <div class="text-blue-600 mb-5">Marketing Specialist</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-11.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Josh Alison</div>
            <div class="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-12.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Juan Alberto</div>
            <div class="text-blue-600 mb-5">Financial Planner</div>
        </div>
        <div class="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-12.png" class="mb-3" />
            <div class="text-xl text-900 font-medium mb-2">Julia Karen</div>
            <div class="text-blue-600 mb-0 md:mb-5">UI/UX Designer</div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="font-bold text-900 text-5xl mb-3 text-center">Meet the People</div>
    <div class="text-xl line-height-3 text-600 mb-6 text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    <div class="flex justify-content-center flex-column lg:flex-row">
        <div class="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card">
            <img src="assets/images/blocks/avatars/square/avatar-f-1.jpg" class="mb-3 w-full" />
            <div class="flex justify-content-between align-items-center">
                <div class="pr-3">
                    <div class="text-xl text-900 font-medium mb-2">Claire Davies</div>
                    <div class="text-blue-600">Software Developer</div>
                </div>
                <div class="flex flex-nowrap">
                    <button pButton pRipple class="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter"></button>
                    <button pButton pRipple class="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github"></button>
                </div>
            </div>
        </div>
        <div class="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card">
            <img src="assets/images/blocks/avatars/square/avatar-m-1.jpg" class="mb-3 w-full" />
            <div class="flex justify-content-between align-items-center">
                <div class="pr-3">
                    <div class="text-xl text-900 font-medium mb-2">Alber Flores</div>
                    <div class="text-blue-600">Team Leader</div>
                </div>
                <div class="flex flex-nowrap">
                    <button pButton pRipple class="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter"></button>
                    <button pButton pRipple class="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github"></button>
                </div>
            </div>
        </div>
        <div class="shadow-2 p-4 surface-card">
            <img src="assets/images/blocks/avatars/square/avatar-f-2.jpg" class="mb-3 w-full" />
            <div class="flex justify-content-between align-items-center">
                <div class="pr-3">
                    <div class="text-xl text-900 font-medium mb-2">Eleanor Pena</div>
                    <div class="text-blue-600">Product Manager</div>
                </div>
                <div class="flex flex-nowrap">
                    <button pButton pRipple class="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter"></button>
                    <button pButton pRipple class="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block4: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-4 pr-0 lg:pr-4">
            <div class="text-900 text-5xl font-bold mb-3">Meet our team</div>
            <p class="text-700 text-lg line-height-3">Enim diam vulputate ut pharetra sit amet aliquam id. Consequat nisl vel pretium lectus quam id leo in. 
                Nibh sit amet commodo nulla facilisi nullam vehicula. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.</p>
        </div>
        <div class="col-12 lg:col-8">
            <div class="grid">
                <div class="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-1.png" class="mb-4 w-full" />
                    <div class="font-medium text-xl mb-1 text-900">Jacob Jones</div>
                    <span class="text-600 font-medium">UI/UX Designer</span>
                    <p class="line-height-3 mt-3 mb-3">Vulputate ut pharetra sit amet. Netus et malesuada fames ac turpis egestas. 
                        Elit eget gravida cum sociis natoque penatibus. Urna id volutpat lacus laoreet non curabitur. In ante metus dictum at.</p>
                    <div class="mb-2">
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
                <div class="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-2.png" class="mb-4 w-full" />
                    <div class="font-medium text-xl mb-1 text-900">Theresa Webb</div>
                    <span class="text-600 font-medium">Project Manager</span>
                    <p class="line-height-3 mt-3 mb-3">Risus feugiat in ante metus dictum. Et egestas quis ipsum suspendisse ultrices. 
                        Risus pretium quam vulputate dignissim suspendisse. Justo nec ultrices dui sapien.</p>
                        <div class="mb-2">
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
                <div class="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-3.png" class="mb-4 w-full" />
                    <div class="font-medium text-xl mb-1 text-900">Esther Howard</div>
                    <span class="text-600 font-medium">Software Developer</span>
                    <p class="line-height-3 mt-3 mb-3">Donec et odio pellentesque diam volutpat commodo sed egestas. 
                        Blandit massa enim nec dui nunc mattis enim ut tellus. Suspendisse faucibus interdum posuere lorem ipsum.</p>
                        <div class="mb-2">
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
                <div class="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-4.png" class="mb-4 w-full" />
                    <div class="font-medium text-xl mb-1 text-900">Darlene Robertson</div>
                    <span class="text-600 font-medium">UI/UX Designer</span>
                    <p class="line-height-3 mt-3 mb-3">Pretium aenean pharetra magna ac placerat vestibulum. 
                        Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non enim..</p>
                    <div class="mb-2">
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabindex="0" class="cursor-pointer"><i class="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center font-bold text-900 text-5xl mb-3">Who Are We?</div>
    <div class="text-center text-xl line-height-3 text-600 mb-6">Faucibus ornare suspendisse sed nisi. Nisl rhoncus mattis rhoncus urna neque viverra justo nec.</div>
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="relative overflow-hidden" (mouseenter)="visibleMember = 0" (mouseleave)="visibleMember = null">
                <img src="assets/images/blocks/team/team-5.png" class="w-full block" />
                <div class="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style="background-color: rgba(0,0,0,0.7)" *ngIf="visibleMember === 0" >
                    <div class="flex flex-column p-5 h-full">
                        <span class="block font-medium text-white text-xl mb-3">Jeff Davies</span>
                        <span class="font-medium text-400">Software Developer</span>
                        <div class="mt-auto">
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="relative overflow-hidden" (mouseenter)="visibleMember = 1" (mouseleave)="visibleMember = null">
                <img src="assets/images/blocks/team/team-6.png" class="w-full block" />
                <div class="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style="background-color: rgba(0,0,0,0.7)" *ngIf="visibleMember === 1" >
                    <div class="flex flex-column p-5 h-full">
                        <span class="block font-medium text-white text-xl mb-3">Kristin Watson</span>
                        <span class="font-medium text-400">UI/UX Designer</span>
                        <div class="mt-auto">
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="relative overflow-hidden" (mouseenter)="visibleMember = 2" (mouseleave)="visibleMember = null">
                <img src="assets/images/blocks/team/team-7.png" class="w-full block" />
                <div class="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style="background-color: rgba(0,0,0,0.7)" *ngIf="visibleMember === 2" >
                    <div class="flex flex-column p-5 h-full">
                        <span class="block font-medium text-white text-xl mb-3">Jenna Williams</span>
                        <span class="font-medium text-400">Marketing Specialist</span>
                        <div class="mt-auto">
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="relative overflow-hidden" (mouseenter)="visibleMember = 3" (mouseleave)="visibleMember = null">
                <img src="assets/images/blocks/team/team-8.png" class="w-full block" />
                <div class="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style="background-color: rgba(0,0,0,0.7)" *ngIf="visibleMember === 3" >
                    <div class="flex flex-column p-5 h-full">
                        <span class="block font-medium text-white text-xl mb-3">Joe Clifford</span>
                        <span class="font-medium text-400">Customer Relations</span>
                        <div class="mt-auto">
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabindex="0" class="cursor-pointer text-white"><i class="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}