import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule
  ]
})
export class NewsModule { }
