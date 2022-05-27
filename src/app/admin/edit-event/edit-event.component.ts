import { AdminService } from 'src/app/admin.service';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/_Models/event';
import { Speaker } from 'src/app/_Models/speaker';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  ev:Event = new Event(1, " ", "", " ", [], [])
  Speakers:Speaker[] = []; //whole array of speakers
  AllSpeakers:string[]=[]//this.Speakers.map(a=>a.id)//only speaker's id
  
  Students:Student[] = []; //whole array of speakers
  AllStudents:number[] =[]// this.Students.map(a=>a.id)
  
  constructor(public AdServ:AdminService) 
  {
    this.AdServ.viewSpeakers().subscribe(a=>{this.Speakers = a.data, 
      this.AllSpeakers=this.Speakers.map(a=>{return a._id})//only speaker's id//empty array 
  
      
    })
    this.AdServ.viewStudents().subscribe(a=>{this.Students=a.data,
      this.AllStudents= this.Students.map(a=>{return a._id})
      
    })
  }
  EditEvent()
  {
    this.AdServ.EditEvent(this.ev).subscribe(a=>console.log(a))
  }
  ngOnInit(): void {
  }

}
