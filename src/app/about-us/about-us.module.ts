import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-company/about-company.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutCompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
