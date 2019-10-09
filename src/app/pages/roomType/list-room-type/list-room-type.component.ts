import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/room-type-table.service';
import { RoomTypeAdvancedSortableDirective, RoomTypeSortEvent } from '../../../core/helpers/table-sortable/room-type-advanced-sortable.directive';
import { RoomType } from 'src/app/core/models/room_types.models';


@Component({
  selector: 'app-list-room-type',
  templateUrl: './list-room-type.component.html',
  styleUrls: ['./list-room-type.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListRoomTypeComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  tables$: Observable<RoomType[]>;
  total$: Observable<number>;

  @ViewChildren(RoomTypeAdvancedSortableDirective) headers: QueryList<RoomTypeAdvancedSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Oda Türü Listele', path: '/', active: true }];
  }

   /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: RoomTypeSortEvent) {
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
