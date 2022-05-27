import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Event } from 'src/app/_Models/event';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {
  token:string|null="";
  e:Event [] = []; 
  constructor(public SpkSer: SpeakerService, public Router:Router) 
  {
    //this.Router.navigateByUrl("/Speaker");
  }

  ngOnInit(): void {
    //this.Router.navigateByUrl("/Speaker");
    this.token= localStorage.getItem('Authorization'); //null on load 
    //while(this.token==null)
    //{

      console.log("Speaker token:"+this.token)
      this.SpkSer.viewEvents()?.subscribe(//this.token
      res=>{console.log(res)
        this.e=res.data;
        console.log(res.data)},
        err=>console.log(err) 
        )
      //}
  }

}
