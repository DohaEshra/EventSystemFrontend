import { ActivatedRoute } from '@angular/router';
import { Student } from './_Models/student';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Speaker } from './_Models/speaker';
import { Event } from './_Models/event';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseurl="http://localhost:8080/Admin";

  viewSpeakers()
  {
    return this.http.get<{data:Speaker[]}>(this.baseurl+"/ViewSpeakers");
  }
  viewStudents()
  {
    return this.http.get<{data:Student[]}>(this.baseurl+"/ViewStudents");
  }
  AddEvent(Ev:Event)
  {
    return this.http.post<{data:Event, message:string}>(this.baseurl, Ev)
  }
  EditEvent(Ev:Event)
  {
    return this.http.put<{data:Event, message:string}>(this.baseurl, Ev)
  }
  AddPeopleToEvent(eventID:number, students:number[]|null, Speakers:string[]|null)
  {
    //if(students?.length>0)
    if(students==null||students.length==0)
    return this.http.put<{data:Event, message:string}>(this.baseurl+"/addpeople",{Eventid:eventID, addstudent:null, addspeaker:Speakers})
  
    else if(Speakers==null||Speakers.length==0)
    return this.http.put<{data:Event, message:string}>(this.baseurl+"/addpeople",{Eventid:eventID, addstudent:students, addspeaker:null})

  }
  EditPeople(role:string, Email:string|null, city:string|null, street:string|null, building:string|null, username:string|null, NewEmail:string|null)
  {
    if(role=="Student")
    {
      return this.http.put<{data:Event, message:string}>(this.baseurl+"/editpeople",{Editrole:role, Email:Email, NewEmail:NewEmail} )
    }
    else if(role=="Speaker")
    {
      return this.http.put<{data:Event, message:string}>(this.baseurl+"/editpeople",{Editrole:role, userName:username, Email:Email, Address:{city:city, street:street,building:building}})
    }
  }
  DeletePeople(role:string, email:string)
  {
    return this.http.delete<{data:Event, message:string}>(this.baseurl+"/deletepeople",{params:{Deleterole:role, Email:email, role:"Admin"}})
    
  }
  DeleteEvent(Id:number)
  {
    return this.http.delete<{data:Event, message:string}>(this.baseurl,{params:{id:Id, role:"Admin"}})
  }
  constructor(public http:HttpClient, public Ar:ActivatedRoute) { }
}
