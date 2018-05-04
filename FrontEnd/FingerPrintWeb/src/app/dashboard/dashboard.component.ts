import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { NgModule,NgZone } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentification.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  load_upload_attendence:boolean=false;

  constructor(private router:Router, private route: ActivatedRoute,

    private authenticationService: AuthenticationService,
    private alertService: AlertService,private zone:NgZone
    
  ) {
    
    

  }

  ngOnInit() {
   
  }
  load_upload_attendence_component()
  {
    this.load_upload_attendence=true;

  }

  logout()
  {
   
    this.authenticationService.logout()
    this.router.navigate(["/login"]);  
  }
  

}
