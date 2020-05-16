import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'price',
    loadChildren: () => import('./price/price.module').then(m => m.PriceModule),
    data: {
      breadcrumb: 'Тарифы'
    }
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
    data: {
      breadcrumb: 'Вопросы и Ответы'
    }
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
    data: {
      breadcrumb: 'Новости'
    }
  },
  {
    path: 'bonus',
    loadChildren: () => import('./bonus/bonus.module').then(m => m.BonusModule),
    data: {
      breadcrumb: 'Бонусы'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
