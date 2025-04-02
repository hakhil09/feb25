import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';                           
import { CardComponent } from './card/card.component';
import { UpiComponent } from './upi/upi.component';

const routes: Routes = [ 
  {path:'card',component:CardComponent},
  {path:'upi',component:UpiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
