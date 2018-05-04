import { NgModule } from '@angular/core';

import { RouterModule, Routes,CanActivate } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { 
     AuthGuard 
  } from './_guards/auth.guard';
import { UploadAttendenceComponent } from './upload-attendence/upload-attendence.component';
const routes: Routes = [

    {
         path: 'login', component: LoginComponent
    },

   
   {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard] 
}
   

];

@NgModule({

imports: [

RouterModule.forRoot(routes),


],

exports: [

RouterModule

],

declarations: []

})

export class AppRoutingModule { }