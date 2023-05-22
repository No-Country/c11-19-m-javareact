package com.upCycle.serviceImpl;

import com.upCycle.Entity.Usuario;
import com.upCycle.repository.IRepositoryUsuario;
import com.upCycle.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUsuarioService {

    private IRepositoryUsuario usuarioRepo;

    @Autowired
    public UserServiceImpl(IRepositoryUsuario usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }

    @Override
    public void guardarUsuario(Usuario usuario) {
        usuarioRepo.save(usuario);
    }

    @Override
    public Usuario getUsuarioByEmail(String email) {
        return usuarioRepo.findByEmail(email).get();
    }

    @Override
    public Boolean validarExistenciaByEmail(String email) {
        return usuarioRepo.existsByEmail(email);
    }
}
