package com.upCycle.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class upCycleUtils {

    public upCycleUtils() {
    }

    public static ResponseEntity<String> getResponseEntity(String responseMessage, HttpStatus httpStatus){
        return new ResponseEntity<String>("{\"message\":\""+ responseMessage +"\"}", httpStatus);
    }
}
