import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { NgModule } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  
  
  ) 
  {

  }

  ngOnInit() {
   // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {

    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {

                
                if(data.success)
                {
                  this.returnUrl="/dashboard";
                  this.router.navigate([this.returnUrl]);
                }else{
                  
                  this.alertService.error(data.message);
                  this.loading = false;
                }
            
            },
            error => {
                
                this.alertService.error(error);
                this.loading = false;
            });
  }
}
