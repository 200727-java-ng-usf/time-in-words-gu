import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';
import { Event} from '../event';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  id: number;
  event: Event;

  constructor(private eventService: EventServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.event = new Event();

    this.id = this.route.snapshot.params['id'];
    
    this.eventService.getEvent(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));
  }

  updateEvent() {
    this.eventService.updateEvent(this.id, this.event)
      .subscribe(data => {
        console.log(data);
        this.event = new Event();
        this.gotoList();
      }, error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/events']);
  }


  onSubmit() {
    this.updateEvent();    
  }

}
