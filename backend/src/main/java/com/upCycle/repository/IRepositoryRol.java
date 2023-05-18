package com.upCycle.repository;

import com.upCycle.Entity.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRepositoryRol extends JpaRepository<Rol, Long> {

    Optional<Rol> findByNombre(String nombre);
}
