import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardsModule } from './dashboards/dashboards.module';
import { AddBuildModule } from './Build/addBuild.module';
import { AddCampusModule } from './Campus/addCampus.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BlockModule } from './block/block.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    DashboardsModule,
    PagesRoutingModule,
    BlockModule,
    AddBuildModule,
    AddCampusModule
  ]
})
export class PagesModule { }
