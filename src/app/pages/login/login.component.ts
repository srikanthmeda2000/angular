import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  loginForm = this.fb.group({
    email:'',
    password:''
  });


  signIn(){
      const data = this.loginForm.value;
      console.log(data);
  }

    createAccount(){
      
    }
}




