import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../news.service';
import { NewsModel } from '../news.model';
import { tap, mergeMap, map } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.less']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  private routerSub: Subscription;
  public newsItem: NewsModel;

  constructor(
    private activateRoute: ActivatedRoute,
    private newsService: NewsService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activateRoute.queryParams.pipe(
      map(data =>  +data.id),
      mergeMap((data) => {
        return this.newsService.getNewsItem(data).pipe(
          tap(news => {
            this.newsItem = news;
            this.setMeta();
          }),
          map(news => news.image)
        );
      }),
      mergeMap(imageId => {
        return this.newsService.getNewsImage(imageId).pipe(
          tap(data => this.newsItem.imageLink = data)
        );
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private setMeta(): void {
    this.title.setTitle(this.newsItem.title);
    this.meta.updateTag({name: 'keywords', content: this.newsItem.keywords});
    this.meta.updateTag({name: 'description', content: this.newsItem.description});
  }

}
