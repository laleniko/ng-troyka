import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FaqModel } from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<FaqModel[]> {
    return this.http.get<any>('https://admin.mostroika.ru/angular/items/faq').pipe(
      map(response => response.data)
    );
  }
}
