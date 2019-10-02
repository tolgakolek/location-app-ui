import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { UserContactTypeRoutingModule } from './user-contact-type-routing';
import { AddUserContactTypeComponent } from './add-user-contact-type/add-user-contact-type.component';
import { UpdateUserContactTypeComponent } from './update-user-contact-type/update-user-contact-type.component';
import { ListUserContactTypeComponent } from './list-user-contact-type/list-user-contact-type.component';


@NgModule({
  declarations: [AddUserContactTypeComponent, UpdateUserContactTypeComponent, ListUserContactTypeComponent],
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
    UserContactTypeRoutingModule
  ]
})
export class UserContactTypeModule { }
