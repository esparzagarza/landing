import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageInfo } from '../interfaces/pageInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};

  constructor(private http: HttpClient) {
    this.loadInfo();
  }

  private loadInfo() {
    this.http.get('assets/data/pageInfo.json')
      .subscribe((result: PageInfo) => {
        this.info = result;
      });
  }
}
