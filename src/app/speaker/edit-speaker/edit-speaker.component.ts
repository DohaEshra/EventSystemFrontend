import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_Models/speaker';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit {
Sp:Speaker= new Speaker(" ", " ", " ", " ",{city: " ",street: " ", building:" " })
token:string|null="";
constructor(public spkServ:SpeakerService) 
{ 
  this.token= localStorage.getItem('Authorization');  
  
}
EditProfile()
{
return this.spkServ.EditProfile(this.token, this.Sp)?.subscribe(
  res=>{console.log(res)},
  err=>{console.log(err)}
)
}

  ngOnInit(): void {
  }

}
