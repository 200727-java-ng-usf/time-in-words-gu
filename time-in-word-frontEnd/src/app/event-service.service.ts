import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private baseUrl = 'http://localhost:5001/eventApi/events';

  constructor(private http: HttpClient) { }

  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEvent(event: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, event);
  }

  updateEvent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEventList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
