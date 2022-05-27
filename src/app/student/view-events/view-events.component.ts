import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Event } from 'src/app/_Models/event';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {
token:string|null="";
 e:Event [] = []; 
// private jwt() {
//   // create authorization header with jwt token
//   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//   if (currentUser && currentUser.token) {
//       let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
//       return new RequestOptions({ headers: headers });
//   }
// }

  constructor(public stdServ:StudentService) { }
//{message:string, token:string}
  ngOnInit(): void {
    //return an array of events

    this.token= localStorage.getItem('Authorization');  
    console.log("Student token:"+this.token)
    this.stdServ.viewEvents(this.token)?.subscribe(
      a=>{console.log(a.data)// message data
        this.e = a.data;
      console.log(this.e)},
      err=>console.log(err))
    
    
  }

}
