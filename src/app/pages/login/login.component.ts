import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // LoginForm!: FormGroup ;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   
  }
  LoginForm=this.fb.group({
    email:[''],
    password:['']
  })

    signIn(){
      const data = this.LoginForm.value;
      console.log(data)
    }
    createAccount(){
      
    }
}



