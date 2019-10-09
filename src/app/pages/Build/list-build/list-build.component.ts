import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/build-table.service';
import { BuildAdvancedSortableDirective,BuildSortEvent } from '../../../core/helpers/table-sortable/build-advanced-sortable.directive';
import { Floors } from 'src/app/core/models/floors.models';
import { Build } from 'src/app/core/models/build.models';

@Component({
  selector: 'app-list-build',
  templateUrl: './list-build.component.html',
  styleUrls: ['./list-build.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListBuildComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  searcResult:true;
  tables$: Observable<Build[]>;
  total$: Observable<number>;

  @ViewChildren(BuildAdvancedSortableDirective) headers: QueryList<BuildAdvancedSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Bina Listele', path: '/', active: true }];
   
  }
  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: BuildSortEvent) {
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
