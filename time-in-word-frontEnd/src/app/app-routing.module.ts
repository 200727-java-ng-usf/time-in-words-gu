import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {CreateEventComponent} from '../app/create-event/create-event.component';
import {EventListComponent} from '../app/event-list/event-list.component';
import {UpdateEventComponent} from '../app/update-event/update-event.component'


const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'add', component: CreateEventComponent },
  { path: 'update/:id', component: UpdateEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
