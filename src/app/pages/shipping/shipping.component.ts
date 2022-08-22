import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shopping_cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(public shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }

}
