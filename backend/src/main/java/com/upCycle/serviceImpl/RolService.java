package com.upCycle.serviceImpl;

import com.upCycle.Entity.Rol;
import com.upCycle.enums.TipoRol;
import com.upCycle.repository.IRepositoryRol;
import com.upCycle.service.IRolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService implements IRolService {

    private IRepositoryRol rolRepo;

    @Autowired
    public RolService(IRepositoryRol rolRepo) {
        this.rolRepo = rolRepo;
    }

    @Override
    public Rol getRol(TipoRol nombreRol) {
        return rolRepo.findByNombreRol(nombreRol).get();
    }

    @Override
    public Boolean validarExistenciaRol(TipoRol nombreRol) {
        return rolRepo.existsByNombreRol(nombreRol);
    }
}
