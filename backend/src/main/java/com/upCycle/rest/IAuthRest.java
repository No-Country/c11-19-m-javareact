package com.upCycle.rest;

import com.upCycle.dto.DtoRegistro;
import com.upCycle.exception.MiExcepcion;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(path = "/api/auth")
public interface IAuthRest {

    @PostMapping(path = "registerEcocreador")
    public ResponseEntity<String> registrarEcocreador(@RequestBody(required = true) DtoRegistro dtoRegistro) throws MiExcepcion;

    @PostMapping(path = "registerEcoproveedor")
    public ResponseEntity<String> registrarEcoproveedor(@RequestBody(required = true) DtoRegistro dtoRegistro) throws MiExcepcion;
}
