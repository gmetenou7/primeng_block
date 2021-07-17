import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './formlayout.component.html'
})
export class FormLayoutComponent implements OnInit {

    block1 = `
<div class="surface-section">
    <div class="grid">
        <div class="col-12 lg:col-2">
            <div class="text-900 font-medium text-xl mb-3">Profile</div>
            <p class="m-0 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio.</p>
        </div>
        <div class="col-12 lg:col-10">
            <div class="grid formgrid p-fluid">
                <div class="field mb-4 col-12">
                    <label for="nickname" class="font-medium">Nickname</label>
                    <input id="nickname" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12">
                    <label for="avatar" class="font-medium">Avatar</label>
                    <div class="flex align-items-center">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                        <p-fileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize="1000000" styleClass="p-button-outlined p-button-plain" chooseLabel="Upload Image"></p-fileUpload>
                    </div>
                </div>
                <div class="field mb-4 col-12">
                    <label for="bio" class="font-medium">Bio</label>
                    <textarea id="bio" type="text" pInputTextarea rows="5" [autoResize]="true"></textarea>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="email" class="font-medium">Email</label>
                    <input id="email" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="bio" class="font-medium">Country</label>
                    <p-dropdown [options]="countries" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
                        <ng-template let-country pTemplate="item">
                            <div class="flex align-items-center">
                                <img src="assets/images/blocks/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + country.code.toLowerCase()" style="width:18px"/>
                                <div>{{country.name}}</div>
                            </div>
                        </ng-template>
                    </p-dropdown>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="city" class="font-medium">City</label>
                    <input id="city" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="state" class="font-medium">State</label>
                    <input id="state" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12">
                    <label for="website" class="font-medium">Website</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">www</span>
                        <input id="website" type="text" pInputText>      
                    </div>
                </div>
                <div class="field mb-4 col-12">
                    <label for="privacy" class="font-medium">Privacy</label>
                    <div class="flex align-items-center">
                        <p-checkbox [binary]="true"></p-checkbox>
                        <span class="ml-2">Share my data with contacts</span>
                    </div>
                </div>
                <div class="col-12">
                    <button pButton pRipple label="Save Changes" class="w-auto mt-3"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div>
    <div class="text-900 font-medium text-xl mb-3">Profile</div>
    <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet. 
        Egestas integer eget aliquet nibh praesent tristique magna.</p>
    <div class="surface-card p-4 shadow-2 border-round">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12">
                <label for="nickname" class="font-medium">Nickname</label>
                <input id="nickname" type="text" pInputText>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="bio" class="font-medium">Bio</label>
                <textarea id="bio" type="text" pInputTextarea rows="5" [autoResize]="true"></textarea>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="avatar" class="font-medium">Avatar</label>
                <div class="flex align-items-center">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                    <p-fileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize="1000000" styleClass="p-button-outlined p-button-plain" chooseLabel="Upload Image"></p-fileUpload>
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="email" class="font-medium">Email</label>
                <input id="email" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="bio" class="font-medium">Country</label>
                <p-dropdown [options]="countries" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
                    <ng-template let-country pTemplate="item">
                        <div class="flex align-items-center">
                            <img src="assets/images/blocks/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + country.code.toLowerCase()" style="width:18px"/>
                            <div>{{country.name}}</div>
                        </div>
                    </ng-template>
                </p-dropdown>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="city" class="font-medium">City</label>
                <input id="city" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="state" class="font-medium">State</label>
                <input id="state" type="text" pInputText>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="website" class="font-medium">Website</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">www</span>
                    <input id="website" type="text" pInputText>      
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="privacy" class="font-medium">Privacy</label>
                <div class="flex align-items-center">
                    <p-inputSwitch></p-inputSwitch>
                    <span class="ml-2">Share my data with contacts</span>
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="col-12">
                <button pButton pRipple label="Save Changes" class="w-auto mt-3"></button>
            </div>
        </div>
    </div>
</div>`;

    countries: any[];

    ngOnInit() {
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ]; 
    }

}
