import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockViewer } from './blockviewer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BlockViewer,
    ],
    exports: [
        BlockViewer,
    ]
})
export class BlockViewerModule { }