import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserContactTypeComponent } from './add-user-contact-type/add-user-contact-type.component';
import { UpdateUserContactTypeComponent } from './update-user-contact-type/update-user-contact-type.component';
import { ListUserContactTypeComponent } from './list-user-contact-type/list-user-contact-type.component';


const routes: Routes = [
    {
        path: 'add', component: AddUserContactTypeComponent
    },
    {
        path: 'update/:id', component: UpdateUserContactTypeComponent
    },
    {
        path: 'list', component: ListUserContactTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserContactTypeRoutingModule { }
