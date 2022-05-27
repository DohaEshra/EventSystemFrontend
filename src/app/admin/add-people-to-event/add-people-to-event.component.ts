import { AdminService } from 'src/app/admin.service';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/_Models/event';
import { Speaker } from 'src/app/_Models/speaker';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-add-people-to-event',
  templateUrl: './add-people-to-event.component.html',
  styleUrls: ['./add-people-to-event.component.css']
})
export class AddPeopleToEventComponent implements OnInit {
  //ev:Event = new Event(1, " ", "", " ", [], [])
  eventID:number=0;
  Speakers:Speaker[] = []; //whole array of speakers
  AllSpeakers:string[]=[]//this.Speakers.map(a=>a.id)//only speaker's id
  AddSpeakers:string[]|null=[]//this.Speakers.map(a=>a.id)//only speaker's id

  Students:Student[] = []; //whole array of speakers
  AllStudents:number[] =[]// this.Students.map(a=>a.id)
  AddStudents:number[]|null =[]// this.Students.map(a=>a.id)

  constructor(public AdServ:AdminService) 
  {
    this.AdServ.viewSpeakers().subscribe(a=>{this.Speakers = a.data, 
      this.AllSpeakers=this.Speakers.map(a=>{return a._id})//only speaker's id//empty array 
  
      
    })
    this.AdServ.viewStudents().subscribe(a=>{this.Students=a.data,
      this.AllStudents= this.Students.map(a=>{return a._id})
      
  })
  }
  AddPeopleEvent()
  {
    //if(this.AddStudents==null)
    // this.AdServ.AddPeopleToEvent(this.eventID, this.AddStudents, this.AddSpeakers)
    // .subscribe(a=>console.log(a))
    this.AdServ.AddPeopleToEvent(this.eventID, this.AddStudents, this.AddSpeakers)?.subscribe(a=>console.log(a))
    // if(this.AddSpeakers==null)
    // {this.AdServ.AddPeopleToEvent(this.eventID, this.AddStudents, null)
    // .subscribe(a=>console.log(a))}
  }

  ngOnInit(): void {
  }

}
