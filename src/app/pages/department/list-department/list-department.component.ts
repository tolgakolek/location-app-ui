import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/department-table.service';
import { DepartmentAdvancedSortableDirective, DepartmentSortEvent } from 'src/app/core/helpers/table-sortable/department-advanced-sortable.directive';
import { Department } from 'src/app/core/models/department.models';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListDepartmentComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  searcResult:true;
  tables$: Observable<Department[]>;
  total$: Observable<number>;

  @ViewChildren(DepartmentAdvancedSortableDirective) headers: QueryList<DepartmentAdvancedSortableDirective>;

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
  onSort({ column, direction }: DepartmentSortEvent) {
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
