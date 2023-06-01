package com.upCycle.service;

import com.upCycle.dto.request.DtoUsuario;
import com.upCycle.dto.response.DtoUsuarioResponse;
import com.upCycle.entity.Ecocreador;
import com.upCycle.entity.Ecoproveedor;
import com.upCycle.entity.Usuario;
import com.upCycle.enums.Rol;
import com.upCycle.exception.UserNotExistException;
import com.upCycle.mapper.EcocreadorMapper;
import com.upCycle.mapper.EcoproveedorMapper;
import com.upCycle.repository.UsuarioRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    private final EcoproveedorMapper ecoproveedorMapper;

    private final EcocreadorMapper ecocreadorMapper;

    @Autowired
    public UsuarioService(UsuarioRepository repository, EcoproveedorMapper ecoproveedorMapper, EcocreadorMapper ecocreadorMapper) {
        this.repository = repository;
        this.ecoproveedorMapper = ecoproveedorMapper;
        this.ecocreadorMapper = ecocreadorMapper;
    }

    public DtoUsuarioResponse iniciarSession(DtoUsuario dtoUsuario, HttpSession session) throws UserNotExistException {

        Optional<Usuario> oUser = repository.findByEmail(dtoUsuario.getEmail());
        Usuario user = oUser.orElseThrow(() -> new UserNotExistException("Este usuario no existe, intente con otro correo"));//Corregir. Capturar excepción

        if(user.getRol().equals(Rol.ECOPROVEEDOR) && user.getPassword().equals(dtoUsuario.getPassword())){
            Optional<Ecoproveedor> oEcoproveedor = repository.buscarEcoproveedorPorId(user.getId());
            session.setAttribute("usuarioLogueado", oEcoproveedor.get());
            return oEcoproveedor.map(ecoproveedorMapper::entidadADtoEcoproveedor).orElseThrow(() -> new UserNotExistException("Usuario o contraseña incorrectas"));

        }else if(user.getRol().equals(Rol.ECOCREADOR) && user.getPassword().equals(dtoUsuario.getPassword())){
            Optional<Ecocreador> oEcocreador = repository.buscarEcocreadorPorId(user.getId());
            session.setAttribute("usuarioLogueado", oEcocreador.get());
            return oEcocreador.map(ecocreadorMapper::entidadADtoEcocreador).orElseThrow(() -> new UserNotExistException("Usuario o contraseña incorrectas"));
        }else {
            return null;
        }

    }
    public boolean cerrarSession(HttpSession session) {

        if (session != null) {
            // Invalidar la sesión
            session.invalidate();
            return true;
        }
        return false;
    }
}
