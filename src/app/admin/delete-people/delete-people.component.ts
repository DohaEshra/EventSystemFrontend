import { AdminService } from './../../admin.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-people',
  templateUrl: './delete-people.component.html',
  styleUrls: ['./delete-people.component.css']
})
export class DeletePeopleComponent implements OnInit {
@Input() role=" ";
Email:string=" "; 
  constructor(public AdServ:AdminService, public router:Router) { }
  deletePeople()
  {
    this.AdServ.DeletePeople(this.role, this.Email)
    .subscribe(a=>console.log(a),
    err=>console.log(err));
    this.router.navigateByUrl("/Admin")
  }
  ngOnInit(): void {
  }

}
