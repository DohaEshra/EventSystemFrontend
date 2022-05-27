import { Speaker } from './../_Models/speaker';
import { Student } from './../_Models/student';
import { LoginService } from './../login.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public ar:ActivatedRoute, public regSer:LoginService) { 
  }
flag:number=0
std:Student= new Student(0, " ", " ");
spk:Speaker = new Speaker(" "," ", " ", " ",{city:" ", street:" ", building:" "} )

  ngOnInit(): void {

    this.ar.params.subscribe(
      a=>{
        this.flag=a['flag'];
      }
    )}
  registerStudent()
  {
    this.regSer.registerStudent(this.std).subscribe(
    res=>{
      res.token;
      console.log(res);
      localStorage.setItem("Authorization", res.token)
      },
      err=>console.log(err)
      )}

  registerSpeaker()
  {
    this.regSer.registerSpeaker(this.spk).subscribe(
      res=>{
        res.token;
      console.log(res);
      localStorage.setItem("Authorization", res.token)
      },
      err=>console.log(err)
    )
  }
  }
