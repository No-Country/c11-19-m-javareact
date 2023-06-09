package com.upCycle.controller;

import com.upCycle.dto.request.DtoEcocreador;
import com.upCycle.dto.request.DtoEcoproveedor;
import com.upCycle.dto.request.DtoUsuario;
import com.upCycle.dto.response.DtoEcocreadorResponse;
import com.upCycle.dto.response.DtoEcoproveedorResponse;
import com.upCycle.dto.response.DtoUsuarioResponse;
import com.upCycle.exception.UserAlreadyExistException;
import com.upCycle.exception.UserNotExistException;
import com.upCycle.service.EcocreadorService;
import com.upCycle.service.EcoproveedorService;
import com.upCycle.service.UsuarioService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@Controller
@RequestMapping(path = "/api/auth")
@CrossOrigin(origins = "*")
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

    @PostMapping(path = "/registerEcoproveedor")
    public ResponseEntity<DtoEcoproveedorResponse> registrarEcoproveedor(@RequestBody DtoEcoproveedor ecoproveedor, HttpSession session) throws UserAlreadyExistException {

        DtoEcoproveedorResponse guardarEcoproveedor = ecoproveedorService.registrarEcoproveedor(ecoproveedor, session);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardarEcoproveedor);
    }

    @PostMapping(path = "/registerEcocreador")
    public ResponseEntity<DtoEcocreadorResponse> registrarEcocreador(@RequestBody DtoEcocreador dtoEcocreador, HttpSession session) throws UserAlreadyExistException {

        DtoEcocreadorResponse guardarEcocreador = ecocreadorService.registrarEcocreador(dtoEcocreador, session);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardarEcocreador);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<DtoUsuarioResponse> login(@RequestBody DtoUsuario usuarioRequest, HttpSession session) throws UserNotExistException {

        try {
            var usuarioLogueado = usuarioService.iniciarSession(usuarioRequest, session);
            return usuarioLogueado != null ? ResponseEntity.status(HttpStatus.ACCEPTED).body(usuarioLogueado) : ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

    @GetMapping(path = "/logout")
    public ResponseEntity<String> logout(HttpServletRequest request){

        HttpSession session = request.getSession(false);
        return usuarioService.cerrarSession(session) ? ResponseEntity.ok("Session cerrada correctamente") :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Nunca se inicio session wey. Registrate para eso");
    }

    @GetMapping(path = "/getUserUpdate")
    public ResponseEntity<DtoUsuarioResponse> getUsuario(HttpSession session){
        try {
            var usuario = usuarioService.getUsuario(session);
            return usuario != null ? ResponseEntity.ok().body(usuario) : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }catch (Exception ex){
            return ResponseEntity.internalServerError().build();
        }
    }
}
