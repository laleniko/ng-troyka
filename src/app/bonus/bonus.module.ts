import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusComponent } from './bonus.component';
import { BonusRoutingModule } from './bonus-routing.module';



@NgModule({
  declarations: [BonusComponent],
  imports: [
    CommonModule,
    BonusRoutingModule
  ]
})
export class BonusModule { }
