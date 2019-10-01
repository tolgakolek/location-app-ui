import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceTypeComponent } from './add-device-type/add-device-type.component'
import { UpdateDeviceTypeComponent } from './update-device-type/update-device-type.component';
import { ListDeviceTypeComponent } from './list-device-type/list-device-type.component';


const routes: Routes = [
    {
        path: 'add', component: AddDeviceTypeComponent
    },
    {
        path: 'update', component: UpdateDeviceTypeComponent
    },
    {
        path: 'list', component: ListDeviceTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeviceTypeRoutingModule { }
