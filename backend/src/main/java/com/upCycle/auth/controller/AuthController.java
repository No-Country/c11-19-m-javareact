package com.upCycle.auth.controller;

import com.upCycle.auth.UserAlreadyExistException;
import com.upCycle.auth.dto.*;
import com.upCycle.auth.service.AuthService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authServicio;

    @PostMapping("/registerEcocreador")
    public ResponseEntity<AuthResponse> registrarEcocreador(@RequestBody DtoEcocreador dtoEcocreador) throws UserAlreadyExistException {

        authServicio.registrarEcocreador(dtoEcocreador);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/registerEcoproveedor")
    public ResponseEntity<AuthResponse> registrarEcoproveedor(@RequestBody DtoEcoproveedor dtoEcoproveedor) throws UserAlreadyExistException {

        authServicio.registrarEcoproveedor(dtoEcoproveedor);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody DtoLogin usuario, HttpSession session){
        return authServicio.login(usuario, session)? ResponseEntity.ok("Login exitoso") : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
    }

    @GetMapping("/profile")
    public ResponseEntity<DtoUsuario> getProfile(HttpSession session){
        return new ResponseEntity<>(authServicio.getProfile(session), HttpStatus.OK);
    }

}
