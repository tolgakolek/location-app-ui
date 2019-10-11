import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBuildComponent } from './add-build/addBuild.component';
import { ListBuildComponent } from './list-build/list-build.component';
import { UpdateBuildComponent } from './update-build/update-build.component';

const routes: Routes = [
    {
        path: 'add',
        component: AddBuildComponent
    },
    {
        path: 'update/:id',
        component: UpdateBuildComponent
    },
    {
        path: 'list',
        component: ListBuildComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuildRoutingModule { }
