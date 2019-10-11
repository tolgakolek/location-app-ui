import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBlockComponent } from './add-block/add-block.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { UpdateBlockComponent } from './update-block/update-block.component';

const routes: Routes = [
    {
        path: 'add',
        component: AddBlockComponent
    },
    {
        path: 'list',
        component: ListBlockComponent
    },
    {
        path: 'update/:id',
        component: UpdateBlockComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlockRoutingModule { }
