import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/device-type-table.service';
import { DeviceTypeAdvancedSortableDirective,DeviceTypeSortEvent } from '../../../core/helpers/table-sortable/device-type-advanced-sortable.directive';
import { DeviceTypes } from 'src/app/core/models/device_types.models';

@Component({
  selector: 'app-list-device-type',
  templateUrl: './list-device-type.component.html',
  styleUrls: ['./list-device-type.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListDeviceTypeComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  tables$: Observable<DeviceTypes[]>;
  total$: Observable<number>;

  @ViewChildren(DeviceTypeAdvancedSortableDirective) headers: QueryList<DeviceTypeAdvancedSortableDirective>;

  constructor(public service: TableService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Cihaz Türü Listele', path: '/', active: true }];
   
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: DeviceTypeSortEvent) {
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
