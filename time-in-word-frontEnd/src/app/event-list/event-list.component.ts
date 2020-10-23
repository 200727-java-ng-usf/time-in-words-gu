import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';
import { Event} from '../event';

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

}
