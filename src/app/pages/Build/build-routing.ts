import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBuildComponent } from './add-build/addBuild.component';

const routes: Routes = [
    {
        path: 'add',
        component: AddBuildComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddCampusRoutingModule { }
