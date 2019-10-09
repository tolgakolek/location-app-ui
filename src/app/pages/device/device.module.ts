import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { DeviceRoutingModule } from './device-routing';

import { AddDeviceComponent } from './add-device/add-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { ListDeviceComponent } from './list-device/list-device.component';
import { DeviceAdvancedSortableDirective } from 'src/app/core/helpers/table-sortable/device-advanced-sortable.directive';

@NgModule({
  declarations: [AddDeviceComponent, UpdateDeviceComponent, ListDeviceComponent,DeviceAdvancedSortableDirective],
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
    DeviceRoutingModule
    
  ]
})
export class DeviceModule { }
