import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './_Models/event';
import { Speaker } from './_Models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  baseurl="http://localhost:8080/Speaker";

  viewEvents()
  {

    return this.http.get<{data:Event[]}>(this.baseurl)

  }


  EditProfile(token:string|null, speak:Speaker)
  {
    if(token!==null)
    return this.http.put<{message:string, data:{}}>(this.baseurl, {Email:speak.Email, password:speak.password, userName:speak.UserName,
    Address:{city:speak.Address.city, street:speak.Address.street, building:speak.Address.building}  })  
  }
  constructor(public http:HttpClient) { }
}
