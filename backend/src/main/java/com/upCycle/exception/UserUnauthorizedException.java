package com.upCycle.exception;

import org.springframework.http.HttpStatus;

public class UserUnauthorizedException extends Exception {
    public UserUnauthorizedException(String message) {
        super(message);
    }
}
