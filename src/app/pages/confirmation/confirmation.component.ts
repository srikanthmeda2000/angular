import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/service/api.service';
import { ShoppingCartService } from 'src/app/service/shopping_cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  private _jsonURL='assets/data/products.json'
  @Input() checkout_products: any;
  // @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(private http:HttpClient,public shopping_cart: ShoppingCartService,public shoppingCart:ShoppingCartService) { }
  getJson():Observable<any>{
    return this.http.get(this._jsonURL)
  }
  ngOnInit(): void {
    // addProduct =(product:any)=>{
    //   let items=this.get_shopping_cart_items();
    //   if(items){
    //     items.push(product);
    //     localStorage.setItem('shopping_cart',JSON.stringify(items));
    //       }else{
    //         this.shopping_cart_items.push(product);
    //     localStorage.setItem('shopping_cart',JSON.stringify(this.shopping_cart_items))
  
    // console.log('products', this.shopping_cart_service)
  }
  // removeItem(pro: any) {
  //   this.shopping_cart_service.removeItem(pro)
  //   this.deleteEvent.emit(pro)
  // }
}   
