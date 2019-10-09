import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../core/services/table-search-service/site-table.service';
import { CampusAdvancedSortableDirective,CampusSortEvent } from 'src/app/core/helpers/table-sortable/campus-advanced-sortable.directive';
import { Sites } from 'src/app/core/models/sites.models';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.scss'],
  providers: [TableService, DecimalPipe]
})

/**
 * Advanced table component - handling the advanced table with sidebar and content
 */
export class ListSiteComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  searcResult:true;
  tables$: Observable<Sites[]>;
  total$: Observable<number>;

  @ViewChildren(CampusAdvancedSortableDirective) headers: QueryList<CampusAdvancedSortableDirective>;

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
  onSort({ column, direction }: CampusSortEvent) {
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
