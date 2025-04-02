import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { CreateUserComponent } from './create-user/create-user.component';





const routes: Routes = [
  {path:'Accounts',component:AccountsComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthenticationGuard], children:[
  {path:'login',component:LoginComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  {path:'sibilings1',component:Sibling1Component},
  {path:'sibilings2',component:Sibling2Component},
  {path:'create-user',component:CreateUserComponent},
  {path:'payments',
    loadChildren:()=>import('./payment/payment.module').then(m =>m.PaymentModule)
  }

   ]},
  {path:'',component:LoginComponent},
{path: 'login',component: LoginComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
