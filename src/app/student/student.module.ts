import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditStudentComponent,
    ViewEventsComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
    EditStudentComponent,
    ViewEventsComponent
  ]
})
export class StudentModule { }
