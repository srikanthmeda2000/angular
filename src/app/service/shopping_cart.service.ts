import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
shopping_cart_items: any[]=[];
  constructor() { }
  addProduct =(product:any)=>{
    let items=this.get_shopping_cart_items();
    if(items){
      items.push(product);
      localStorage.setItem('shopping_cart',JSON.stringify(items));
        }else{
          this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart',JSON.stringify(this.shopping_cart_items))

        }
// console.log('added',product)
// localStorage.setItem('shopping_cart',JSON.stringify(product))
  }
  get_shopping_cart_items=()=>{
    let items=localStorage.getItem('shopping_cart')
    return JSON.parse(items as any)
  }

getCartLength=()=>{
  let items = this.get_shopping_cart_items();
return items ? this.get_shopping_cart_items().length:0;
}
getTotal=()=>{
  let items=this.get_shopping_cart_items();
  return items?.reduce((acc:any,item:any)=>acc+item.price,0)
}
removeItem(p:any){
  let items=this.get_shopping_cart_items();
  const index=items.findIndex((item:any)=>item.id==p.id)
  if(index>=0){
    items.splice(index,1);
    return localStorage.setItem('shopping_cart',JSON.stringify(items))
  }
}
}