import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less']
})
export class PriceComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Тройка - тарифы 2020');
    this.meta.addTags([
        {name: 'keywords', content: 'Транспортная карта Тройка. Тарифы и билеты в 2020 году. Единый, ТАТ, кошелек.'},
        {
          name: 'description',
          content: 'транспортная карта Тройка Москва, стоимость, тарифы, билет, единый, кошелек, ТАТ'
        }
      ]
    );
  }

}
