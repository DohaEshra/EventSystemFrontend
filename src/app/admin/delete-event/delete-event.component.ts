import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  EventId:number = 0;
  deleteEvent()
  {
    this.AdServ.DeleteEvent(this.EventId).subscribe(a=>console.log(a))
  }
  constructor(public AdServ:AdminService) { }

  ngOnInit(): void {
  }

}
