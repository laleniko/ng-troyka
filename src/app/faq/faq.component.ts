import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FaqService } from './faq.service';
import { NewsModel } from '../news/news.model';
import { FaqModel } from './faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit, OnDestroy {

  private faqSub: Subscription;
  public faq: FaqModel[];

  constructor(
    private title: Title,
    private meta: Meta,
    private faqService: FaqService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Тройка - вопросы и ответы');
    this.meta.updateTag({name: 'keywords', content: 'транспортная карта Тройка Москва ответы и вопросы баланс Сбербанк онлайн пополнение'});
    this.meta.updateTag({name: 'description', content: 'Транспортная карта Тройка. Ответы на самые популярные вопросы. Что такое карта тройка? Где пополнить и сколько стоит? Как узнать баланс?'});

    this.faqSub = this.faqService.getNews()
      .subscribe(faq => this.faq = faq);
  }

  ngOnDestroy(): void {
    this.faqSub.unsubscribe();
  }

}
