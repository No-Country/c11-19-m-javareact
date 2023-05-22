package com.upCycle.rest;

import com.upCycle.dto.DtoAuthRespuesta;
import com.upCycle.dto.DtoLogin;
import com.upCycle.dto.DtoRegistroEcocreador;
import com.upCycle.dto.dtoRegistroEcoproveedor;
import com.upCycle.exception.MiExcepcion;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(path = "/api/auth")
public interface IAuthRest {

    @PostMapping(path = "registerEcocreador")
    public ResponseEntity<String> registrarEcocreador(@RequestBody(required = true) DtoRegistroEcocreador dtoRegistroEcocreador) throws MiExcepcion;

    @PostMapping(path = "registerEcoproveedor")
    public ResponseEntity<String> registrarEcoproveedor(@RequestBody(required = true) dtoRegistroEcoproveedor dtoRegistroEcoproveedor) throws MiExcepcion;

    @PostMapping(path = "/login")
    public ResponseEntity<DtoAuthRespuesta> login(@RequestBody(required = true) DtoLogin dtoLogin);
}
