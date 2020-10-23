package com.revature.controllers;

import com.revature.exceptions.ResourceNotFoundException;
import com.revature.models.Event;
import com.revature.repos.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/eventApi")
public class EventController {

    private EventRepo eventRepo;

    @Autowired
    public EventController(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    @GetMapping("/events")
    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }


    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEmployeeById(@PathVariable(value = "id") Integer eventId)
            throws ResourceNotFoundException {
        Event event = eventRepo.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id : " + eventId));
        return ResponseEntity.ok().body(event);
    }

    @PostMapping("/events")
    public Event createEvent(@Valid @RequestBody Event event) {
        return eventRepo.save(event);
    }


    @PutMapping("/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable(value = "id") Integer eventId,
                                                   @Valid @RequestBody Event eventDetails) throws ResourceNotFoundException {
        Event event = eventRepo.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));

        event.setDate(eventDetails.getDate());
        event.setEventName(eventDetails.getEventName());
        event.setLocation(eventDetails.getLocation());
        event.setHour(eventDetails.getHour());
        event.setMinute(eventDetails.getMinute());
        Event updatedEvent = eventRepo.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/events/{id}")
    public Map<String, Boolean> deleteEvent(@PathVariable(value = "id") Integer eventId)
            throws ResourceNotFoundException {
        Event event = eventRepo.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + eventId));

        eventRepo.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }



}
