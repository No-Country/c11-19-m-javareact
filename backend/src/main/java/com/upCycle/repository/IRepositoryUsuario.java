package com.upCycle.repository;

import com.upCycle.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRepositoryUsuario extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);
}
