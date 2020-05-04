import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './price.component';
import { PriceRoutingModule } from './price-routing.module';
import { ZorroModule } from '../zorro/zorro.module';



@NgModule({
  declarations: [PriceComponent],
  imports: [
    CommonModule,
    PriceRoutingModule,
    ZorroModule
  ]
})
export class PriceModule { }
