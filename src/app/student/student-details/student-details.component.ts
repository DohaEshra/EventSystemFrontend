import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { ViewEventsComponent } from '../view-events/view-events.component';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(public stdSer: StudentService) { }

  ngOnInit(): void {
  }

}
