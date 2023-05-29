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

    public boolean iniciarSession(DtoUsuario dtoUsuario, HttpSession session) throws UserNotExistException {

        Optional<Usuario> oUser = repository.findByEmail(dtoUsuario.getEmail());
        Usuario user = oUser.orElse(null);

        if(user == null){
            throw new UserNotExistException("Este usuario no existe, intente con otro correo");
        }
        session.setAttribute("usuarioLogueado", user);

        return true;

    }
    public DtoUsuarioResponse obtenerPerfil(HttpSession session) {

        Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");

        if(logueado.isEcoproveedor(Rol.ECOPROVEEDOR)){
            Optional<Ecoproveedor> oEcoproveedor = repository.buscarEcoproveedorPorId(logueado.getId());
            return oEcoproveedor.map(ecoproveedorMapper::entidadADtoEcoproveedor).orElse(null);

        }else {
            Optional<Ecocreador> oEcocreador = repository.buscarEcocreadorPorId(logueado.getId());
            return oEcocreador.map(ecocreadorMapper::entidadADtoEcocreador).orElse(null);
        }
    }
}
