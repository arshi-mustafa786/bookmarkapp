import { Routes, defaultUrlMatcher } from '@angular/router';
import { Logincomponent } from './logincomponent/logincomponent.component';
import { authGuardGuard } from './auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AddbookComponent } from './addbook/addbook.component';

export const routes: Routes = [{
    path : "",
    component : Logincomponent
},{
    path : "login",
    component : Logincomponent
},{
    path : "register",
    component : RegisterComponent
},{
    path : "dashboard",
    component : DashboardComponent,
    canActivate : [authGuardGuard]
},{
    path : "add",
    component : AddbookComponent,
    canActivate : [authGuardGuard]
}];
