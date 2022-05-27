import { Speaker } from './_Models/speaker';
import { Student } from './_Models/student';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl="http://localhost:8080/login";
  StdRegurl="http://localhost:8080/register/Students";
  SpkRegurl="http://localhost:8080//register/Speaker";

  Login(email:string, password:string, role:string)
  {
    return this.http.post<{message:string, token:string}>(this.baseurl,{email, password, role} )
  }
  registerStudent(s:Student)
  {
    return this.http.post<{message:string, token:string}>(this.StdRegurl,{email:s.Email, password:s.password} )
  }
  registerSpeaker(s:Speaker)
  {
    return this.http.post<{message:string, token:string}>(this.SpkRegurl,{id:s._id, Email:s.Email,  username:s.UserName,
        password:s.password,  Address:{city:s.Address.city, street:s.Address.street, building:s.Address.building, role:"Speaker"}
  })
    // id:s.id, Email:s.Email,  username:s.username,
    //    password:s.password,  Address:{city:s.Address.city, street:s.Address.street, building:s.Address.building}
  }
  getToken()
  {
    return localStorage.getItem("Authorization")
  }

  constructor(public http:HttpClient) { }
}
