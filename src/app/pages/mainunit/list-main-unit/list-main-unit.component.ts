import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/main-unit-table.service';
import { MainUnitSortableDirective,MainUnitSortEvent } from '../../../core/helpers/table-sortable/main-unit-advanced-sortable.directive';
import { MainUnits } from 'src/app/core/models/main_units.models';

@Component({
  selector: 'app-list-main-unit',
  templateUrl: './list-main-unit.component.html',
  styleUrls: ['./list-main-unit.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListMainUnitComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  searcResult:true;
  tables$: Observable<MainUnits[]>;
  total$: Observable<number>;

  @ViewChildren(MainUnitSortableDirective) headers: QueryList<MainUnitSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Site Listele', path: '/', active: true }];
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: MainUnitSortEvent) {
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
