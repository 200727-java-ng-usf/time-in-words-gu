import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEventComponent} from '../app/create-event/create-event.component';
import {EventListComponent} from '../app/event-list/event-list.component';


const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'add', component: CreateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
