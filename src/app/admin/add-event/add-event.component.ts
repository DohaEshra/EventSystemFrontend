import { Student } from './../../_Models/student';
import { Speaker } from 'src/app/_Models/speaker';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Event } from 'src/app/_Models/event';
//import { Speaker } from 'src/app/_Models/event';
import { AdminService } from 'src/app/admin.service';
// import {ListboxModule} from 'primeng/listbox';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnChanges {
ev:Event = new Event(1, " ", "", " ", [], [])
Speakers:Speaker[] = []; //whole array of speakers
AllSpeakers:string[]=[]//this.Speakers.map(a=>a.id)//only speaker's id
 
Students:Student[] = []; //whole array of speakers
AllStudents:number[] =[]// this.Students.map(a=>a.id)

constructor(public AdServ: AdminService) { 
    this.AdServ.viewSpeakers().subscribe(a=>{this.Speakers = a.data, 
      this.AllSpeakers=this.Speakers.map(a=>{return a._id})//only speaker's id//empty array 
  
      
    })
    this.AdServ.viewStudents().subscribe(a=>{this.Students=a.data,
      this.AllStudents= this.Students.map(a=>{return a._id})
      
    })


  }
  AddEvent()
  {
    this.AdServ.AddEvent(this.ev).subscribe(a=>console.log(a));
  }

  ngOnInit(): void {

  }
  ngOnChanges(Changes: SimpleChanges): void {

  }

}
