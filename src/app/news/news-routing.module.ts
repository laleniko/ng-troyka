import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';


const routes: Routes = [
  {path: '', component: NewsComponent},
  {
    path: ':link',
    component: NewsDetailsComponent,
    data: {
    breadcrumb: '' // TODO:Подумать как сделать хлебную крошку
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
