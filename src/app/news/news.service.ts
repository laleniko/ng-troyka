import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NewsModel} from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsModel[]> {
    return this.http.get<any>('http://admin.mostroika.ru/angular/items/news').pipe(
      map(response => response.data)
    );

  }
}
