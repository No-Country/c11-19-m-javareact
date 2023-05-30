package com.upCycle.repository;

import com.upCycle.entity.Ubicacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UbicacionRepository extends JpaRepository<Ubicacion, Long> {

    Optional<Ubicacion> findByNombre(String nombre);
}
