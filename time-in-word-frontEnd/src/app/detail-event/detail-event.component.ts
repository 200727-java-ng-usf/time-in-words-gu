import { Component, OnInit } from '@angular/core';
import {EventListComponent} from '../event-list/event-list.component'
import { ActivatedRoute,Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';
import { Event} from '../event';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  id: number;
  event: Event;
  nums:string[];
  timeInword:string;


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

  list(){
    this.router.navigate(['events']);
  }

  printWords(h:number,m:number){

    this.nums = ["zero", "one", "two", "three", "four", 
    "five", "six", "seven", "eight", "nine", 
    "ten", "eleven", "twelve", "thirteen", 
    "fourteen", "fifteen", "sixteen", "seventeen", 
    "eighteen", "nineteen", "twenty", "twenty one", 
    "twenty two", "twenty three", "twenty four", 
    "twenty five", "twenty six", "twenty seven", 
    "twenty eight", "twenty nine", 
    ]; 

    if (m == 0) 
    return (this.nums[h] + " o' clock "); 

else if (m == 1) 
    return("one minute past " +  this.nums[h]); 

else if (m == 59) 
return("one minute to " +  
this.nums[(h % 12) + 1]); 

else if (m == 15) 
return("quarter past " + this.nums[h]); 

else if (m == 30) 
return("half past " + this.nums[h]); 

else if (m == 45) 
return("quarter to " +  
this.nums[(h % 12) + 1]); 

else if (m <= 30) 
return( this.nums[m] + " minutes past " + 
this.nums[h]); 

else if (m > 30) 
return( this.nums[60 - m] + " minutes to " +      
this.nums[(h % 12) + 1]); 
  }



}
