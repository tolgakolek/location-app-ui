import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCampusComponent } from './AddCampus/addCampus.component';
import { ListCampusComponent } from './list-campus/list-campus.component';

const routes: Routes = [
    {
        path: 'add',
        component: AddCampusComponent
    },
    {
        path: 'list',
        component: ListCampusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddCampusRoutingModule { }