import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/user-contact-type-table.service';
import { UserContactTypeSortableDirective, UserContactTypeSortEvent } from '../../../core/helpers/table-sortable/user-contact-type-advanced-sortable.directive';
import { UserContactTypes } from 'src/app/core/models/user_contact_type.models';

@Component({
  selector: 'app-list-user-contact-type',
  templateUrl: './list-user-contact-type.component.html',
  styleUrls: ['./list-user-contact-type.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListUserContactTypeComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  tables$: Observable<UserContactTypes[]>;
  total$: Observable<number>;

  @ViewChildren(UserContactTypeSortableDirective) headers: QueryList<UserContactTypeSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'İletişim Türü Listele', path: '/', active: true }];
  }

   /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: UserContactTypeSortEvent) {
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
