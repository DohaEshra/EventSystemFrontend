import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
flag:number=0;
role:string=" ";
roles:string[]=[]
ShowAddEvent()
{
  this.flag = 1;

}
ShowEditEvent()
{
  this.flag = 2;
}
EditPeople()
{
  this.flag = 3;
}
ShowAddPeople()
{
  this.flag = 4;
}
DeletePeople()
{
  this.flag = 5;
}
DeleteEvent()
{
  this.flag = 6;
}
  constructor() 
  {
    this.roles= ["Student", "Speaker"]
  }

  ngOnInit(): void {
  }

}
