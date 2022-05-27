import { AdminService } from './../../admin.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-people',
  templateUrl: './delete-people.component.html',
  styleUrls: ['./delete-people.component.css']
})
export class DeletePeopleComponent implements OnInit {
@Input() role=" ";
Email:string=" "; 
  constructor(public AdServ:AdminService) { }
  deletePeople()
  {
    this.AdServ.DeletePeople(this.role, this.Email)
    .subscribe(a=>console.log(a),
    err=>console.log(err));
  }
  ngOnInit(): void {
  }

}
