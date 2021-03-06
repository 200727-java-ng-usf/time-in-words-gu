import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';
import { Event} from '../event';
import {DetailEventComponent} from '../detail-event/detail-event.component'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Observable<Event[]>;

  constructor(private eventService: EventServiceService,private router: Router) { }

  ngOnInit(){
    this.loadData();
    console.log(this.events[1]);
  }

  loadData() {
    this.events = this.eventService.getEventList();
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error));
  }
  updateEvent(id: number){
    this.router.navigate(['update', id]);
  }

  eventDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
