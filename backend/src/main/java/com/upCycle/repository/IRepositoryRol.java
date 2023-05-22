package com.upCycle.repository;

import com.upCycle.Entity.Rol;
import com.upCycle.enums.TipoRol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRepositoryRol extends JpaRepository<Rol, Long> {

    Optional<Rol> findByNombreRol(TipoRol nombreRol);
    Boolean existsByNombreRol(TipoRol tipo);
}
