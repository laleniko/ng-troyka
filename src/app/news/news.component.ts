import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';
import {NewsModel} from './news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  news: NewsModel[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: NewsModel[]) => {
      this.news = data;
    });
  }

}
