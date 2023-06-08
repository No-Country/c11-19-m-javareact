package com.upCycle.service;

import com.upCycle.entity.Ubicacion;
import com.upCycle.repository.UbicacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UbicacionService {

    private final UbicacionRepository repository;

    @Autowired
    public UbicacionService(UbicacionRepository repository) {
        this.repository = repository;
    }

    public Ubicacion buscarPorNombre(String nombre){

        return repository.findByNombre(nombre).orElseThrow(null);
    }
}
