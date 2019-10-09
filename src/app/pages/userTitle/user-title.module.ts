import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { UserTitleRoutingModule } from './user-title-routing';
import { AddUserTitleComponent } from './add-user-title/add-user-title.component';
import { UpdateUserTitleComponent } from './update-user-title/update-user-title.component';
import { ListUserTitleComponent } from './list-user-title/list-user-title.component';
import { UserTitleAdvancedSortableDirective } from 'src/app/core/helpers/table-sortable/user-title-advanced-sortable.directive';


@NgModule({
  declarations: [AddUserTitleComponent, UpdateUserTitleComponent, ListUserTitleComponent , UserTitleAdvancedSortableDirective],
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
    UserTitleRoutingModule
  ]
})
export class UserTitleModule { }
