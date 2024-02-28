import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user : User = {};

  constructor(private userService :UserService,private router: Router ){
  }

  register():void{
    if(this.user.email){
      try{
        this.userService.registerUser(this.user.email); 
        this.router.navigate(["/dashboard"]);
      }catch(error){
        console.log(error);
        this.router.navigate(["/login"]);
      }
      
      
    }
  }
}
