import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/user-title-table.service';
import { UserTitleAdvancedSortableDirective, UserTitleSortEvent } from '../../../core/helpers/table-sortable/user-title-advanced-sortable.directive';
import { UserTitle } from 'src/app/core/models/user_title.models';

@Component({
  selector: 'app-list-user-title',
  templateUrl: './list-user-title.component.html',
  styleUrls: ['./list-user-title.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListUserTitleComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  tables$: Observable<UserTitle[]>;
  total$: Observable<number>;

  @ViewChildren(UserTitleAdvancedSortableDirective) headers: QueryList<UserTitleAdvancedSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Ünvan Listele', path: '/', active: true }];
  }

  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort({ column, direction }: UserTitleSortEvent) {
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
