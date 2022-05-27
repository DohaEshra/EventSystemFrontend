import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEventsComponent } from './view-events/view-events.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 

const routes:Routes=[
  {path:"", component:SpeakerDetailsComponent}
]

@NgModule({
  declarations: [
    ViewEventsComponent,
    SpeakerDetailsComponent,
    EditSpeakerComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports:[
    ViewEventsComponent,
    SpeakerDetailsComponent,
    EditSpeakerComponent
  ]
})
export class SpeakerModule { }
