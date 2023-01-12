import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor( private myFormBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.formControls();
  }

  formControls(){
    this.loginForm = this.myFormBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }


  register(){
    console.log(this.loginForm.value)
  }

  Navigate(){
    this.router.navigate(['home'])
  }

  Register(){
    this.router.navigate(['register'])
  }
}
