import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMainUnitComponent } from './add-main-unit/add-main-unit.component';
import { UpdateMainUnitComponent } from './update-main-unit/update-main-unit.component';
import { ListMainUnitComponent } from './list-main-unit/list-main-unit.component';


const routes: Routes = [
    {
        path: 'add', component: AddMainUnitComponent
    },
    {
        path: 'update', component: UpdateMainUnitComponent
    },
    {
        path: 'list', component: ListMainUnitComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainUnitRoutingModule { }
