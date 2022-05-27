import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import {MatChipsModule} from '@angular/material/chips'
import {MultiSelectModule} from 'primeng/multiselect';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddPeopleToEventComponent } from './add-people-to-event/add-people-to-event.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';


@NgModule({
  declarations: [
    AddEventComponent,
    AdminDetailsComponent,
    EditEventComponent,
    AddPeopleToEventComponent,
    EditPeopleComponent,
    DeletePeopleComponent,
    DeleteEventComponent
  ],
  imports: [
    CommonModule, FormsModule, DropdownModule,BrowserAnimationsModule,ListboxModule, MatChipsModule,MultiSelectModule
  ,CommonModule
  ]
})
export class AdminModule { }
