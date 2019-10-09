import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { DeviceTypeRoutingModule } from './devicetype-routing';

import { AddDeviceTypeComponent } from './add-device-type/add-device-type.component'
import { UpdateDeviceTypeComponent } from './update-device-type/update-device-type.component';
import { ListDeviceTypeComponent } from './list-device-type/list-device-type.component';
import { DeviceTypeAdvancedSortableDirective } from 'src/app/core/helpers/table-sortable/device-type-advanced-sortable.directive';

@NgModule({
  declarations: [AddDeviceTypeComponent, UpdateDeviceTypeComponent, ListDeviceTypeComponent, DeviceTypeAdvancedSortableDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
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
    DeviceTypeRoutingModule    
  ]
})
export class DeviceTypeModule { }
