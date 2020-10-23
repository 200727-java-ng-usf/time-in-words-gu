package com.revature.services;


import com.revature.models.Event;
import com.revature.repos.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EventService {

    private EventRepo eventRepo;

    @Autowired
    public EventService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    @Transactional(readOnly = true)
    public Iterable<Event> getAllEvents() {
        return eventRepo.findAll();
    }



}
