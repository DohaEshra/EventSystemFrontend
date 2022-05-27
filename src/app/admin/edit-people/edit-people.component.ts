import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Speaker } from 'src/app/_Models/speaker';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
@Input() role = " ";

stdoldEmail:string=" ";
stdNewEmail:string= " ";
//std:Student= new Student(0, " ", " ");
spk:Speaker = new Speaker(" ", " ", " ", " ",{city: " ", street:" ", building: " "})
EditStudent()
{
  this.AdServ.EditPeople(this.role,this.stdoldEmail,null, null, null, null, this.stdNewEmail)
  ?.subscribe(a=>console.log(a));
}
EditSpeaker()
{
  this.AdServ.EditPeople(this.role, this.spk.Email, this.spk.Address.city, this.spk.Address.street, this.spk.Address.building, this.spk.UserName, null)
}
  constructor(public AdServ:AdminService) { }

  ngOnInit(): void {
  }

}
