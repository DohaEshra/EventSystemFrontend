import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './_Models/event';
import { Speaker } from './_Models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  baseurl="http://localhost:8080/Speaker";
  //token:string|null
  viewEvents()
  {
   //let  headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
   //if(token!==null)
   //headers_object.set("Authorization", "Bearer " + token);
   //,{headers:headers_object}
    return this.http.get<{data:Event[]}>(this.baseurl)

  }

  //{ $set: {Email: request.body.Email, UserName: request.body.UserName, password:request.body.password, 
  //Address:{city:request.body.Address.city, street:request.body.Address.street, building: request.body.Address.building}}
  EditProfile(token:string|null, speak:Speaker)
  {
    if(token!==null)
    return this.http.put<{message:string, data:{}}>(this.baseurl, {Email:speak.Email, password:speak.password, userName:speak.UserName,
    Address:{city:speak.Address.city, street:speak.Address.street, building:speak.Address.building}  })  
  }
  constructor(public http:HttpClient) { }
}
