import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { NgModule } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentification.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute,

    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    
    

  }

  ngOnInit() {
  }

  logout()
  {
   
    this.authenticationService.logout()
       
  }
  

}
