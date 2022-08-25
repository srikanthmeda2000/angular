import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartService } from 'src/app/service/shopping_cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  // loginForm:any;
  constructor(public shoppingCart: ShoppingCartService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.loginForm =new FormGroup({
    //   "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]')]),
    // });
  }
  // submitData(){
  //   // if(this.loginForm.valid){
  //   // alert('proceed to pay');
  //   // }
  // }
  // get name(){ return this.loginForm.get('name');}
  adderssForm = this.fb.group({
    fullname: ['',Validators.required],
    phonenumber: ['',Validators.required],
    doorno: ['',Validators.required],
    street: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    pincode: ['',Validators.required]
  })

  onSubmit() {

  }
}
