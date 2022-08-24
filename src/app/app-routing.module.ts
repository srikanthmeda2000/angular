import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutHomeComponent } from './components/checkout-home/checkout-home.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ShippingComponent } from './pages/shipping/shipping.component';

const routes: Routes = [
  {path:'',component:HomeComponent  },
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path: 'register' ,component:RegisterComponent},
  {path:'checkout-home',component:CheckoutHomeComponent},
  { path:'shipping',component:ShippingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'confirmation',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
