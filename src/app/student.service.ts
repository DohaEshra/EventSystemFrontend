import { Event } from './_Models/event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseurl="http://localhost:8080/Students";
 //token = localStorage.getItem("Authorization");
 //{message:string, token:string}
 viewEvents(token:string|null)
 { 
   let  headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
   if(token!==null)
   //headers_object.set("Authorization", "Bearer " + token);
    return this.http.get<{data:Event[]}>(this.baseurl,{headers:headers_object})

  }
EditProfile(token:string|null, Email:string, Password:string)
{
  let  headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  if(token!==null)
  return this.http.put<{message:string, data:{}}>(this.baseurl,{email:Email, password:Password}, {headers:headers_object} )
}

  constructor(public http:HttpClient) { }
}
