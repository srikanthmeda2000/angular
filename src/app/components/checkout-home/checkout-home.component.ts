import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShoppingCartService } from 'src/app/service/shopping_cart.service';

@Component({
  selector: 'app-checkout-home',
  templateUrl: './checkout-home.component.html',
  styleUrls: ['./checkout-home.component.css']
})
export class CheckoutHomeComponent implements OnInit {
  // loginForm:any;
  constructor(public shoppingCart:ShoppingCartService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loginForm=this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required]
  });

  onSubmit(){
    // const data = this.loginForm.value;
    // console.log(data);
  }

}
