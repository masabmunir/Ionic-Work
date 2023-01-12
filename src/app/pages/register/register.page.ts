import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backButton(){
    this.router.navigate(['login'])
  }

  Register(){
    this.router.navigate(['home'])
  }
}
