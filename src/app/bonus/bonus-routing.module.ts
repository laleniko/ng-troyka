import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonusComponent } from './bonus.component';


const routes: Routes = [
  {path: '', component: BonusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusRoutingModule { }
