import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
})
export class SearchLocationComponent implements OnInit {
  langData: string = 'PAGES.HOME_PAGE.SEARCH_LOCATION.';
  listResult: string[] = [];
  userAddress?: string;
  filteredAddress: string[] = [];
  address = ['Số 1 VVN', 'UFM', '92 Hoàng Diệu', 'IIG Tp.HCM'];
  search(): void {
    if (this.userAddress !== '') {
      this.router.navigate(['/cuisines']);
    }
  }

  onChange(value: string): void {
    if (value) {
      this.filteredAddress = this.address.filter(adr => adr.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
  }

  ngOnInit(): void {

  }

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    translate.use(localStorage.getItem('language')?.toString() ?? 'vi');
    this.filteredAddress = this.address;
  }
}
