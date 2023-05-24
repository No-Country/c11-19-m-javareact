package com.upCycle.rest;

import com.upCycle.Entity.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping(path = "api/user")
public interface IUsuarioRest {

    /*
    @PostMapping(path = "/signup")
    public ResponseEntity<String> signup(@RequestBody(required = true) Map<String, String> requestMap);

     */

    @GetMapping(path = "/{id}")
    public ResponseEntity<Usuario> ObtenerUsuarioPorId(@PathVariable Long id);


}
