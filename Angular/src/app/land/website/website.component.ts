import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { Category, Item } from '../interfaces/website.interface';
import { PageInfoService } from '../services/page-info.service';
import { WebsiteService } from '../services/website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],

})
export class WebsiteComponent implements OnInit {

  selectedCat: string = '1';
  reloadedItems: Item[] = [];
  getItems: Item[] = [];
  getCategories: Category[] = [];
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private webService: WebsiteService,
    private observer: BreakpointObserver,
    public _pageInfoService: PageInfoService
  ) { }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInit(): void {
    this.webService.getItems()
      .subscribe(resp => {
        this.getItems = resp;
        this.reloadItems(this.selectedCat);
      });

    this.webService.getCategories()
      .subscribe(resp => { this.getCategories = resp; });
  }

  reloadItems(cat_id: string) {


    this.selectedCat = cat_id != '' ? cat_id : '';
    this.reloadedItems = this.getItems.filter(item => item.category_id == this.selectedCat);
  }

}
