import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { ListRoomComponent } from './list-room/list-room.component';


const routes: Routes = [
    {
        path: 'add', component: AddRoomComponent
    },
    {
        path: 'update', component: UpdateRoomComponent
    },
    {
        path: 'list', component: ListRoomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomRoutingModule { }
