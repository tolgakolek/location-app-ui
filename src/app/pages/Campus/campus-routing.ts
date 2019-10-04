import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCampusComponent } from './list-campus/list-campus.component';
import { AddCampusComponent } from './add-campus/addCampus.component';

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
