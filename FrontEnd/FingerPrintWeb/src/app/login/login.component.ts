import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router:Router) {

    

   }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
}

}
