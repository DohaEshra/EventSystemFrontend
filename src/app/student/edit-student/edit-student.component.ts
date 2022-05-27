import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
token:string|null="";
Email:string = " ";
Password:string = " ";
  constructor(public stdSer: StudentService) 
  {
    this.token= localStorage.getItem('Authorization');  

  }
EditAcc()
{
  return this.stdSer.EditProfile(this.token, this.Email, this.Password)?.subscribe(
    res=>console.log(res),
    err=>console.log(err)
  )
}
  ngOnInit(): void { 
  }

}
