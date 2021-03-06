import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import { NgxMetrikaService } from '@kolkov/ngx-metrika';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less']
})
export class PriceComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private ym: NgxMetrikaService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Тройка - тарифы 2020');
    this.meta.updateTag({name: 'keywords', content: 'Транспортная карта Тройка. Тарифы и билеты в 2020 году. Единый, ТАТ, кошелек.'});
    this.meta.updateTag({
      name: 'description',
      content: 'транспортная карта Тройка Москва, стоимость, тарифы, билет, единый, кошелек, ТАТ'});

    this.ym.hit.emit(); // TODO:check
  }

}
