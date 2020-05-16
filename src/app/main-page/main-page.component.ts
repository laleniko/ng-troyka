import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgxMetrikaService } from '@kolkov/ngx-metrika';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private ym: NgxMetrikaService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Тройка - транспортная карта Москвы');
    this.meta.updateTag({name: 'keywords', content: 'Вся информация о карте тройка. Тарифы 2020 года.'});
    this.meta.updateTag({name: 'description', content: 'транспортная карта, Тройка, Москва, тарифы'});

    this.ym.hit.emit(); // TODO:check
  }

}
