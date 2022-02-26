import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, Item } from '../interfaces/website.interface';
import { PageInfoService } from '../services/page-info.service';
import { WebsiteService } from '../services/website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html'
})
export class WebsiteComponent implements OnInit {

  public selectedCat: string = '5';
  public reloadedItems: Item[] = [];
  public getItems: Item[] = [];
  public getCategories: Category[] = [];

  constructor(
    private webService: WebsiteService,
    public _pageInfoService: PageInfoService
  ) { }


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

    this.selectedCat = cat_id ? cat_id : '1';
    this.reloadedItems = this.getItems.filter(item => item.category_id == this.selectedCat);
  }

}
