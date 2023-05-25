package com.upCycle.auth.service;

import com.upCycle.auth.UserAlreadyExistException;
import com.upCycle.auth.config.JwtService;
import com.upCycle.auth.dto.*;
import com.upCycle.auth.entity.Usuario;
import com.upCycle.auth.enums.Rol;
import com.upCycle.auth.repository.UsuarioRepository;
import com.upCycle.entity.Ecocreador;
import com.upCycle.entity.Ecoproveedor;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UsuarioRepository usuarioRepositorio;

    private final AuthenticationManager authenticationManager;

    public void registrarEcocreador(DtoEcocreador dtoEcocreador) throws UserAlreadyExistException {

        var usuario = usuarioRepositorio.findByEmail(dtoEcocreador.getEmail());

        if (usuario.isEmpty()) {

            Usuario ecocreador = Ecocreador.builder()
                    .nombre(dtoEcocreador.getNombre())
                    .apellido(dtoEcocreador.getApellido())
                    .email(dtoEcocreador.getEmail())
                    .ocupacion(dtoEcocreador.getOcupacion())
                    .password(passwordEncoder.encode(dtoEcocreador.getPassword()))
                    .foto(dtoEcocreador.getFoto())
                    .rol(Rol.ECOCREADOR)
                    .build();

            usuarioRepositorio.save(ecocreador);

        }else {
            throw new UserAlreadyExistException("El usuario ya existe");
        }
        /*
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .jwt(jwtToken)
                .build();
 */
    }

    public void registrarEcoproveedor(DtoEcoproveedor dtoEcoproveedor) throws UserAlreadyExistException{

        var usuario = usuarioRepositorio.findByEmail(dtoEcoproveedor.getEmail());

        if(usuario.isEmpty()){
            var user = Ecoproveedor.builder()
                    .nombre(dtoEcoproveedor.getNombre())
                    .apellido(dtoEcoproveedor.getApellido())
                    .email(dtoEcoproveedor.getEmail())
                    .razonSocial(dtoEcoproveedor.getRazonSocial())
                    .cuit(dtoEcoproveedor.getCuit())
                    .password(passwordEncoder.encode(dtoEcoproveedor.getPassword()))
                    .foto(dtoEcoproveedor.getFoto())
                    .rol(Rol.ECOPROVEEDOR)
                    .build();
            usuarioRepositorio.save(user);

        }else {
            throw new UserAlreadyExistException("El usuario ya existe");
        }
        /*
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().jwt(jwtToken).build();

         */
    }

    public boolean login(DtoLogin usuario, HttpSession session) {
        try {

            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    usuario.getEmail(),
                    usuario.getPassword()
            );
            Authentication authenticated = authenticationManager.authenticate(authentication);
            SecurityContextHolder.getContext().setAuthentication(authenticated);
            session.setAttribute("usuario", usuario.getEmail());
            // El usuario se autenticó correctamente
            return true;
        } catch (AuthenticationException e) {
            // La autenticación falló
            return false;
        }
    }

    public DtoUsuario getProfile(HttpSession session) {

        String email = (String) session.getAttribute("usuario");

        Usuario usuario = usuarioRepositorio.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {

            boolean esEcocreador = usuario.getRol().equals(Rol.ECOCREADOR);
            boolean esEcoproveedor = usuario.getRol().equals(Rol.ECOPROVEEDOR);

            if (esEcocreador) {
                DtoEcocreador ecoCreador = new DtoEcocreador();
                ecoCreador.setNombre(usuario.getNombre());
                ecoCreador.setApellido(usuario.getApellido());
                ecoCreador.setOcupacion(usuario.getOcupacion());
                ecoCreador.setFoto(usuario.getFoto());
                ecoCreador.setEmail(usuario.getEmail());
                ecoCreador.setRol(usuario.getRol().name());
                return ecoCreador;

            } else if (esEcoproveedor) {
                DtoEcoproveedor ecoProveedor = new DtoEcoproveedor();
                ecoProveedor.setNombre(usuario.getNombre());
                ecoProveedor.setApellido(usuario.getApellido());
                ecoProveedor.setRazonSocial(usuario.getRazonSocial());
                ecoProveedor.setCuit(usuario.getCuit());
                ecoProveedor.setFoto(usuario.getFoto());
                ecoProveedor.setEmail(usuario.getEmail());
                ecoProveedor.setRol(usuario.getRol().name());
                return ecoProveedor;
            }
        }
        return null;
    }

}
