import { StudentDetailsComponent } from './student/student-details/student-details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register/:flag", component:RegisterComponent},
  {path:"Student", component:StudentDetailsComponent},
  {path:"Admin", component:AdminDetailsComponent},


  {path:"Speaker",loadChildren:()=>import('./speaker/speaker.module').then(m=>m.SpeakerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
