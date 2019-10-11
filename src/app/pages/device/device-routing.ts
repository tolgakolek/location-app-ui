import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceComponent } from './add-device/add-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { ListDeviceComponent } from './list-device/list-device.component';


const routes: Routes = [
    {
        path: 'add', component: AddDeviceComponent
    },
    {
        path: 'update/:id', component: UpdateDeviceComponent
    },
    {
        path: 'list', component: ListDeviceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeviceRoutingModule { }
