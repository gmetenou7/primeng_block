import { NgModule } from '@angular/core';
import { BlockViewer } from './blockviewer.component';

@NgModule({
    declarations: [
        BlockViewer,
    ],
    exports: [
        BlockViewer,
    ]
})
export class BlockViewerModule { }