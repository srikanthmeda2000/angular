import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShoppingCartService } from 'src/app/service/shopping_cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(public shopping_cart: ShoppingCartService,public shoppingCart:ShoppingCartService,private fb: FormBuilder) { }


  public one: boolean = false;
  public two: boolean = false;
  ngOnInit(): void {
   

    }
    paymentForm = this.fb.group({
      cardnumber: ['',Validators.required] 
    })

  card() {
    this.one = true;
    this.two = false;
  }
  del() {
    this.one = false;
    this.two = true;
  }

}