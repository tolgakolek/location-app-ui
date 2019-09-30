import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBlockComponent } from './add-block/add-block.component';

const routes: Routes = [
    {
        path: 'addblock',
        component: AddBlockComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlockRoutingModule { }
