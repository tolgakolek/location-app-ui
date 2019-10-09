import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { SiteRoutingModule } from './site-routing';
import { AddSiteComponent } from './add-site/add-site.component';
import { UpdateSiteComponent } from './update-site/update-site.component';
import { ListSiteComponent } from './list-site/list-site.component';
import { SiteAdvancedSortableDirective } from 'src/app/core/helpers/table-sortable/site-advanced-sortable.directive';


@NgModule({
  declarations: [AddSiteComponent, UpdateSiteComponent, ListSiteComponent,SiteAdvancedSortableDirective],
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
    SiteRoutingModule
  ]
})
export class SiteModule { }
