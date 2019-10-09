import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/user-role-table.service';
import { UserRoleSortableDirective, UserRoleSortEvent } from '../../../core/helpers/table-sortable/user-role-advanced-sortable.directive';
import { UserRole } from 'src/app/core/models/user_role.models';

@Component({
  selector: 'app-list-user-role',
  templateUrl: './list-user-role.component.html',
  styleUrls: ['./list-user-role.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListUserRoleComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  tables$: Observable<UserRole[]>;
  total$: Observable<number>;

  @ViewChildren(UserRoleSortableDirective) headers: QueryList<UserRoleSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Kullanıcı Rolü Listele', path: '/', active: true }];
  }

   /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: UserRoleSortEvent) {
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
