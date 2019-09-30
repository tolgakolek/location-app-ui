import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCampusComponent } from './AddCampus/addCampus.component';

const routes: Routes = [
    {
        path: 'add-campus',
        component: AddCampusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddCampusRoutingModule { }