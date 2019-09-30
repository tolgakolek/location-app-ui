import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBuildComponent } from './AddBuild/addBuild.component';

const routes: Routes = [
    {
        path: 'add-build',
        component: AddBuildComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddCampusRoutingModule { }
