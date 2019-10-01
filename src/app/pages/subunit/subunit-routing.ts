import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSubUnitComponent } from './add-sub-unit/add-sub-unit.component';
import { UpdateSubUnitComponent } from './update-sub-unit/update-sub-unit.component';
import { ListSubUnitComponent } from './list-sub-unit/list-sub-unit.component';

const routes: Routes = [
    {
        path: 'add', component: AddSubUnitComponent
    },
    {
        path: 'update', component: UpdateSubUnitComponent
    },
    {
        path: 'list', component: ListSubUnitComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubUnitRoutingModule { }
