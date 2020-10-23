package com.revature.exceptions;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException() {
        super("No resource found!");
    }

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
