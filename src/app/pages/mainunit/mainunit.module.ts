import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { MainUnitRoutingModule } from './mainunit-routing';

import { AddMainUnitComponent } from './add-main-unit/add-main-unit.component';
import { UpdateMainUnitComponent } from './update-main-unit/update-main-unit.component';
import { ListMainUnitComponent } from './list-main-unit/list-main-unit.component';
import { MainUnitSortableDirective } from '../../core/helpers/table-sortable/main-unit-advanced-sortable.directive';


@NgModule({
  declarations: [AddMainUnitComponent, UpdateMainUnitComponent, ListMainUnitComponent,MainUnitSortableDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbModule,
    NgApexchartsModule,
    ChartsModule,
    NgbCollapseModule,
    UIModule,
    MainUnitRoutingModule
  ]
})
export class MainUnitModule { }
