import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockViewer } from './blockviewer.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        CommonModule,
        TooltipModule
    ],
    declarations: [
        BlockViewer,
    ],
    exports: [
        BlockViewer,
    ]
})
export class BlockViewerModule { }