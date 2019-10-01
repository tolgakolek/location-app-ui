import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { SubUnitRoutingModule } from './subunit-routing';

import { AddSubUnitComponent } from './add-sub-unit/add-sub-unit.component';
import { UpdateSubUnitComponent } from './update-sub-unit/update-sub-unit.component';
import { ListSubUnitComponent } from './list-sub-unit/list-sub-unit.component';


@NgModule({
  declarations: [AddSubUnitComponent, UpdateSubUnitComponent, ListSubUnitComponent],
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
    SubUnitRoutingModule
  ]
})
export class SubUnitModule { }
