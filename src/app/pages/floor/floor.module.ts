import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { FloorRoutingModule } from './floor-routing';

import { AddFloorComponent } from './add-floor/add-floor.component';
import { UpdateFloorComponent } from './update-floor/update-floor.component';
import { ListFloorComponent } from './list-floor/list-floor.component';



@NgModule({
  declarations: [AddFloorComponent, UpdateFloorComponent, ListFloorComponent],
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
    FloorRoutingModule
  ]
})
export class FloorModule { }
