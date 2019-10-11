import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserRoleComponent } from './add-user-role/add-user-role.component';
import { UpdateUserRoleComponent } from './update-user-role/update-user-role.component';
import { ListUserRoleComponent } from './list-user-role/list-user-role.component';


const routes: Routes = [
    {
        path: 'add', component: AddUserRoleComponent
    },
    {
        path: 'update/:id', component: UpdateUserRoleComponent
    },
    {
        path: 'list', component: ListUserRoleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoleRoutingModule { }
