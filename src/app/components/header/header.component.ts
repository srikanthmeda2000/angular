import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shopping_cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }
  // getCartLength(){

  // }
}
