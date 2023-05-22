package com.upCycle.dto;

import lombok.Data;

//Esta clase va a ser la que nos devolverá la información con el token el tipo que tenga
@Data
public class DtoAuthRespuesta {
    private String accessToken;
    private String tokenType = "Bearer ";

    public DtoAuthRespuesta(String accessToken) {
        this.accessToken = accessToken;
    }
}
