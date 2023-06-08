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

    public DtoUsuarioResponse iniciarSession(DtoUsuario dtoUsuario, HttpSession session){

        Optional<Usuario> oUser = repository.findByEmail(dtoUsuario.getEmail());
        if(oUser.isEmpty()){
            return null;
        }
        //Usuario user = oUser.orElseThrow(() -> new UserNotExistException("Este usuario no existe, intente con otro correo"));//Corregir. Capturar excepción
        Usuario usuario = oUser.get();
        if(usuario.getRol().equals(Rol.ECOPROVEEDOR)){
            Optional<Ecoproveedor> oEcoproveedor = repository.buscarEcoproveedorPorId(usuario.getId());
            if(oEcoproveedor.isPresent()){
                Ecoproveedor ecoproveedor = oEcoproveedor.get();
                session.setAttribute("usuarioLogueado", ecoproveedor);
                return ecoproveedorMapper.entidadADtoEcoproveedor(ecoproveedor);
            }
            //return oEcoproveedor.map(ecoproveedorMapper::entidadADtoEcoproveedor).orElseThrow(() -> new UserNotExistException("Usuario o contraseña incorrectas"));

        }else if(usuario.getRol().equals(Rol.ECOCREADOR)){
            Optional<Ecocreador> oEcocreador = repository.buscarEcocreadorPorId(usuario.getId());
            if(oEcocreador.isPresent()){
                Ecocreador ecocreador = oEcocreador.get();
                session.setAttribute("usuarioLogueado", ecocreador);
                return ecocreadorMapper.entidadADtoEcocreador(ecocreador);
            }
            //return oEcocreador.map(ecocreadorMapper::entidadADtoEcocreador).orElseThrow(() -> new UserNotExistException("Usuario o contraseña incorrectas"));
        }
        return null;
    }
    public boolean cerrarSession(HttpSession session) {

        if (session != null) {
            // Invalidar la sesión
            session.invalidate();
            return true;
        }
        return false;
    }

    public DtoUsuarioResponse getUsuario(HttpSession session) {

        Usuario usuario = (Usuario) session.getAttribute("usuarioLogueado");
        //Usuario user = oUser.orElseThrow(() -> new UserNotExistException("Este usuario no existe, intente con otro correo"));//Corregir. Capturar excepción
        //Usuario usuario = oUser.get();
        if(usuario.getRol().equals(Rol.ECOPROVEEDOR)){
            Optional<Ecoproveedor> oEcoproveedor = repository.buscarEcoproveedorPorId(usuario.getId());
            if(oEcoproveedor.isPresent()){
                Ecoproveedor ecoproveedor = oEcoproveedor.get();
                return ecoproveedorMapper.entidadADtoEcoproveedor(ecoproveedor);
            }

        }else if(usuario.getRol().equals(Rol.ECOCREADOR)){
            Optional<Ecocreador> oEcocreador = repository.buscarEcocreadorPorId(usuario.getId());
            if(oEcocreador.isPresent()){
                Ecocreador ecocreador = oEcocreador.get();
                return ecocreadorMapper.entidadADtoEcocreador(ecocreador);
            }
        }
        return null;
    }
}
