import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { WebsiteService } from '../services/website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
})
export class WebsiteComponent implements OnInit {

  items: Item[] = [];

  constructor(private webService: WebsiteService) { }

  ngOnInit(): void { this.webService.getItems().subscribe(resp => { this.items = resp; }); }

}
