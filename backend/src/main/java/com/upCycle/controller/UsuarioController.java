package com.upCycle.controller;

import com.upCycle.dto.request.DtoEcocreador;
import com.upCycle.dto.request.DtoEcoproveedor;
import com.upCycle.dto.request.DtoUsuario;
import com.upCycle.dto.response.DtoEcocreadorResponse;
import com.upCycle.dto.response.DtoEcoproveedorResponse;
import com.upCycle.exception.UserAlreadyExistException;
import com.upCycle.exception.UserNotExistException;
import com.upCycle.service.EcocreadorService;
import com.upCycle.service.EcoproveedorService;
import com.upCycle.service.UsuarioService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/auth")
public class UsuarioController {

    private final EcoproveedorService ecoproveedorService;
    private final EcocreadorService ecocreadorService;
    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(EcoproveedorService ecoproveedorService, EcocreadorService ecocreadorService, UsuarioService usuarioService) {
        this.ecoproveedorService = ecoproveedorService;
        this.ecocreadorService = ecocreadorService;
        this.usuarioService = usuarioService;
    }

    @PostMapping("/registerEcoproveedor")
    public ResponseEntity<DtoEcoproveedorResponse> registrarEcoproveedor(@RequestBody DtoEcoproveedor ecoproveedor, HttpSession session) throws UserAlreadyExistException {

        DtoEcoproveedorResponse guardarEcoproveedor = ecoproveedorService.registrarEcoproveedor(ecoproveedor, session);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardarEcoproveedor);
    }

    @PostMapping("/registerEcocreador")
    public ResponseEntity<DtoEcocreadorResponse> registrarEcocreador(@RequestBody DtoEcocreador dtoEcocreador, HttpSession  session) throws UserAlreadyExistException {

        DtoEcocreadorResponse guardarEcocreador = ecocreadorService.registrarEcocreador(dtoEcocreador, session);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardarEcocreador);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody DtoUsuario usuarioRequest, HttpSession session) throws UserNotExistException {

        return usuarioService.iniciarSession(usuarioRequest, session) ? ResponseEntity.ok("Login exitoso") : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Credenciales inválidas");
    }

    @GetMapping("/profile")
    public ResponseEntity<?> obtenerPerfil(HttpSession session){

        var perfil = usuarioService.obtenerPerfil(session);
        return ResponseEntity.ok(perfil);
    }

    @GetMapping("/saludar")
    public String saludar(){
        return "Hola equipo c11-19";
    }
}
