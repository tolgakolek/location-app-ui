import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboards/dashboard-1', pathMatch: 'full' },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'campus', loadChildren: () => import('./campus/campus.module').then(m => m.AddCampusModule) },
  { path: 'build', loadChildren: () => import('./build/build.module').then(m => m.AddBuildModule) },
  { path: 'block', loadChildren: () => import('./block/block.module').then(m => m.BlockModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'site', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },
  { path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) },
  { path: 'devicetype', loadChildren: () => import('./devicetype/devicetype.module').then(m => m.DeviceTypeModule) },
  { path: 'floor', loadChildren: () => import('./floor/floor.module').then(m => m.FloorModule) },
  { path: 'mainunit', loadChildren: () => import('./mainunit/mainunit.module').then(m => m.MainUnitModule) },
  { path: 'subunit', loadChildren: () => import('./subunit/subunit.module').then(m => m.SubUnitModule) },
  { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
  { path: 'roomType', loadChildren: () => import('./roomType/room-type.module').then(m => m.RoomTypeModule) },
  { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
  { path: 'usercontacttype', loadChildren: () => import('./userContactType/user-contact-type.module').then(m => m.UserContactTypeModule) },
  { path: 'userrole', loadChildren: () => import('./userRole/user-role.module').then(m => m.UserRoleModule) },
  { path: 'usertitle', loadChildren: () => import('./userTitle/user-title.module').then(m => m.UserTitleModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
