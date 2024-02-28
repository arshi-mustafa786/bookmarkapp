import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-logincomponent',
  standalone: true,
  imports: [FormsModule,RouterModule,HttpClientModule],
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.scss'
})
export class Logincomponent {

  user : User = {};

  constructor(private userService :UserService,private router: Router ){
  }

  login():void{
    if(this.user.email){
      try{
        this.userService.loginUser(this.user.email);
        this.router.navigate(["/dashboard"]);
      }catch(error){
        console.log(error);
        this.router.navigate(["/"]);
      }
      
    }
  }


}
