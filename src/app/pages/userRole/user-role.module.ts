import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { UserRoleRoutingModule } from './user-role-routing';
import { AddUserRoleComponent } from './add-user-role/add-user-role.component';
import { UpdateUserRoleComponent } from './update-user-role/update-user-role.component';
import { ListUserRoleComponent } from './list-user-role/list-user-role.component';
import { UserRoleSortableDirective } from 'src/app/core/helpers/table-sortable/user-role-advanced-sortable.directive';


@NgModule({
  declarations: [AddUserRoleComponent, UpdateUserRoleComponent, ListUserRoleComponent, UserRoleSortableDirective],
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
    UserRoleRoutingModule
  ]
})
export class UserRoleModule { }
