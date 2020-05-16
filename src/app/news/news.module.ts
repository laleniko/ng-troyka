import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { LOCALE_ID } from '@angular/core';



@NgModule({
  declarations: [NewsComponent, NewsDetailsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' } // Для перевода data pipe
  ]
})
export class NewsModule { }
