import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';
import { Event} from '../event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: Event = new Event();
  submitted = false;
  hours = 12;
  mins = 59;

  constructor(private eventService: EventServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.event = new Event();
  }

  save() {
    this.eventService
    .createEvent(this.event).subscribe(data => {
      console.log(data)
      this.event = new Event();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/events']);
  }

  checkNumber(hourInput:number,minInput){
    if(hourInput>12 || minInput<0 || minInput>59){
      alert("retype time please");
    }
    this.submitted = false;
  }



}
