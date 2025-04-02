import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CardComponent } from './card/card.component';
import { UpiComponent } from './upi/upi.component';


@NgModule({
  declarations: [
    CardComponent,
    UpiComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
