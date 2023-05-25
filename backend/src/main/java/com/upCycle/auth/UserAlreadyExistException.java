package com.upCycle.auth;

public class UserAlreadyExistException extends Exception{

    public UserAlreadyExistException(String message) {
        super(message);
    }
}
