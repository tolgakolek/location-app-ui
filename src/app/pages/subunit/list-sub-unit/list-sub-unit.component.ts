import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/sub-unit-table.service';
import { SubUnitAdvancedSortableDirective,SubUnitSortEvent } from '../../../core/helpers/table-sortable/sub-unit-advanced-sortable.directive';
import { SubUnits } from 'src/app/core/models/sub_units.models';

@Component({
  selector: 'app-list-sub-unit',
  templateUrl: './list-sub-unit.component.html',
  styleUrls: ['./list-sub-unit.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListSubUnitComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  searcResult:true;
  tables$: Observable<SubUnits[]>;
  total$: Observable<number>;

  @ViewChildren(SubUnitAdvancedSortableDirective) headers: QueryList<SubUnitAdvancedSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Alt Birim Listele', path: '/', active: true }];
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SubUnitSortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
