import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { RoomTypeRoutingModule } from './room-type-routing';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { UpdateRoomTypeComponent } from './update-room-type/update-room-type.component';
import { ListRoomTypeComponent } from './list-room-type/list-room-type.component';


@NgModule({
  declarations: [AddRoomTypeComponent, UpdateRoomTypeComponent, ListRoomTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbModule,
    NgApexchartsModule,
    ChartsModule,
    NgbCollapseModule,
    UIModule,
    RoomTypeRoutingModule
  ]
})
export class RoomTypeModule { }
