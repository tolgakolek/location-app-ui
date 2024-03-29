import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ; 
// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule, NgbAlertModule  } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';

import { UIModule } from '../../shared/ui/ui.module';
import { BlockRoutingModule } from './block-routing';

import { AddBlockComponent } from './add-block/add-block.component';
import { UpdateBlockComponent } from './update-block/update-block.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { BlockAdvancedSortableDirective } from 'src/app/core/helpers/table-sortable/block-advanced-sortable.directive';

@NgModule({
  declarations: [AddBlockComponent, UpdateBlockComponent, ListBlockComponent, BlockAdvancedSortableDirective],
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
    BlockRoutingModule
  ]
})
export class BlockModule { }
