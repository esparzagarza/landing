import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, Item } from '../interfaces/website.interface';
import { PageInfoService } from '../services/page-info.service';
import { WebsiteService } from '../services/website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html'
})
export class WebsiteComponent implements OnInit {

  public selectedCat: Category | any = {};
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
        this.selectedCat = { id: '1', name: 'Todos los Sistemas', icon: 'home' };
        this.getItems = resp;
        this.reloadItems('1');
      });

    this.webService.getCategories()
      .subscribe(resp => { this.getCategories = resp; });
  }

  reloadItems(cat_id: string) {
    this.selectedCat = this.getCategories.find(cat => cat.id == cat_id);
    this.reloadedItems = this.getItems.filter(item => item.category_id == this.selectedCat.id);
  }

}
