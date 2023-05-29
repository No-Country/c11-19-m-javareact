package com.upCycle.service;

import com.upCycle.dto.request.DtoEcocreador;
import com.upCycle.dto.response.DtoEcocreadorResponse;
import com.upCycle.entity.Ecocreador;
import com.upCycle.entity.Usuario;
import com.upCycle.exception.UserAlreadyExistException;
import com.upCycle.mapper.EcocreadorMapper;
import com.upCycle.repository.UsuarioRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EcocreadorService {

    private final UsuarioRepository repository;
    private final EcocreadorMapper ecocreadorMapper;

    @Autowired
    public EcocreadorService(UsuarioRepository repository, EcocreadorMapper ecocreadorMapper) {
        this.repository = repository;
        this.ecocreadorMapper = ecocreadorMapper;
    }

    public DtoEcocreadorResponse registrarEcocreador(DtoEcocreador dtoEcocreador, HttpSession session) throws UserAlreadyExistException {

        Optional<Usuario> usuario = repository.findByEmail(dtoEcocreador.getEmail());

        if(usuario.isPresent()){
            throw new UserAlreadyExistException("El usuario ya existe");
        }

        Ecocreador user = repository.save(ecocreadorMapper.dtoEcocreadorAEntidad(dtoEcocreador));
        session.setAttribute("usuarioLogueado", user);
        return ecocreadorMapper.entidadADtoEcocreador(user);
    }
}
