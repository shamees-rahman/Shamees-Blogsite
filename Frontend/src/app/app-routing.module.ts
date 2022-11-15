import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [{path:'', component:HomeComponent},
{path:'signup', component:SignupComponent},
{path:'blogpage', component:BlogpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
