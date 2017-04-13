import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components to routing
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

//import out guarts
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent },
  { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}