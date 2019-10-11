import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCampusComponent } from './list-campus/list-campus.component';
import { AddCampusComponent } from './add-campus/addCampus.component';
import { UpdateCampusComponent } from './update-campus/update-campus.component';

const routes: Routes = [
    {
        path: 'add',
        component: AddCampusComponent
    },
    {
        path: 'list',
        component: ListCampusComponent
    },
    {
        path: 'update/:id',
        component: UpdateCampusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddCampusRoutingModule { }
