import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { UpdateRoomTypeComponent } from './update-room-type/update-room-type.component';
import { ListRoomTypeComponent } from './list-room-type/list-room-type.component';


const routes: Routes = [
    {
        path: 'add', component: AddRoomTypeComponent
    },
    {
        path: 'update', component: UpdateRoomTypeComponent
    },
    {
        path: 'list', component: ListRoomTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomTypeRoutingModule { }
