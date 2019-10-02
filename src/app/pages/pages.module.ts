import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardsModule } from './dashboards/dashboards.module';
import { AddBuildModule } from './Build/build.module';
import { AddCampusModule } from './Campus/campus.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BlockModule } from './block/block.module';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { DeviceModule } from './device/device.module';
import { DeviceTypeModule } from './devicetype/devicetype.module';
import { FloorModule } from './floor/floor.module';
import { MainUnitModule } from './mainunit/mainunit.module';
import { SiteModule } from './site/site.module';
import { SubUnitModule } from './subunit/subunit.module';
import { RoomTypeModule } from './roomType/room-type.module';
import { RoomModule } from './room/room.module';
import { UserContactTypeModule } from './userContactType/user-contact-type.module';
import { UserRoleModule } from './userRole/user-role.module';
import { UserTitleModule } from './userTitle/user-title.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    DashboardsModule,
    PagesRoutingModule,
    BlockModule,
    AddBuildModule,
    AddCampusModule,
    UserModule,
    DepartmentModule,
    DeviceModule,
    DeviceTypeModule,
    FloorModule,
    SiteModule,
    SubUnitModule,
    MainUnitModule,
    RoomTypeModule,
    RoomModule,
    UserContactTypeModule,
    UserRoleModule,
    UserTitleModule
  ]
})
export class PagesModule { }
