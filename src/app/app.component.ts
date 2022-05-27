import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'projectAngular';
  constructor(public router: Router){}
  hm:HomeComponent=new HomeComponent();
  Logout()
  {
    localStorage.removeItem("Authorization");
    console.log("removed") 
    this.router.navigateByUrl("/home")

  }
  ngOnInit(): void {
    this.router.navigateByUrl("/home")
    
  }
}
