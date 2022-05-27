import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Roles:String[];
role:string="";
email="";
password="";
request={email:this.email,password:this.password, role: this.role}
// clicked(event:any)
// {
//   console.log(event);
// }

  constructor(public logSer: LoginService, public router:Router ) { 
      this.Roles= ["Admin", "Student", "Speaker"];

  }

  Login(){
    console.log(this.role)
    //let o:object= 
    this.logSer.Login(this.email, this.password, this.role).subscribe(a=>
      {//a.token;
        localStorage.setItem("Authorization", a.token)
        this.router.navigateByUrl("/"+this.role);
        //console.log(a.token);
      },
      err=>console.log(err)
      )
  }
  ngOnInit(): void {

  }

}
