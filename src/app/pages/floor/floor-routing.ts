import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFloorComponent } from './add-floor/add-floor.component';
import { UpdateFloorComponent } from './update-floor/update-floor.component';
import { ListFloorComponent } from './list-floor/list-floor.component';

const routes: Routes = [
    {
        path: 'add', component: AddFloorComponent
    },
    {
        path: 'update', component: UpdateFloorComponent
    },
    {
        path: 'list', component: ListFloorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FloorRoutingModule { }
