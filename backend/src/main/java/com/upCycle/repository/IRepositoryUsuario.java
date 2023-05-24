package com.upCycle.repository;

import com.upCycle.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRepositoryUsuario extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(@Param("email") String email);
    Boolean existsByEmail(String email);
}