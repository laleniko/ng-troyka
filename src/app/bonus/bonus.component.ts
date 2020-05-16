import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.less']
})
export class BonusComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Тройка - бонусы');
    this.meta.updateTag({name: 'keywords', content: 'транспортная карта Тройка Москва бонусы бонусная программа лояльности'});
    this.meta.updateTag({name: 'description', content: 'Транспортная карта Тройка. Бонусная программа лояльности Тройка.'});
  }

}
