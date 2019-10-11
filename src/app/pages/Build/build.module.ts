import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ; 
// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbAlertModule  } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { BuildRoutingModule } from './build-routing';

import { AddBuildComponent } from './add-build/addBuild.component';
import { ListBuildComponent } from './list-build/list-build.component';
import { BuildAdvancedSortableDirective } from 'src/app/core/helpers/table-sortable/build-advanced-sortable.directive';
import { UpdateBuildComponent } from './update-build/update-build.component';

@NgModule({
  declarations: [AddBuildComponent, ListBuildComponent, BuildAdvancedSortableDirective, UpdateBuildComponent],
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
    NgbAlertModule,
    NgbModule,
    BuildRoutingModule
  ]
})
export class AddBuildModule { }
