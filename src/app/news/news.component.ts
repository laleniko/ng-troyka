import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from './news.service';
import { NewsModel } from './news.model';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit, OnDestroy {
  public news: NewsModel[];
  private newsSub: Subscription;

  constructor(
    private newsService: NewsService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.newsSub = this.newsService.getNews().subscribe((data: NewsModel[]) => {
      this.news = data;
      this.news = this.news.sort((a: NewsModel, b: NewsModel) =>
      new Date(a.publish_date).getTime() - new Date(b.publish_date).getTime()
      ).reverse();
    });

    this.title.setTitle('Тройка - новости');
    this.meta.updateTag({name: 'keywords', content: 'транспортная карта Тройка Москва новости'});
    this.meta.updateTag({
      name: 'description',
      content: 'Транспортная карта Тройка. Самые свежие новости о транспортной карте Тройка.'});
  }

  ngOnDestroy(): void {
    this.newsSub.unsubscribe();
  }

}
