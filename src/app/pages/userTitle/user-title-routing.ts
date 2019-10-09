import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserTitleComponent } from './add-user-title/add-user-title.component';
import { UpdateUserTitleComponent } from './update-user-title/update-user-title.component';
import { ListUserTitleComponent } from './list-user-title/list-user-title.component';


const routes: Routes = [
    {
        path: 'add', component: AddUserTitleComponent
    },
    {
        path: 'update', component: UpdateUserTitleComponent
    },
    {
        path: 'list', component: ListUserTitleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserTitleRoutingModule { }
