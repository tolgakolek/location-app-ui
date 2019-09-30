import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { DashboardsRoutingModule } from './dashboards-routing';

import { DefaultDashboardComponent } from './default/default.component';

@NgModule({
  declarations: [DefaultDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgApexchartsModule,
    ChartsModule,
    NgbCollapseModule,
    UIModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
