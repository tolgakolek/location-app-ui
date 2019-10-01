import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardsModule } from './dashboards/dashboards.module';
import { AddBuildModule } from './Build/build.module';
import { AddCampusModule } from './Campus/campus.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BlockModule } from './block/block.module';
import { UserModule } from './user/user.module';

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
    UserModule
  ]
})
export class PagesModule { }
