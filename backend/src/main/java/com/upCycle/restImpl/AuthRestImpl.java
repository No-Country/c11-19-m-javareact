package com.upCycle.restImpl;

import com.upCycle.constants.upCycleConstant;
import com.upCycle.utils.upCycleUtils;
import com.upCycle.Entity.EcoCreador;
import com.upCycle.Entity.EcoProveedor;
import com.upCycle.Entity.Usuario;
import com.upCycle.dto.DtoRegistro;
import com.upCycle.enums.TipoRol;
import com.upCycle.exception.MiExcepcion;
import com.upCycle.rest.IAuthRest;
import com.upCycle.security.JwtGenerador;
import com.upCycle.service.IRolService;
import com.upCycle.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
public class AuthRestImpl implements IAuthRest{

    private AuthenticationManager authenticationManager;
    private PasswordEncoder passwordEncoder;
    private JwtGenerador jwtGenerador;
    private IRolService rolService;
    private IUsuarioService usuarioService;

    @Autowired
    public AuthRestImpl(AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder, JwtGenerador jwtGenerador,
                        IRolService rolService, IUsuarioService usuarioService) {

        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerador = jwtGenerador;
        this.rolService = rolService;
        this.usuarioService = usuarioService;
    }

    @Override
    public ResponseEntity<String> registrarEcocreador(DtoRegistro dtoRegistro) throws MiExcepcion {

        if(usuarioService.validarExistenciaByEmail(dtoRegistro.getEmail())){
            return new ResponseEntity<>("El usuario ya existe", HttpStatus.BAD_REQUEST);
        }

        Usuario usuario = new EcoCreador();
        usuario.setEmail(dtoRegistro.getEmail());
        dtoRegistro.validarPassword();
        usuario.setPassword(passwordEncoder.encode(dtoRegistro.getPassword()));
        usuario.setRoles(Collections.singletonList(rolService.getRol(TipoRol.ECOCREADOR)));
        usuarioService.guardarUsuario(usuario);
        return new ResponseEntity<>("Registro de usuario exitoso", HttpStatus.OK);

    }

    @Override
    public ResponseEntity<String> registrarEcoproveedor(DtoRegistro dtoRegistro) throws MiExcepcion {

        if(usuarioService.validarExistenciaByEmail(dtoRegistro.getEmail())){
            return new ResponseEntity<>("El usuario ya existe", HttpStatus.BAD_REQUEST);
        }

        Usuario usuario = new EcoProveedor();
        usuario.setEmail(dtoRegistro.getEmail());
        dtoRegistro.validarPassword();
        usuario.setPassword(passwordEncoder.encode(dtoRegistro.getPassword()));
        usuario.setRoles(Collections.singletonList(rolService.getRol(TipoRol.ECOPROVEEDOR)));
        usuarioService.guardarUsuario(usuario);
        return new ResponseEntity<>("Registro de usuario exitoso", HttpStatus.OK);
    }
}
