import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shopping_cart.service';

@Component({
  selector: 'app-checkout-home',
  templateUrl: './checkout-home.component.html',
  styleUrls: ['./checkout-home.component.css']
})
export class CheckoutHomeComponent implements OnInit {

  constructor(public shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }

}
