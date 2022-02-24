import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WebsiteResponse } from '../interfaces/website.interface';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getItems() {

    const url: string = `${this.baseUrl}/land`;
    return this.http.get<WebsiteResponse>(url)
      .pipe(
        map(resp => resp.data),
        catchError((err) => of(err.error.msg))
      );

  }
}
