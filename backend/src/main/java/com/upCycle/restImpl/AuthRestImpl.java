package com.upCycle.restImpl;

import com.upCycle.dto.DtoAuthRespuesta;
import com.upCycle.dto.DtoLogin;
import com.upCycle.dto.dtoRegistroEcoproveedor;
import com.upCycle.Entity.EcoCreador;
import com.upCycle.Entity.EcoProveedor;
import com.upCycle.Entity.Usuario;
import com.upCycle.dto.DtoRegistroEcocreador;
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
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
    public ResponseEntity<String> registrarEcocreador(DtoRegistroEcocreador dtoRegistroEcocreador) throws MiExcepcion {

        if(usuarioService.validarExistenciaByEmail(dtoRegistroEcocreador.getEmail())){
            return new ResponseEntity<>("El usuario ya existe", HttpStatus.BAD_REQUEST);
        }

        EcoCreador usuario = new EcoCreador();
        usuario.setEmail(dtoRegistroEcocreador.getEmail());
        usuario.setNombre(dtoRegistroEcocreador.getNombre());
        usuario.setApellido(dtoRegistroEcocreador.getApellido());
        usuario.setOcupacion(dtoRegistroEcocreador.getOcupacion());
        dtoRegistroEcocreador.validarPassword();
        usuario.setPassword(passwordEncoder.encode(dtoRegistroEcocreador.getPassword()));
        usuario.setRoles(Collections.singletonList(rolService.getRol(TipoRol.ECOCREADOR)));
        usuarioService.guardarUsuario(usuario);
        return new ResponseEntity<>("Registro de usuario exitoso", HttpStatus.OK);

    }

    @Override
    public ResponseEntity<String> registrarEcoproveedor(dtoRegistroEcoproveedor dtoRegistroEcoproveedor) throws MiExcepcion {

        if(usuarioService.validarExistenciaByEmail(dtoRegistroEcoproveedor.getEmail())){
            return new ResponseEntity<>("El usuario ya existe", HttpStatus.BAD_REQUEST);
        }

        EcoProveedor usuario = new EcoProveedor();
        usuario.setNombre(dtoRegistroEcoproveedor.getNombre());
        usuario.setApellido(dtoRegistroEcoproveedor.getApellido());
        usuario.setRazonSocial(dtoRegistroEcoproveedor.getRazonSocial());
        usuario.setCuit(dtoRegistroEcoproveedor.getCuit());
        usuario.setEmail(dtoRegistroEcoproveedor.getEmail());
        dtoRegistroEcoproveedor.validarPassword();
        usuario.setPassword(passwordEncoder.encode(dtoRegistroEcoproveedor.getPassword()));
        usuario.setRoles(Collections.singletonList(rolService.getRol(TipoRol.ECOPROVEEDOR)));
        usuarioService.guardarUsuario(usuario);
        return new ResponseEntity<>("Registro de usuario exitoso", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<DtoAuthRespuesta> login(DtoLogin dtoLogin) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                dtoLogin.getUsername(), dtoLogin.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerador.generarToke(authentication);
        System.out.println(token);
        return new ResponseEntity<>(new DtoAuthRespuesta(token), HttpStatus.OK);
    }
}
