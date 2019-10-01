import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbModule , NgbTooltipModule,NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from '../../shared/ui/ui.module';
import { AddCampusRoutingModule } from './addCampus-routing';

import { AddCampusComponent } from './AddCampus/addCampus.component';
import { ListCampusComponent } from './list-campus/list-campus.component';

@NgModule({
  declarations: [AddCampusComponent, ListCampusComponent],
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbCollapseModule,
    UIModule,
    AddCampusRoutingModule
  ],
})
export class AddCampusModule { }
