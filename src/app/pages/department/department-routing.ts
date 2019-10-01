import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';

const routes: Routes = [
    {
        path: 'add', component: AddDepartmentComponent
    },
    {
        path: 'update', component: UpdateDepartmentComponent
    },
    {
        path: 'list', component: ListDepartmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }
